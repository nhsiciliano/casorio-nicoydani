"use client"

import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Image from "next/image";

export default function Hero() {

    const weddingDate = new Date('2024-10-18T18:30:00');
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const difference = +weddingDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }

    return (
        <section className="flex flex-col bg-[#bab296] lg:flex-row items-center justify-between">
            <div className="bg-[#ddc685] rounded-xl text-center md:w-full lg:w-1/2 mx-4 py-14 md:py-24 md:px-4 mt-4 md:mt-0 ">
                <Image src="/rings.svg" alt="Hero" width={120} height={120} className="m-auto" />
                <h1 className="text-5xl text-[#726d5d] md:text-6xl font-semibold mb-4">¡Nos Casamos!</h1>
                <p className="text-3xl text-black font-normal mb-4">Nos encantaría que nos acompañaras en nuestro día especial.</p>
                <p className="text-4xl text-black font-medium mb-4">18.10.2024</p>
                <h2 className="text-2xl font-medium mb-4 mt-6">Cuenta regresiva:</h2>
                <div className="flex justify-center items-center px-3 gap-6">
                    <div className='flex flex-col items-center justify-center text-lg font-medium'>
                        <span>{timeLeft.days}</span>
                        <span>Días</span>
                    </div>
                    <div className='relative'>
                        <div className='absolute -top-7'>:</div>
                    </div>
                    <div className='flex flex-col items-center justify-center text-lg font-medium'>
                        <span>{timeLeft.hours}</span>
                        <span>Horas</span>
                    </div>
                    <div className='relative'>
                        <div className='absolute -top-7'>:</div>
                    </div>
                    <div className='flex flex-col items-center justify-center text-lg font-medium'>
                        <span>{timeLeft.minutes}</span>
                        <span>Minutos</span>
                    </div>
                    <div className='relative'>
                        <div className='absolute -top-7'>:</div>
                    </div>
                    <div className='flex flex-col items-center justify-center text-lg font-medium'>
                        <span>{timeLeft.seconds}</span>
                        <span>Segundos</span>
                    </div>
                </div>
            </div>
            <Parallax scale={[1.3, 0.5, 'easeInQuad']}>
                <div className="mt-6 p-8 contrast-75 md:p-16 md:mt-0 md:h-[820px] md:w-[760px] flex justify-center">
                    <Image src="https://res.cloudinary.com/dtai5c6a3/image/upload/v1719447684/heropiccope_j5ylfg.png" alt="Boda" width={700} height={800} className="w-full h-full bg-cover shadow-lg" />
                </div>
            </Parallax>
        </section>
    )
}