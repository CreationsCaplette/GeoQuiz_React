import { useCallback, useEffect, useRef, useState } from "react";

async function sendHttpRequest(url, config) {
    const response = await fetch(url, config);

    let resData = {};
    try {
        resData = await response.json()
    } catch {
        resData = {};
    }

    if (!response.ok) {
        throw new Error(resData.message || `Request failed with status ${response.status}.`);
    }

    return resData;
}

export default function useHttp(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const initialRequestRef = useRef(null);

    function clearData() {
        setData(initialData);
    }

    const sendRequest = useCallback(
        async function sendRequest(data) {
            setIsLoading(true);
            setError(null);

            try {
                const resData = await sendHttpRequest(url, { ...config, body: data });
                setData(resData);
            } catch (err) {
                const message = err instanceof Error ? err.message : "Something went wrong!";
                setError(message);
            } finally {
                setIsLoading(false);
            }
        },
        [url, config]
    );

    useEffect(() => {
        if (!url) return;

        const shouldFetch = !config || config.method === "GET" || !config.method;
        const requestKey = `${url}-${config?.method || "GET"}`;

        if (!shouldFetch || initialRequestRef.current === requestKey) {
            return;
        }

        initialRequestRef.current = requestKey;

        queueMicrotask(() => {
            sendRequest();
        });
    }, [sendRequest, url, config]);

    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData,
    };
}