"use client"
import Image from 'next/image';
import {useEffect, useState} from "react";
const targetTime = new Date("2024-04-14").getTime();
export default function Home() {
    const [currentTime, setCurrentTime] = useState(Date.now());

    const timeBetween = targetTime - currentTime;
    const seconds = Math.floor((timeBetween / 1000) % 60);
    const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
    const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div>
                <p>message text here Nequed porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli </p>
            </div>
            <div>
            <p>Things comes in</p>
            <p className="counter">
                <span>{days}d </span>
                <span>{hours}h </span>
                <span>{minutes}min </span>
                <span>{seconds}s</span>
            </p>
        </div>

    </div>
    );
}
