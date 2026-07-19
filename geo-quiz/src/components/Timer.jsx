import { useEffect, useRef, useState } from 'react';

export default function Timer({ initialTime = 10000, onTimeUp, onTimeChange, isPaused = false }) {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const intervalRef = useRef(null);

    useEffect(() => {
        onTimeChange?.(timeLeft);
    }, [timeLeft, onTimeChange]);

    useEffect(() => {
        if (isPaused) {
            if (intervalRef.current) {
                window.clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            return;
        }

        if (intervalRef.current || timeLeft <= 0) return;

        intervalRef.current = window.setInterval(() => {
            setTimeLeft(prev => Math.max(0, prev - 25));
        }, 25);

        return () => {
            if (intervalRef.current) {
                window.clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isPaused, timeLeft]);

    useEffect(() => {
        if (timeLeft <= 0) {
            if (intervalRef.current) {
                window.clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            onTimeUp?.();
        }
    }, [timeLeft, onTimeUp]);

    const seconds = Math.ceil(timeLeft / 1000);
    const formattedTime = `0:${seconds < 10 ? `0${seconds}` : seconds}`;

    return (<div className='game-timer'>{formattedTime}</div>);
}