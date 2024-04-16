import React, { useState, useEffect } from 'react';

function CountdownTimer() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const handleClick = () => {
        setSeconds(60);
        setIsActive(true);
    };

    useEffect(() => {
        if (seconds === 0) {
            setIsActive(false);
        }
    }, [seconds]);

    return (
        <div>
            <button onClick={handleClick} disabled={isActive}>
                {isActive ? `Please wait ${seconds} seconds` : 'Request Verification Code'}
            </button>
        </div>
    );
}

export default CountdownTimer;
