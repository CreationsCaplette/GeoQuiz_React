import { useEffect, useState } from 'react';

export default function Timer({ initialTime = 30, onTimeUp }) {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp?.();
            return;
        }

        const intervalId = window.setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => window.clearInterval(intervalId);
    }, [timeLeft, onTimeUp]);

    const formattedTime = `0:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`;

    return (<div id="timer">{formattedTime}</div>);
}