import Image from "next/image"

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
    return (
        <div className="w-[100%] h-[1400px] border-0 border-green-500 bg-white relative -rotate-[2deg] origin-top-left">

            <AngledLine></AngledLine>

            {/* <div className="absolute -bottom-0 left-0 w-full h-[80px] bg-white -rotate-[2deg] origin-top-left z-10" /> */}

            <div className="absolute inset-0 rotate-[2deg] origin-top-left">
                {/* Horizontal lines of dots */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="flex absolute w-full"
                        style={{
                            top: `${(i + 1) * 12.5}%`,
                            transform: 'translateY(-50%)'
                        }}
                    >
                        {/* Dots across the horizontal line */}
                        {Array.from({ length: 8 }).map((_, j) => (
                            <div
                                key={`dot-${i}-${j}`}
                                className="absolute w-1 h-1 bg-[#9098af] rounded-full"
                                style={{
                                    left: `${(j + 1) * 12.5}%`,
                                    transform: 'translateX(-50%)'
                                }}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="w-[100%] h-[700px] flex flex-col border-0 border-blue-500 rotate-[2deg] origin-top-left">
                <div className="w-[100%] font-auster text-shadow text-stroke font-[700] text-[90px] text-[#DE9400] leading-28 px-[5%] my-[0.5%]">
                    Who We Are
                </div>

                <div className="w-[100%] h-[100%] flex justify-between px-[5%]">
                    <div className="w-[35%] relative border-0 border-red-500">
                        <Image
                            src={"/whoWeAreImage.svg"}
                            alt=""
                            fill
                        ></Image>
                    </div>

                    <div className="w-[65%] border-0 border-red-500 mt-[2%] relative">
                        <div className="font-auster text-shadow text-stroke font-[600] text-[70px] text-[#DE9400] w-fit leading-28">CReATiNG INSPIRATiON</div>
                        <div className="font-auster text-shadow text-stroke font-[600] text-[70px] text-[#DE9400] w-fit leading-28 absolute right-0 -mt-[5%]">WiTH CReATiVE SoLUTiONS</div>


                        <div className="font-auster font-[600] text-[25px] text-[#01193D] w-[90%] text-justify absolute right-0 mt-[7%]">{`${"We (designers) are crazy, think differently, always think or see things unconventionally, we see designs created in our mind when client talks about their brief, as crazy as we at times see a 3D imagery in front of our eyes of the end product in motion when client describes their thought."}`}</div>

                        <div className="absolute right-0 top-[60%] flex flex-col justify-end items-end">
                            <div className="font-auster text-shadow text-stroke font-[600] text-[80px] text-[#DE9400] w-fit leading-28 mt-5">ViSION</div>
                            <div className="font-auster font-[600] text-[25px] text-[#01193D] w-fit text-justify">Our vision is to create a visual output of a thought or an idea.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[700px] flex flex-col border-0 border-blue-500 rotate-[2deg] origin-top-left">
                <div className="w-[100%] font-auster text-shadow text-stroke font-[700] text-[90px] text-[#DE9400] leading-28 px-[5%] my-[1%] text-center">
                    The Team
                </div>
            </div>
        </div>
    )
}

export default Team