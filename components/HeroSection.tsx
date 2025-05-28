
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

    const [gridConfig, setGridConfig] = React.useState({ horizontalLines: 8, verticalLines: 8 })
    
    React.useEffect(() => {
        const calculateGrid = () => {
            const containerWidth = window.innerWidth
            const containerHeight = window.innerWidth >= 1024 ? 700 : 800 // lg:h-[700px] h-[800px]
            
            // Calculate how many 100px cells fit in the container
            const verticalLines = Math.floor(containerWidth / 135)  // -1 because we need n-1 lines for n cells
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
        <div className="w-full lg:h-[700px] h-[800px] relative overflow-hidden px-[5%]  border-0 border-green-500 flex  lg:flex-row flex-col justify-between items-center gap-5 bg-[#efeff8] mt-[110px]">

            <div className="absolute inset-0">
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

                {/* Intersection dots */}
                {Array.from({ length: gridConfig.horizontalLines }).map((_, i) => (
                    Array.from({ length: gridConfig.verticalLines }).map((_, j) => (
                        <div
                            key={`dot-${i}-${j}`}
                            className="absolute w-1 h-1 bg-[#9098af77] rounded-full"
                            style={{
                                top: `${(i + 1) * 135}px`,
                                left: `${(j + 1) * 135}px`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        ></div>
                    ))
                ))}
            </div>


            {/* 🔷 Main Content */}
            <div className="lg:w-[55%] sm:w-[75%] h-[65%]  z-10 border-0 border-red-500 flex flex-col lg:gap-[9%] sm:gap-10 gap-10 pt-[10%] lg:pt-[2%]">
                <div className="font-auster text-shadow text-stroke font-[600] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[40px] text-[#DE9400] w-full leading-tight">
                    CREaTIVE MiNDS <br />
                    THaT BRiNGS <br />
                    BRaNDS To <br />
                    LiFE
                </div>

                {/* Button */}
                <div>
                    <div className="lg:w-[250px] md:w-[200px] sm:w-[150px] w-[200px] lg:h-[50px] sm:h-[45px] h-[40px] border-0 border-[#01193D] relative bg-[#01193D]">
                        <button className="w-full h-full border border-[#01193D] bg-white absolute bottom-2 left-1 flex justify-center items-center gap-[8%] text-[#01193D] px-1 cursor-pointer" onClick={()=>router.push("/all-works")}>
                            <div className="font-[700] lg:text-[22px] sm:text-[20px] text-base">view our work</div>
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
            <div className="lg:w-[45%] lg:h-[70%] w-[70%] h-[70%] scale-[135%] sm:scale-[110%] z-10 border-0 border-red-500">
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
