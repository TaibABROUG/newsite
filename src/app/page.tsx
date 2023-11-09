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
        <div className='flex flex-col items-center lg:flex-row  '>
           <div className=' text-black text-center content max-w-[550px] h-fit rounded-[12px] p-10'>
      
            <div>
            <p>Our wedding comes in</p>
            <p className="flex gap-2 items-center justify-center">
        
                <span> {days} days </span>
                <span> {hours} hours </span>
                <span> {minutes} minutes </span>
                <span> {seconds} seconds</span>
            
            </p>
            <div className='flex justify-center'> <div id="heart"> </div></div>
            <div className='mt-10'>
                <p>message text here Nequed porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli </p>
            </div>
        </div>
           </div>
           <div>
            <img src='wimage.jpg' />
           </div>

    </div>
    );
}
