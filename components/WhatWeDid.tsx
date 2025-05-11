"use client"
import Image from "next/image"
import WWDCard from "./WWDCard"
import { useState } from "react";
const WhatWeDid = () => {

    const CardData = [{
        image: "/wwdCard1.svg",
        heading: "Amazon Prime Video Banners",
        subheading: "We are passionate about delivering exceptional work that exceeds our clients' expectations."
    },
    {
        image: "/wwdCard2.svg",
        heading: "Fila India",
        subheading: "We are passionate about delivering exceptional work that exceeds our clients' expectations."
    }]


    const [currentIndex, setCurrentIndex] = useState(0);

    const scroll = (direction: "left" | "right") => {
        const maxIndex = CardData.length - 1;
        if (direction === "left") {
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
        } else {
            setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        }
    };

    return (
        <div className="w-[100%] h-[1600px] border-2 border-red-500 bg-white">
            <div className="w-[100%] h-[500px] flex border border-red-500">
                <div className="w-[45%] h-[100%] border border-red-500 px-[7%]">
                    <div className="font-auster text-shadow text-stroke font-[600] text-[70px] text-[#DE9400] w-fit leading-28">What We Did</div>

                    <div className="font-auster font-[600] text-[25px] text-[#01193D] w-fit ">We are passionate about delivering exceptional work that exceeds our clients' expectations.</div>

                    <div className="w-[50%] h-[10%] border border-[#01193D]  relative mt-[6%] bg-[#01193D]">
                        <button className="w-[100%] h-[100%] border border-[#01193D] bg-white text-[#01193D] absolute bottom-1 left-1 flex justify-center items-center gap-[8%] font-[700] text-[20px]">

                            <div>
                                view all projects
                            </div>
                            <div className="relative w-[20%] h-full">
                                <Image
                                    src="/letsTalk.svg"
                                    alt="lets talk picture"
                                    fill
                                    className="rounded-bl-lg rounded-br-lg object-contain"
                                />
                            </div>
                        </button>
                    </div>
                </div>

                <div className="w-[55%] h-[100%] relative">
                    <Image
                        src="/whatwedid.svg"
                        alt="what we did picture"
                        fill
                        className="rounded-bl-lg rounded-br-lg object-contain"
                    />
                </div>

            </div>

            <div className="w-full h-[1100px] relative border border-red-500">
                <div className="w-full h-[90%] overflow-hidden px-[2%] relative mt-[4%]">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 750}px)`, // adjust 800px to match card width + gap
                        }}
                    >
                        {CardData.map((card, index) => (
                            <div key={index} className="flex-shrink-0 w-[750px] mr-2">
                                <WWDCard data={card} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-10 right-14 w-[13%] h-[55px] bg-[#01193D] flex justify-between items-center px-[1%]">
                    <button
                        onClick={() => scroll("left")}
                        className="relative w-[50%] h-[50%]"
                    >
                        <Image src={"/left.svg"} alt="Left" fill />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="relative w-[50%] h-[50%]"
                    >
                        <Image src={"/right.svg"} alt="Right" fill />
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default WhatWeDid