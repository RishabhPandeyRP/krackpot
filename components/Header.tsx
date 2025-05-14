import React from "react"
import Image from "next/image"

const Header = () => {
    return (
        <div className="w-[100%] bg-[#e5e5f4]">
            <div className="w-[90%] h-[120px] border-0 border-amber-900 mx-auto flex justify-between">
                <div className="w-[20%] h-[100%] border-0 border-red-500">
                    <div className="w-[100%] h-[100%] border border-[#01193D] rounded-bl-lg rounded-br-lg relative">
                        <div className="w-[100%] h-[100%] bg-[#01193D] border border-[#01193D] rounded-bl-lg rounded-br-lg absolute bottom-1 left-1 py-3">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/logoKrackpot.svg"
                                    alt="Profile picture"
                                    fill
                                    className="rounded-bl-lg rounded-br-lg object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[20%] sm:w-[40%] h-[100%] flex justify-between items-center border-0 border-blue-800">
                    <div className="w-[50%] h-[40%] border border-[#01193D] rounded-lg relative">
                        <button className="w-[100%] h-[100%] border border-[#01193D] rounded-lg bg-[#01193D] absolute top-1 left-1 flex justify-center items-center gap-[8%]">

                            <div>
                                Let’s Talk
                            </div>
                            <div className="relative w-[20%] h-full">
                                <Image
                                    src="/letsTalk.svg"
                                    alt="lets talk picture"
                                    fill
                                    className="rounded-bl-lg rounded-br-lg object-contain"
                                />
                            </div>
                        </button>
                    </div>

                    <div className="relative w-[20%] h-[23%]">
                        <Image
                            src="/Burger Menu.svg"
                            alt="burger picture"
                            fill
                            className="rounded-bl-lg rounded-br-lg object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header