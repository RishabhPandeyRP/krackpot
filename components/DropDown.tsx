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
        <div className="w-[80%] mx-auto border-t-1 border-red-500">
            <div className="w-[100%] h-fit flex items-center gap-[3%] relative">
                <div className="font-auster text-shadow text-stroke font-[600] text-[70px] text-[#DE9400] w-fit leading-28">
                    {data.heading}
                </div>

                <div className="flex gap-2">
                    {
                        data.sub_headings.map((item) => (
                            <div className="font-auster font-[600] text-[25px] text-[#01193D] w-fit">
                                {item.heading}
                            </div>
                        ))
                    }
                </div>

                <button className="text-black absolute right-10" onClick={btnHandler}>
                    {
                        isOpen ? <Image
                        src={"/down.svg"}
                        alt=""
                        width={50}
                        height={50}

                        ></Image> : <Image
                        src={"/up.svg"}
                        alt=""
                        width={50}
                        height={50}

                        ></Image>
                    }
                </button>



            </div>

            <div className={`border border-red-500 w-[100%] text-black ${isOpen ? "h-[100px]" : "h-[0px] hidden"}`}>
                {
                    data.sub_headings.map((item) => (
                        <div className="w-[100%] py-2">
                            {item.heading} :
                            <div className="flex gap-2">
                                {
                                    item.sub_headings.map((content) => (
                                        <span>{content}</span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DropDown