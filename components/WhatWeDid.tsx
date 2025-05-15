"use client"
import Image from "next/image"
import WWDCard from "./WWDCard"
import { useState } from "react";
import { useRouter } from "next/navigation";
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

    const AngledLine = ({
        startY = 5,    // Bottom point
        endY = 5,       // Top point
        color = "#9ea7b7",
        opacity = 0.5,
        strokeWidth = 1
    }) => (
        <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none h-[40px]  translate-y-[30px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                {/* Main line */}
                <line
                    x1="0"
                    y1={startY}
                    x2="100"
                    y2={endY}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    opacity={opacity}
                />
    
                {/* Secondary line for depth */}
                <line
                    x1="0"
                    y1={startY - 3}
                    x2="100"
                    y2={endY + 3}
                    stroke={color}
                    strokeWidth={strokeWidth / 2}
                    strokeLinecap="round"
                    opacity={opacity / 2}
                />
            </svg>
        </div>
    )

    const router = useRouter()

    return (
        <div className="w-[100%] min-h-[1750px] h-auto border-0 border-red-500 bg-white relative -rotate-[2deg] origin-top-left flex flex-col sm:gap-[100px] lg:gap-0 sm:py-7 lg:py-0">

            <AngledLine></AngledLine>

            <div className="absolute inset-0 rotate-[2deg] origin-top-left">
                {/* Horizontal lines of dots */}
                {Array.from({ length: 9 }).map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="flex absolute w-full"
                        style={{
                            top: `${i * 12.5}%`,
                            transform: 'translateY(-50%)'
                        }}
                    >
                        {/* Dots across the horizontal line */}
                        {Array.from({ length: 9 }).map((_, j) => (
                            <div
                                key={`dot-${i}-${j}`}
                                className="absolute w-1 h-1 bg-[#9098af] rounded-full"
                                style={{
                                    left: `${j * 12.5}%`,
                                    transform: 'translateX(-50%)'
                                }}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="w-[100%] lg:h-[500px] sm:h-[650px] flex border-0 border-red-500 rotate-[2deg] origin-top-left lg:flex-row sm:flex-col sm:gap-[10%]">
                <div className="lg:w-[45%] sm:w-[80%] sm:mx-auto h-[100%] border-0 border-red-500 px-[7%]">
                    <div className="font-auster text-shadow text-stroke font-[600] lg:text-[70px] sm:text-[65px] text-[#DE9400] w-fit leading-28">What We Did</div>

                    <div className="font-auster font-[600] lg:text-[25px] sm:text-[20px] text-[#01193D] w-fit ">We are passionate about delivering exceptional work that exceeds our clients' expectations.</div>

                    <div className="sm:w-[50%] lg:w-[60%] lg:h-[10%] sm:h-[15%] border border-[#01193D]  relative mt-[6%] bg-[#01193D]">
                        <button className="w-[100%] h-[100%] border border-[#01193D] bg-white text-[#01193D] absolute bottom-1 left-1 flex justify-center items-center gap-[8%] font-[700] text-[20px] cursor-pointer" onClick={()=>router.push("/all-projects")}>

                            <div>
                                view all projects
                            </div>
                            <div className="relative w-[20%] h-full">
                                <Image
                                    src="/enter_button 1.svg"
                                    alt="lets talk picture"
                                    fill
                                    className="rounded-bl-lg rounded-br-lg object-contain"
                                />
                            </div>
                        </button>
                    </div>
                </div>

                <div className="lg:w-[55%] sm:w-[90%] sm:mx-auto h-[100%] relative">
                    <Image
                        src="/whatwedid.svg"
                        alt="what we did picture"
                        fill
                        className="rounded-bl-lg rounded-br-lg object-contain"
                    />
                </div>

            </div>

            <div className="w-full h-[1100px] relative border-0 border-red-500 rotate-[2deg] origin-top-left">
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