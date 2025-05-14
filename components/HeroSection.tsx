
"use client"
import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"


const AngledLine = ({
    startY = 30,    // Bottom point
    endY = 5,       // Top point
    color = "#9ea7b7",
    opacity = 0.5,
    strokeWidth = 1
}) => (
    <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none h-[70px] bg-white -translate-y-[50px] lg:block sm:hidden">
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


const HeroSection = () => {
    const router = useRouter()
    return (
        <div className="w-full lg:h-[800px] sm:h-auto relative overflow-hidden px-[5%]  border-0 border-green-500 flex bg-white lg:flex-row sm:flex-col justify-between items-center sm:gap-5">

            <AngledLine></AngledLine>

            <div className="absolute inset-0">
                {/* Horizontal lines */}
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={`h-${index}`}
                        className="absolute w-full border-t border-[#e2e4ee]"
                        style={{ top: `${(index + 1) * 25.5}%` }}
                    ></div>
                ))}

                {/* Vertical lines */}
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={`v-${index}`}
                        className="absolute h-full border-l border-[#e2e4ee]"
                        style={{ left: `${(index + 1) * 12.5}%` }}
                    ></div>
                ))}

                {/* Intersection dots */}
                {Array.from({ length: 7 }).map((_, i) => (
                    Array.from({ length: 7 }).map((_, j) => (
                        <div
                            key={`dot-${i}-${j}`}
                            className="absolute w-1 h-1 bg-[#9098af] rounded-full"
                            style={{
                                top: `${(i + 1) * 25.5}%`,
                                left: `${(j + 1) * 12.5}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        ></div>
                    ))
                ))}
            </div>


            {/* 🔷 Main Content */}
            <div className="lg:w-[55%] sm:w-[75%] h-[70%]  z-10 border-0 border-red-500 flex flex-col lg:gap-[9%] sm:gap-[15%]">
                <div className="font-auster text-shadow text-stroke font-[600] lg:text-[95px] sm:text-[80px] text-[#DE9400] w-full leading-28">
                    CREaTIVE MiNDS <br />
                    THaT BRiNGS <br />
                    BRaNDS To <br />
                    LiFE
                </div>

                {/* Button */}
                <div>
                    <div className="w-[250px] h-[50px] border-0 border-[#01193D] relative bg-[#01193D]">
                        <button className="w-full h-full border border-[#01193D] bg-white absolute bottom-2 left-1 flex justify-center items-center gap-[8%] text-[#01193D] px-1 cursor-pointer" onClick={()=>router.push("/all-works")}>
                            <div className="font-[700] text-[22px]">view our work</div>
                            <div className="relative w-[20%] h-full">
                                <Image
                                    src="/enter_button 1.svg"
                                    alt="lets talk"
                                    fill
                                    className="object-contain rounded-bl-lg rounded-br-lg"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Right-side Asset */}
            <div className="lg:w-[45%] lg:h-[70%] sm:w-[70%] sm:h-[500px]  z-10 border-0 border-red-500">
                <div className="relative w-full h-full">
                    <Image
                        src="/heroAsset.svg"
                        alt="hero asset"
                        fill
                    />
                </div>
            </div>


        </div>
    )
}

export default HeroSection
