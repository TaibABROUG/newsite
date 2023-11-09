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
        <div className='flex flex-col items-center lg:flex-row lg:justify-center lg:gap-3  '>
            
           <div className='content text-center content max-w-[550px] h-fit rounded-[12px] p-10'>
      
            <div>
            <p className='text-xl mb-2'>Our wedding comes in</p>
            <p className="flex gap-2 items-center justify-center">
        
                <span><span className='text-xl font-bold'>{days}</span>  days </span>
                <span><span className='text-xl font-bold'>{hours}</span>  hours </span>
                <span><span className='text-xl font-bold'>{minutes}</span>  minutes </span>
                <span> <span className='text-xl font-bold'>{seconds}</span>  seconds</span>
            
            </p>
            <div className='flex justify-center'> <div id="heart"> </div></div>
            <div className='mt-10'>
                <p>From the moment we met, my world has been filled with light and love. Your smile is my daily sunshine, and your laughter, the sweetest melody. With you, every moment is a treasure, and every day a new adventure.<br/><span className='font-bold'>I love you more than words can express.</span> </p>
            </div>
        </div>
           </div>
           <div>
            <img src='wimage.jpg' />
           </div>

    </div>
    );
}
