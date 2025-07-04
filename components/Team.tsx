"use client"
import Image from "next/image"
import React from "react"

const AngledLine = ({
    startY = 5,    // Bottom point
    endY = 5,       // Top point
    color = "#9ea7b7",
    opacity = 0.5,
    strokeWidth = 1
}) => (
    <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none h-[70px]  -translate-y-[0px]">
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

const Team = () => {

    const imgData = ["/an.png", "/kg.png", "/sushmita.png", "/tanya.png"]

    const [gridConfig, setGridConfig] = React.useState({ horizontalLines: 8, verticalLines: 8 })
        
        React.useEffect(() => {
        const calculateGrid = () => {
            const containerWidth = window.innerWidth
            const cellSize = 135 // Fixed cell size for square grid
            const isDesktop = window.innerWidth >= 1024
            
            // Calculate vertical lines based on screen width
            const verticalLines = Math.floor(containerWidth / cellSize) 
            
            // For horizontal lines:
            // Desktop: Use fixed height of 1400px
            // Mobile: Use a reasonable number of lines since height is auto
            let horizontalLines
            if (isDesktop) {
                horizontalLines = Math.floor(1400 / cellSize)  // Based on lg:h-[1400px]
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
        <div className="w-[100%] lg:h-[1400px] h-auto border-0 border-red-500 bg-white relative">
            
            <div className="absolute inset-0 z-0">
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
                            top: `${(i + 1) * 135}px`,
                            transform: 'translateY(-50%)'
                        }}
                    >
                        {/* Dots across the horizontal line */}
                        {Array.from({ length: gridConfig.verticalLines }).map((_, j) => (
                            <div
                                key={`dot-${i}-${j}`}
                                className="absolute w-1 h-1 bg-[#9098af77] rounded-full"
                                style={{
                                    left: `${(j + 1) * 135}px`,
                                    transform: 'translateX(-50%)'
                                }}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="w-[100%] lg:h-[700px] h-auto flex flex-col border-0 border-blue-500 z-10 relative ">
                <div className="w-[100%] font-auster text-shadow-2 font-[700] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[40px] text-[#01193D] leading-tight px-[5%] my-[0.5%]">
                    Who We Are
                </div>

                <div className="w-[100%] lg:h-[100%] h-auto flex lg:flex-row flex-col justify-between px-[5%]">
                    <div className="lg:w-[35%] w-[50%] lg:h-[100%] h-[500px] mx-auto  relative border-0 border-red-500 scale-[160%] md:scale-100">
                        <Image
                            src={"/whoWeAreImage.svg"}
                            alt=""
                            fill
                        ></Image>
                    </div>

                    <div className="lg:w-[65%] w-[95%] mx-auto border-0 border-red-500 sm:mt-[2%] mt-[1%] relative sm:h-[600px] h-[430px] lg:h-auto">

                        <div className="font-auster text-shadow text-stroke font-[600] lg:text-[70px] md:text-[50px] sm:text-[40px] text-[30px] text-[#DE9400] lg:w-fit w-[100%] leading-tight border-0 border-red-500">CReATiNG INSPIRATiON</div>
                        <div className="font-auster text-shadow text-stroke font-[600] lg:text-[70px] md:text-[50px] sm:text-[40px] text-[26px] text-[#DE9400] lg:w-fit w-[100%] leading-tight sm:absolute right-0 sm:-mt-[5%] md:-mt-[2%] -mt-[0%] border-0 border-red-500">WiTH CReATiVE SoLUTiONS</div>


                        <div className="font-auster font-[600] lg:text-[25px] md:text-[20px] text-[15px] text-[#01193D] w-[90%] text-justify absolute right-0 mt-[7%]">{`${"We (designers) are crazy, think differently, always think or see things unconventionally, we see designs created in our mind when client talks about their brief, as crazy as we at times see a 3D imagery in front of our eyes of the end product in motion when client describes their thought."}`}</div>

                        <div className="absolute right-0 lg:top-[60%] md:bottom-10 bottom-0 flex flex-col justify-end items-end border-0 border-red-500">
                            <div className="font-auster text-shadow text-stroke font-[600] lg:text-[70px] md:text-[50px] sm:text-[40px] text-[30px] text-[#DE9400] w-fit leading-tight mt-5">ViSION</div>
                            <div className="font-auster font-[600] lg:text-[25px] md:text-[20px] text-[15px]  text-[#01193D] w-fit text-justify">Our vision is to create a visual output of a thought or an idea.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[100%] lg:h-[700px] h-auto  flex flex-col border-0 border-blue-500 py-20 lg:sm-0 z-10 relative">
                <div className="w-[100%] font-auster text-shadow-2 font-[700] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[40px] text-[#01193D] leading-28 px-[5%] my-[1%] text-center">
                    The Team
                </div>

                <div className="w-[100%] lg:h-[400px] h-auto border-0 border-red-500 flex justify-between items-center px-[3%] lg:flex-row flex-col gap-20 lg:gap-0">
                    {
                        imgData.map((item,index)=>(
                            <Image
                            src={item}
                            alt="team image"
                            width={300}
                            height={100}
                            key={index}
                            className={`object-contain sm:mx-auto ${index%2 != 0 ? "scale-110 lg:mt-[10%]":""}`}
                            ></Image>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Team