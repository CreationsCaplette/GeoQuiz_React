export async function fetchJson(url, options = {}) {
    const res = await fetch(url, options);
    let data;
    try {
        data = await res.json();
    } catch {
        data = null;
    }
    if (!res.ok) {
        const msg = data && data.message ? data.message : `Request failed with status ${res.status}`;
        throw new Error(msg);
    }
    return data;
}