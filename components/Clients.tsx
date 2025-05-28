"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
    const logosList = [
        "/cravatex 1.svg",
        "/fila 1.svg",
        "/glutaweis_logo 3.svg",
        "/stapl logo_002 1.svg",
        "/treo 1.svg",
        "/cravatex 1.svg",
        "/fila 1.svg",
        "/glutaweis_logo 3.svg",
        "/stapl logo_002 1.svg",
        "/treo 1.svg",
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
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
                const containerHeight = window.innerWidth >= 1024 ? 1100 : 1100 // lg:h-[700px] h-[800px]
                
                // Calculate how many 100px cells fit in the container
                const verticalLines = Math.floor(containerWidth / 135) + 1  // -1 because we need n-1 lines for n cells
                const horizontalLines = Math.floor(containerHeight / 135) - 1
                
                setGridConfig({ 
                    horizontalLines: Math.max(horizontalLines, 6), // Minimum 6 lines
                    verticalLines: Math.max(verticalLines, 6)      // Minimum 6 lines
                })
            }
            
            calculateGrid()
            window.addEventListener('resize', calculateGrid)
            
            return () => window.removeEventListener('resize', calculateGrid)
        }, [])

    return (
        <div className="w-full lg:h-[1100px] sm:h-[1150px] h-[1100px] border-0 border-b-blue-700 relative overflow-hidden  flex flex-col gap-[10%] lg:gap-[0%] bg-[#efeff8]">
            
            {/* <AngledLine></AngledLine> */}

           
            
            <div className="absolute inset-0 z-0 t">
                {/* Horizontal lines */}
                {Array.from({ length: gridConfig.horizontalLines }).map((_, index) => (
                    <div
                        key={`h-${index}`}
                        className="absolute w-full border-t border-[#e2e4ee]"
                        style={{ top: `${index * 135}px` }}
                    ></div>
                ))}

                {/* Vertical lines */}
                {Array.from({ length: gridConfig.verticalLines }).map((_, index) => (
                    <div
                        key={`v-${index}`}
                        className="absolute h-full border-l border-[#e2e4ee]"
                        style={{ left: `${index * 135}px` }}
                    ></div>
                ))}

                {/* Intersection dots */}
                {Array.from({ length: gridConfig.horizontalLines }).map((_, i) => (
                    Array.from({ length: gridConfig.verticalLines }).map((_, j) => (
                        <div
                            key={`dot-${i}-${j}`}
                            className="absolute w-1 h-1 bg-[#9098af77] rounded-full"
                            style={{
                                top: `${i * 135}px`,
                                left: `${j * 135}px`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        ></div>
                    ))
                ))}
            </div>

            <div className="w-full lg:h-[550px] h-auto border-0 border-red-500 overflow-hidden flex flex-col gap-[5%] relative z-10 ">
                <div className="flex flex-col w-full h-fit px-[7%] my-[1%]">
                    <div className="font-auster text-shadow text-stroke font-[600] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[40px] text-[#DE9400] w-fit leading-28">
                        Our Clients
                    </div>
                    <div className="font-auster font-[600] lg:text-[25px] sm:text-[20px] text-[15px] text-[#01193D] w-fit leading-28 -mt-[50px]">
                        We value our clients as partners in our growth.
                    </div>
                </div>

                <div className="-mr-[40px] ">
                    <Slider {...settings}>
                        {logosList.map((src, index) => (
                            <div key={index} className="px-2">
                                <div className="w-[250px] h-[200px] md:w-[250px] bg-white border border-gray-300 flex items-center justify-center mx-auto !shadow-lg shadow-black/15">
                                    <div className="relative w-[120px] md:w-[90px] h-[70px]">
                                        <Image
                                            src={src}
                                            alt={`client-logo-${index}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="w-full lg:h-[550px] h-auto border-0 border-red-500 overflow-hidden flex flex-col gap-[5%] relative z-10 ">
                <div className="flex flex-col w-full h-fit px-[7%] my-[1%] items-end">
                    <div className="font-auster text-shadow text-stroke font-[600] lg:text-[80px] md:text-[60px] sm:text-[45px] text-[35px] text-[#DE9400] w-fit leading-tight">
                        Agencies Joined Hands with us
                    </div>
                    <div className="font-auster font-[600] lg:text-[25px] sm:text-[20px] text-[15px] text-[#01193D] w-fit lg:leading-28 leading-tight lg:-mt-[50px] mb-5">
                        The combined expertise and resources can lead to better results.
                    </div>
                </div>

                <div className="-mr-[40px] ">
                    <Slider {...settings}>
                        {logosList.map((src, index) => (
                            <div key={index} className="px-2">
                                <div className="w-[250px] h-[200px] md:w-[250px] bg-white border border-gray-300 flex items-center justify-center mx-auto !shadow-lg shadow-black/15">
                                    <div className="relative w-[120px] md:w-[90px] h-[70px]">
                                        <Image
                                            src={src}
                                            alt={`client-logo-${index}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default Clients;
