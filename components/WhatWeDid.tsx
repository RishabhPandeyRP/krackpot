"use client"
import Image from "next/image"
import WWDCard from "./WWDCard"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const WhatWeDid = () => {

    const CardData = [{
        slug:"Amazon_Prime_Video",
        image: "/wwdCard2.svg",
        heading: "Amazon Prime Video Banners",
        subheading: "We are passionate about delivering exceptional work that exceeds our clients' expectations."
    },
    {
        slug:"FILA_India",
        image: "/wwdCard1.svg",
        heading: "Fila India",
        subheading: "We are passionate about delivering exceptional work that exceeds our clients' expectations."
    },{
        slug:"Platinum",
        image:"/wwdCard2.svg",
        heading:"Platinum Connect",
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

    const [gridConfig, setGridConfig] = React.useState({ horizontalLines: 8, verticalLines: 8 })
            
            React.useEffect(() => {
            const calculateGrid = () => {
                const containerWidth = window.innerWidth
                const cellSize = 135 // Fixed cell size for square grid
                const isDesktop = window.innerWidth >= 1024
                
                // Calculate vertical lines based on screen width
                const verticalLines = Math.floor(containerWidth / cellSize) + 1
                
                // For horizontal lines:
                // Desktop: Use fixed height of 1400px
                // Mobile: Use a reasonable number of lines since height is auto
                let horizontalLines
                if (isDesktop) {
                    horizontalLines = Math.floor(1550 + 1000 / cellSize)  // Based on lg:h-[1400px]
                } else {
                    // For mobile h-auto, use a reasonable number of lines to cover content
                    // Estimate based on typical mobile content height
                    horizontalLines = 25 // This should cover most mobile content heights
                }
                
                setGridConfig({ 
                    horizontalLines: Math.max(horizontalLines, 8), // Minimum 8 lines for mobile
                    verticalLines: Math.max(verticalLines, 4)      // Minimum 4 lines
                })
            }
            
            calculateGrid()
            window.addEventListener('resize', calculateGrid)
            
            return () => window.removeEventListener('resize', calculateGrid)
        }, [])

    return (
        <div className="w-[100%] min-h-[1550px] h-auto border-0 border-red-500 bg-white relative flex flex-col gap-[100px] lg:gap-0 py-7 lg:py-0">

            {/* <AngledLine></AngledLine> */}

            <div className="absolute inset-0">
                {/* Horizontal lines */}
                {Array.from({ length: gridConfig.horizontalLines}).map((_, index) => (
                    <div
                        key={`h-${index}`}
                        className="absolute w-full border-t border-[#e2e4ee]"
                        style={{ top: `${(index + 1) * 135}px` }}
                    ></div>
                ))}

                {/* Vertical lines */}
                {Array.from({ length: gridConfig.verticalLines }).map((_, index) => (
                    <div
                        key={`v-${index}`}
                        className="absolute h-full border-l border-[#e2e4ee]"
                        style={{ left: `${(index + 1) * 135}px` }}
                    ></div>
                ))}
                {/* Horizontal lines of dots */}
                {Array.from({ length: gridConfig.horizontalLines }).map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="flex absolute w-full"
                        style={{
                            top: `${i * 135}px`,
                            transform: 'translateY(-50%)'
                        }}
                    >
                        {/* Dots across the horizontal line */}
                        {Array.from({ length: gridConfig.verticalLines }).map((_, j) => (
                            <div
                                key={`dot-${i}-${j}`}
                                className="absolute w-1 h-1 bg-[#9098af77] rounded-full"
                                style={{
                                    left: `${j * 135}px`,
                                    transform: 'translateX(-50%)'
                                }}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="w-[100%] lg:h-[500px] h-[550px] flex border-0 border-red-500 lg:flex-row flex-col gap-[10%] z-10 relative">
                <div className="lg:w-[45%] w-[90%] mx-auto h-[100%] border-0 border-red-500 px-[7%]">
                    <div className="font-auster text-shadow text-stroke font-[600] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[40px] text-[#DE9400] w-fit leading-28">What We Did</div>

                    <div className="font-auster font-[600] lg:text-[25px] sm:text-[20px] text-[15px] text-[#01193D] w-fit ">We are passionate about delivering exceptional work that exceeds our clients' expectations.</div>

                    <div className="w-[55%] lg:w-[60%] lg:h-[10%] h-[15%] border border-[#01193D]  relative mt-[6%] bg-[#01193D]">
                        <button className="w-[100%] h-[100%] border border-[#01193D] bg-white text-[#01193D]  absolute bottom-1 left-1 flex justify-center items-center gap-[8%] font-[700] lg:text-[25px] sm:text-[20px] text-[14px] text-nowrap  cursor-pointer px-2" onClick={()=>router.push("/all-projects")}>

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

            <div className="w-full sm:h-[1100px] h-[800px] relative border-0 border-red-500">
                <div className="w-full h-[90%] overflow-hidden px-[2%] relative mt-[4%]">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 750}px)`, // adjust 800px to match card width + gap
                        }}
                    >
                        {CardData.map((card, index) => (
                            <div key={index} className="flex-shrink-0 w-[750px] mr-2 cursor-pointer" onClick={() => router.push(`/projects/${card.slug}`)}>
                                <WWDCard data={card} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-10 right-14 sm:w-[13%] w-[29%] sm:h-[55px] h-[45px] bg-[#01193D] flex justify-between items-center px-[1%] ">
                    <button
                        onClick={() => scroll("left")}
                        className="relative w-[50%] h-[50%] cursor-pointer"
                    >
                        <Image src={"/left.svg"} alt="Left" fill />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="relative w-[50%] h-[50%] cursor-pointer"
                    >
                        <Image src={"/right.svg"} alt="Right" fill />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default WhatWeDid