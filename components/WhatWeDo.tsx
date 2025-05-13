import Image from "next/image"
import DropDown from "./DropDown"
const WhatWeDo = () => {
    const data = [{
        heading: "Design",
        sub_headings: [{
            heading: "Branding",
            sub_headings: ["logo", "visual"]
        }]
    }, {
        heading: "Design",
        sub_headings: [{
            heading: "Branding",
            sub_headings: ["logo", "visual"]
        }]
    }]

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
        <div className="w-[100%] min-h-[1300px] h-auto bg-white pt-[10%] relative overflow-hidden -rotate-[2deg] origin-top-left border-0 border-red-500">

            <AngledLine></AngledLine>

            <div className="absolute inset-0 z-0 rotate-[2deg] origin-top-left">
                {/* Horizontal lines */}
                {Array.from({ length: 9 }).map((_, index) => (
                    <div
                        key={`h-${index}`}
                        className="absolute w-full border-t border-[#e2e4ee]"
                        style={{ top: `${index * 12.5}%` }}
                    ></div>
                ))}

                {/* Vertical lines */}
                {Array.from({ length: 9 }).map((_, index) => (
                    <div
                        key={`v-${index}`}
                        className="absolute h-full border-l border-[#e2e4ee]"
                        style={{ left: `${index * 12.5}%` }}
                    ></div>
                ))}

                {/* Intersection dots */}
                {Array.from({ length: 9 }).map((_, i) => (
                    Array.from({ length: 9 }).map((_, j) => (
                        <div
                            key={`dot-${i}-${j}`}
                            className="absolute w-1 h-1 bg-[#9098af] rounded-full"
                            style={{
                                top: `${i * 12.5}%`,
                                left: `${j * 12.5}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        ></div>
                    ))
                ))}
            </div>

            <div className="w-[100%] h-[35%] flex items-center gap-[4%] relative z-10 rotate-[2deg] origin-top-left">
                <div className="w-[60%] aspect-[5/3] relative z-20 border-0 border-amber-700">
                    <Image
                        src={"/whatwedo.svg"}
                        alt=""
                        fill
                        className="object-contain scale-[100%]"
                    ></Image>
                </div>

                <div className="w-[30%] h-[100%] -mt-[7%]">
                    <div className="font-auster text-shadow text-stroke font-[600] text-[70px] text-[#DE9400] w-fit leading-28">
                        What We Do
                    </div>

                    <div className="font-auster font-[600] text-[25px] text-[#01193D] w-fit">
                        By offering a 360-degree approach, we provide our clients with a one-stop shop for all their marketing needs, ensuring a cohesive and integrated brand experience.
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-fit border-0 border-red-500 mt-[10%] relative z-10 rotate-[2deg] origin-top-left">
                {
                    data.map((data , index) => (
                        <DropDown data={data} key={index}></DropDown>
                    ))
                }

            </div>
        </div>
    )
}

export default WhatWeDo