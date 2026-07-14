import { useEffect, useState } from 'react';

export default function Timer({ initialTime = 10000, onTimeUp, onTimeChange }) {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        onTimeChange?.(timeLeft);
    }, [timeLeft, onTimeChange]);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp?.();
            return;
        }

        const intervalId = window.setInterval(() => {
            setTimeLeft((prev) => prev - 25);
        }, 25);

        return () => window.clearInterval(intervalId);
    }, [timeLeft, onTimeUp]);

    const seconds = Math.ceil(timeLeft / 1000);
    const formattedTime = `0:${seconds < 10 ? `0${seconds}` : seconds}`;

    return (<div id="timer">{formattedTime}</div>);
}