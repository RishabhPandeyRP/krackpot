"use client"

import { useState } from "react";
import Image from "next/image";

const DropDown = ({ data }: {
    data: {
        heading: string;
        sub_headings: {
            heading: string;
            sub_headings: string[]
        }[]
    }
}) => {
    const [isOpen, setIsopen] = useState<boolean>(false)

    const btnHandler = () => {
        setIsopen(!isOpen)
    }

    return (
        <div className="lg:w-[80%] w-[85%] mx-auto border-t-1 border-[#01193D] bg-white px-5" onClick={() => { setIsopen(!isOpen) }}>
            {/* <div className="w-[100%] h-fit sm:flex-row flex-col items-center gap-[3%] relative py-10 px-0">

                <div className=" w-fit leading-28 flex items-center gap-5">
                    <div className="font-auster text-shadow text-stroke font-[600] lg:text-[55px] md:text-[35px] sm:text-[25px] text-[25px] text-[#DE9400] text-nowrap leading-tight">
                        {data.heading}
                    </div>


                    <div className="font-auster font-[500] lg:text-[55px] md:text-[35px] sm:text-[25px] text-[22px] text-[#01193D] w-fit leading-28 hidden lg:block">
                        :
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {
                        data.sub_headings.map((item, index) => (
                            item.heading != "" && <div className="font-auster font-[600] lg:text-[22px] sm:text-[18px] text-[15px] text-[#01193D] w-fit before:content-['•'] before:mr-2 whitespace-nowrap leading-tight" key={index}>
                                {item.heading}
                            </div>
                        ))
                    }
                </div>

                <div className="absolute right-[3%] lg:w-6 lg:h-6 w-8 h-8 md:w-10 md:h-10">
                    <Image
                        src={isOpen ? "/up.svg" : "/down.svg"}
                        alt="Toggle Icon"
                        fill
                        className="object-contain"
                    />
                </div>

            </div> */}

            <div className="w-[100%] h-fit sm:flex-row flex-col items-center gap-[3%] relative py-10 px-0">

                <div className=" w-full leading-28 flex items-center gap-5 border-0 border-red-500 relative">
                    <div className="font-auster text-shadow  font-[600] lg:text-[55px] md:text-[35px] sm:text-[25px] text-[25px] text-[#DE9400] text-nowrap leading-tight border-0 border-red-500">
                        {data.heading}
                    </div>

                    <div className="font-auster font-[500] lg:text-[55px] md:text-[35px] sm:text-[25px] text-[22px] text-[#01193D] w-fit leading-28 hidden lg:block">
                        :
                    </div>

                    <div className="absolute right-[0px] lg:right-[-40px] top-[0%]  lg:w-6 lg:h-6 w-7 h-7 md:w-10 md:h-10">
                        <Image
                            src={isOpen ? "/up.svg" : "/down.svg"}
                            alt="Toggle Icon"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {
                        data.sub_headings.map((item, index) => (
                            item.heading != "" && <div className="font-auster font-[600] lg:text-[22px] sm:text-[18px] text-[15px] text-[#01193D] w-fit before:content-['•'] before:mr-2 whitespace-nowrap leading-tight" key={index}>
                                {item.heading}
                            </div>
                        ))
                    }
                </div>

                {/* <div className="absolute right-[3%] top-[50%] -translate-y-[50%] lg:w-6 lg:h-6 w-8 h-8 md:w-10 md:h-10">
                    <Image
                        src={isOpen ? "/up.svg" : "/down.svg"}
                        alt="Toggle Icon"
                        fill
                        className="object-contain"
                    />
                </div> */}

            </div>

            <div
                className={`border-t-0 border-[#01193D] w-full text-black overflow-hidden transition-all duration-500 ease-in-out  ${isOpen ? "h-auto py-2 my-2" : "max-h-0 py-0"
                    }`}
            >
                {data.sub_headings.map((item, idx) => (
                    <div key={idx} className="w-full py-2 flex gap-5">
                        {item.heading != "" && <div className="font-auster font-[600] lg:text-[25px] md:text-[20px] sm:text-[15px] text-[15px] text-[#01193D] w-fit whitespace-nowrap border-0 border-red-500 ">
                            {item.heading} :-
                        </div>}

                        <div className="flex flex-wrap gap-4 border-0 border-red-500 w-full">
                            {item.sub_headings.map((content, i) => (
                                <span key={i} className="font-auster font-[500] lg:text-[25px] md:text-[20px] sm:text-[15px] text-[15px] text-[#01193D] max-w-[200px] break-after-right md:break-words before:content-['•'] before:mr-2">
                                    {content}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default DropDown