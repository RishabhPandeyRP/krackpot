"use client"
import React, { useEffect, useRef, useState } from "react";
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
    const [cardWidth, setCardWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Dynamically calculate card width
    useEffect(() => {
        const calculateCardWidth = () => {
            if (containerRef.current) {
                const firstCard = containerRef.current.querySelector(".card");
                if (firstCard) {
                    const cardElement = firstCard as HTMLElement;
                    const style = window.getComputedStyle(cardElement);
                    const width = cardElement.offsetWidth +
                        parseFloat(style.marginLeft) +
                        parseFloat(style.marginRight);
                    setCardWidth(width);
                }
            }
        };

        calculateCardWidth();
        window.addEventListener("resize", calculateCardWidth);
        return () => window.removeEventListener("resize", calculateCardWidth);
    }, []);

    const scroll = (direction: "left" | "right") => {
        const maxIndex = data.length - 1;
        setCurrentIndex((prev) => {
            if (direction === "left") return prev > 0 ? prev - 1 : prev;
            return prev < maxIndex ? prev + 1 : 0;
        });
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
                horizontalLines = Math.floor((1300 + 4000) / cellSize)  // Based on lg:h-[1400px]
            } else {
                // For mobile h-auto, use a reasonable number of lines to cover content
                // Estimate based on typical mobile content height
                horizontalLines = 40 // This should cover most mobile content heights
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
        <div className="w-[100%] min-h-[1100px] h-auto border-0 border-red-500 bg-white relative py-10">
            {/* <AngledLine></AngledLine> */}

            <div className="absolute inset-0 ">
                {/* Horizontal lines */}
                {Array.from({ length: gridConfig.horizontalLines }).map((_, index) => (
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

            <div className="font-auster text-shadow text-stroke font-[600] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[40px] text-[#DE9400] w-fit leading-tight px-[5%] py-[5%] z-10 relative ">
                What our clients Say
            </div>

            <div className="w-full sm:h-[1000px] h-[850px] border-0 border-red-500 z-10 relative ">
                <div className="w-full min-h-[80%] h-auto px-[2%] relative mt-[0%] border-0 border-green-500 overflow-hidden">
                    <div
                        ref={containerRef}
                        className="flex items-center transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * cardWidth}px)`,
                        }}
                    >
                        {data.map((card, index) => (
                            <div
                                key={index}
                                className="card flex-shrink-0 w-[750px] max-w-full px-7 sm:ml-4 -ml-2"
                            >
                                <ClientCard data={card} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="absolute bottom-10 right-14 sm:w-[13%] w-[30%] sm:h-[55px] h-[50px] bg-[#01193D] flex justify-between items-center px-[1%]">
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