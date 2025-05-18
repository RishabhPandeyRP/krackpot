"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dataArr = [{
        name: "ABOUT",
        link: "#"
    }, {
        name: "WORK",
        link: "/all-works"
    }, {
        name: "SERVICES",
        link: "#"
    }, {
        name: "CLIENTS",
        link: "#clients"
    }, {
        name: "CASE STUDIES",
        link: "/all-projects"
    }, {
        name: "CONTACT",
        link: "#contact"
    }, {
        name: "PRIVACY POLICY",
        link: "#"
    }]
    const icons = ["/Linkedin (1).svg", "/Meta.svg", "/Insta (1).svg"]


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Clean up on unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            <div className="w-[100%] h-[110px] bg-[#e5e5f4] fixed top-0 left-0 z-50 overflow-hidden">
                <div className="w-[90%] h-[110px] border-0 border-amber-900 mx-auto flex justify-between ">
                    <div className="w-[20%] h-[100%] border-0 border-red-500">
                        <div className="w-[100%] h-[100%] border border-[#01193D] rounded-bl-lg rounded-br-lg relative">
                            <div className="w-[100%] h-[100%] bg-[#01193D] border border-[#01193D] rounded-bl-lg rounded-br-lg absolute bottom-1 left-1 py-3">
                                <div className="relative w-full h-full">
                                    <Link href={"/"}>
                                        <Image
                                            src="/logoKrackpot.svg"
                                            alt="Profile picture"
                                            fill
                                            className="rounded-bl-lg rounded-br-lg object-contain"
                                        />
                                    </Link>
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

                        <div className="relative w-[20%] h-[23%] cursor-pointer" onClick={() => { setIsOpen(!isOpen) }}>
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

            {isOpen && <>
                <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}></div>

                <div className="absolute top-[110px] w-[100%] h-auto border-0 border-red-500 z-50 flex bg-[#DFDFF1] px-[5%] pb-3">

                    <div className="w-[55%] h-auto relative border-0 border-red-500 flex justify-center items-center">
                        <Image
                            src={"/blue_logo 1.svg"}
                            alt="blue icon"
                            width={500}
                            height={500}
                            className="object-contain"
                        ></Image>
                    </div>
                    <div className="flex flex-col w-[40%] justify-end items-end">
                        <div className="font-auster text-shadow text-stroke font-[600] lg:text-[50px] sm:text-[45px] text-[#DE9400] w-fit leading-28">Menu</div>
                        {
                            dataArr.map((item, index) => (
                                item.link != "#" && <Link href={item.link} onClick={() => setIsOpen(false)} key={index}>
                                    <div className="w-fit font-auster font-[900] lg:text-[35px] sm:text-[25px] text-[#01193D]" key={index}>
                                        {item.name}
                                    </div>
                                </Link>
                            ))
                        }

                        <div className="font-auster text-shadow text-stroke font-[600] text-[50px] text-[#DE9400] w-fit leading-28">Follow us</div>

                        <div className="w-full flex justify-end items-end gap-4">
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
            </>
            }
        </>

    )
}

export default Header