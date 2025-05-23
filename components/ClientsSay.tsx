"use client"
import { useState } from "react";
import Image from "next/image";
import ClientCard from "./ClientCard";

const ClientsSay = () => {
    const data = [{
        content: "From the initial consultation to the campaign launch and ongoing reporting, M/s Krackpot Design and Digital Solutions demonstrated exceptional communication and professionalism. Their team was always responsive, transparent, and a pleasure to work with. They made the entire process smooth and stress-free. We appreciate their attention to detail and commitment to client satisfaction",
        name: "Rahul Singh",
        post: "Assistant Brand Manager -TREO",
        logoLink: "/treo 1.svg"
    },
    {
        content: "From the initial consultation to the campaign launch and ongoing reporting, M/s Krackpot Design and Digital Solutions demonstrated exceptional communication and professionalism. Their team was always responsive, transparent, and a pleasure to work with. They made the entire process smooth and stress-free. We appreciate their attention to detail and commitment to client satisfaction",
        name: "Rahul Singh 2",
        post: "Assistant Brand Manager -TREO",
        logoLink: "/treo 1.svg"
    },
    {
        content: "From the initial consultation to the campaign launch and ongoing reporting, M/s Krackpot Design and Digital Solutions demonstrated exceptional communication and professionalism. Their team was always responsive, transparent, and a pleasure to work with. They made the entire process smooth and stress-free. We appreciate their attention to detail and commitment to client satisfaction",
        name: "Rahul Singh 3",
        post: "Assistant Brand Manager -TREO",
        logoLink: "/treo 1.svg"
    },
    {
        content: "From the initial consultation to the campaign launch and ongoing reporting, M/s Krackpot Design and Digital Solutions demonstrated exceptional communication and professionalism. Their team was always responsive, transparent, and a pleasure to work with. They made the entire process smooth and stress-free. We appreciate their attention to detail and commitment to client satisfaction",
        name: "Rahul Singh 4",
        post: "Assistant Brand Manager -TREO",
        logoLink: "/treo 1.svg"
    },]


    const [currentIndex, setCurrentIndex] = useState(0);

    const scroll = (direction: "left" | "right") => {
        const maxIndex = data.length - 1;
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

    return (
        <div className="w-[100%] min-h-[1200px] h-auto border-0 border-red-500 bg-white relative">
            {/* <AngledLine></AngledLine> */}

            <div className="absolute inset-0 ">
                {/* Horizontal lines */}
                {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={`h-${index}`}
                        className="absolute w-full border-t border-[#e2e4ee]"
                        style={{ top: `${(index + 1) * 10}%` }}
                    ></div>
                ))}

                {/* Vertical lines */}
                {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={`v-${index}`}
                        className="absolute h-full border-l border-[#e2e4ee]"
                        style={{ left: `${(index + 1) * 10}%` }}
                    ></div>
                ))}

                {/* Horizontal lines of dots */}
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="flex absolute w-full"
                        style={{
                            top: `${i * 10}%`,
                            transform: 'translateY(-50%)'
                        }}
                    >
                        {/* Dots across the horizontal line */}
                        {Array.from({ length: 10 }).map((_, j) => (
                            <div
                                key={`dot-${i}-${j}`}
                                className="absolute w-1 h-1 bg-[#9098af] rounded-full"
                                style={{
                                    left: `${j * 10}%`,
                                    transform: 'translateX(-50%)'
                                }}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="font-auster text-shadow text-stroke font-[600] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[40px] text-[#DE9400] w-fit leading-28 px-[5%] py-[5%] z-10 relative ">
                What our clients Say
            </div>

            <div className="w-full sm:h-[1000px] h-[900px] border-0 border-red-500 z-10 relative ">
                <div className="w-full min-h-[80%] h-auto px-[2%] relative mt-[0%] border-0 border-green-500 overflow-hidden">
                    <div
                        className="flex items-center transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 798}px)`,
                        }}
                    >
                        {data.map((card, index) => (
                            <div key={index} className="flex-shrink-0 w-[750px] px-7 ml-4">
                                <ClientCard data={card} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="absolute bottom-10 right-14 sm:w-[13%] w-[20%] h-[55px] bg-[#01193D] flex justify-between items-center px-[1%]">
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

export default ClientsSay