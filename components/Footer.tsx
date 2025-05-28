"use client"
import Image from "next/image"
import React from "react"
const Footer = () => {
    const impLinks1 = ["ABOUT", "CLIENTS", "WORK", "CASE STUDY"]
    const impLinks2 = ["SERVICES", "TESTIMONIALS", "CONTACT", "PRIVACY POLICY"]
    const connect = ["krackpotdigital@gmail.com", "+91 85919 89911"]
    const icons = ["/Linkedin (1).svg", "/Meta.svg", "/Insta (1).svg"]

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
        <div className="w-[100.1%] border-0 border-red-500 flex flex-col gap-12 bg-white py-9 relative overflow-hidden">

            <div className="absolute inset-0 z-0">
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

            {/* <div className="w-[100%] flex justify-between px-[5%] relative z-10">

                <div className="flex flex-col">
                    <div className="font-auster text-shadow text-stroke font-[600] text-[50px] text-[#DE9400] w-fit leading-28">Find Us</div>
                    <div className="font-auster font-[600] text-[18px] text-[#01193D] w-fit">Goregaon (E), Mumbai - 400063</div>
                </div>

                <div>
                    <div className="font-auster text-shadow text-stroke font-[600] text-[50px] text-[#DE9400] w-fit leading-28">Important Links</div>

                    <div className="flex gap-5">
                        <ul className="flex flex-col font-auster font-[600] text-[18px] text-[#01193D] w-fit">
                            {
                                impLinks1.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>

                        <ul className="flex flex-col font-auster font-[600] text-[18px] text-[#01193D] w-fit">
                            {
                                impLinks2.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>


                <div className="flex flex-col">
                    <div className="font-auster text-shadow text-stroke font-[600] text-[50px] text-[#DE9400] w-fit leading-28">Connect Us</div>
                    <ul className="font-auster font-[600] text-[18px] text-[#01193D] w-fit">
                        {
                            connect.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col">
                    <div className="font-auster text-shadow text-stroke font-[600] text-[50px] text-[#DE9400] w-fit leading-28">Follow Us</div>
                    <div className="w-full flex justify-around">
                        {
                            icons.map((item, index) => (
                                <Image
                                    src={item}
                                    alt="icon"
                                    width={40}
                                    height={40}
                                    key={index}
                                ></Image>
                            ))
                        }
                    </div>
                </div>
            </div> */}

            <div className="w-[100%] flex flex-col lg:flex-row justify-between px-[5%] gap-10 md:gap-0 relative z-10">

                <div className="flex flex-col items-start md:items-start">
                    <div className="font-auster text-shadow text-stroke font-[600] text-[50px] text-[#DE9400] w-fit leading-28">Find Us</div>
                    <div className="font-auster font-[600] text-[18px] text-[#01193D] w-fit">Goregaon (E), Mumbai - 400063</div>
                </div>

                <div className="flex flex-col items-start md:items-start">
                    <div className="font-auster text-shadow text-stroke font-[600] text-[50px] text-[#DE9400] w-fit leading-28">Important Links</div>

                    <div className="flex gap-5">
                        <ul className="flex flex-col font-auster font-[600] text-[18px] text-[#01193D] w-fit">
                            {
                                impLinks1.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>

                        <ul className="flex flex-col font-auster font-[600] text-[18px] text-[#01193D] w-fit">
                            {
                                impLinks2.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-start md:items-start">
                    <div className="font-auster text-shadow text-stroke font-[600] text-[50px] text-[#DE9400] w-fit leading-28">Connect Us</div>
                    <ul className="font-auster font-[600] text-[18px] text-[#01193D] w-fit">
                        {
                            connect.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col items-start md:items-start">
                    <div className="font-auster text-shadow text-stroke font-[600] text-[50px] text-[#DE9400] w-fit leading-28">Follow Us</div>
                    <div className="w-full flex justify-around md:justify-start gap-4">
                        {
                            icons.map((item, index) => (
                                <Image
                                    src={item}
                                    alt="icon"
                                    width={40}
                                    height={40}
                                    key={index}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>


            <div className="font-auster font-[600] lg:text-[15px] text-[9px] text-[#01193D] text-center relative z-10">
                © M/s Krackpot Designs and Digital solutions 2025. All rights reserved
            </div>
        </div>
    )
}

export default Footer