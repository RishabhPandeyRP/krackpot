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
        <div className="lg:w-[80%] sm:w-[85%] mx-auto border-t-1 border-[#01193D] bg-white" onClick={() => { setIsopen(!isOpen) }}>
            <div className="w-[100%] h-fit flex items-center gap-[3%] relative">
                <div className=" w-fit leading-28 flex gap-5">
                    <div className="font-auster text-shadow text-stroke font-[600] lg:text-[55px] md:text-[45px] sm:text-[35px] text-[#DE9400]">
                        {data.heading}
                    </div>


                    <div className="font-auster font-[500] lg:text-[55px] md:text-[45px] sm:text-[35px] text-[#01193D] w-fit leading-28">
                        :
                    </div>
                </div>



                <div className="flex gap-2">
                    {
                        data.sub_headings.map((item , index) => (
                            <div className="font-auster font-[600] lg:text-[22px] sm:text-[18px] text-[#01193D] w-fit before:content-['•'] before:mr-2 whitespace-nowrap " key={index}>
                                {item.heading}
                            </div>
                        ))
                    }
                </div>

                <button className="text-black absolute right-10" onClick={btnHandler}>
                    {
                        isOpen ? <Image
                            src={"/up.svg"}
                            alt=""
                            width={50}
                            height={50}

                        ></Image> : <Image
                            src={"/down.svg"}
                            alt=""
                            width={50}
                            height={50}

                        ></Image>
                    }
                </button>



            </div>

            <div
                className={`border-t-1 border-[#01193D] w-full text-black overflow-hidden transition-all duration-500 ease-in-out  ${isOpen ? "h-auto py-2 my-2" : "max-h-0 py-0"
                    }`}
            >
                {data.sub_headings.map((item, idx) => (
                    <div key={idx} className="w-full py-2 flex gap-5">
                        <div className="font-auster font-[600] text-[25px] text-[#01193D] w-fit whitespace-nowrap border-0 border-red-500 ">
                            {item.heading} :-
                        </div>

                        <div className="flex flex-wrap gap-4 border-0 border-red-500">
                            {item.sub_headings.map((content, i) => (
                                <span key={i} className="font-auster font-[500] text-[25px] text-[#01193D] w-fit whitespace-nowrap before:content-['•'] before:mr-2">
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