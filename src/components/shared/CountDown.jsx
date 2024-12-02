import { useState, useEffect } from "react";

const CountdownTimer = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    // Function to calculate hours, minutes, and seconds
    const calculateTimeParts = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return {
            hours: hours.toString().padStart(2, "0"),
            minutes: minutes.toString().padStart(2, "0"),
            seconds: secs.toString().padStart(2, "0"),
        };
    };

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const { hours, minutes, seconds } = calculateTimeParts(timeLeft);

    return (
        <div className="flex items-center justify-center -mt-2">
            <div className="flex items-center gap-2 text-sm sm:text-xl text-red-500 px-3">
                <div className="flex items-center">
                    <span className="font-bold bg-red-200 rounded px-1 pb-0.5 mt-2">{seconds}</span>
                </div>
                <span className="text-xl sm:text-2xl">:</span>
                <div className="flex items-center">
                    <span className="font-bold bg-red-200 rounded px-1 pb-0.5 mt-2">{minutes}</span>
                </div>
                <span className="text-xl sm:text-2xl">:</span>
                <div className="flex items-center">
                    <span className="font-bold bg-red-200 rounded px-1 pb-0.5 mt-2">{hours}</span>
                </div>


            </div>
        </div>
    );
};

export default CountdownTimer;
