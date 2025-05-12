"use client"
import { useState } from "react";
import Image from "next/image";
import ClientCard from "./ClientCard";

const ClientsSay = () => {
    const data = [{
        content: "From the initial consultation to the campaign launch and ongoing reporting, M/s Krackpot Design and Digital Solutions demonstrated exceptional communication and professionalism. Their team was always responsive, transparent, and a pleasure to work with. They made the entire process smooth and stress-free. We appreciate their attention to detail and commitment to client satisfaction",
        name: "Rahul Singh",
        post: "Assistant Brand Manager -TREO",
        logoLink: "/treo 1.svg"
    },
    {
        content: "From the initial consultation to the campaign launch and ongoing reporting, M/s Krackpot Design and Digital Solutions demonstrated exceptional communication and professionalism. Their team was always responsive, transparent, and a pleasure to work with. They made the entire process smooth and stress-free. We appreciate their attention to detail and commitment to client satisfaction",
        name: "Rahul Singh 2",
        post: "Assistant Brand Manager -TREO",
        logoLink: "/treo 1.svg"
    },
    {
        content: "From the initial consultation to the campaign launch and ongoing reporting, M/s Krackpot Design and Digital Solutions demonstrated exceptional communication and professionalism. Their team was always responsive, transparent, and a pleasure to work with. They made the entire process smooth and stress-free. We appreciate their attention to detail and commitment to client satisfaction",
        name: "Rahul Singh 3",
        post: "Assistant Brand Manager -TREO",
        logoLink: "/treo 1.svg"
    },
    {
        content: "From the initial consultation to the campaign launch and ongoing reporting, M/s Krackpot Design and Digital Solutions demonstrated exceptional communication and professionalism. Their team was always responsive, transparent, and a pleasure to work with. They made the entire process smooth and stress-free. We appreciate their attention to detail and commitment to client satisfaction",
        name: "Rahul Singh 4",
        post: "Assistant Brand Manager -TREO",
        logoLink: "/treo 1.svg"
    },]


    const [currentIndex, setCurrentIndex] = useState(0);

    const scroll = (direction: "left" | "right") => {
        const maxIndex = data.length - 1;
        if (direction === "left") {
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
        } else {
            setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        }
    };

    return (
        <div className="w-[100%] min-h-[1000px] h-auto border-0 border-red-500 bg-white relative">
            <div className="absolute inset-0">
                {/* Horizontal lines of dots */}
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="flex absolute w-full"
                        style={{
                            top: `${i * 10}%`,
                            transform: 'translateY(-50%)'
                        }}
                    >
                        {/* Dots across the horizontal line */}
                        {Array.from({ length: 10 }).map((_, j) => (
                            <div
                                key={`dot-${i}-${j}`}
                                className="absolute w-1 h-1 bg-[#9098af] rounded-full"
                                style={{
                                    left: `${j * 10}%`,
                                    transform: 'translateX(-50%)'
                                }}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="font-auster text-shadow text-stroke font-[600] text-[70px] text-[#DE9400] w-fit leading-28 px-[5%] py-[5%]">
                What our clients Say
            </div>

            <div className="w-full h-[1000px] relative border-0 border-red-500">
                <div className="w-full min-h-[80%] h-auto px-[2%] relative mt-[0%] border-0 border-green-500 overflow-hidden">
                    <div
                        className="flex items-center transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 798}px)`,
                        }}
                    >
                        {data.map((card, index) => (
                            <div key={index} className="flex-shrink-0 w-[750px] px-7 ml-4">
                                <ClientCard data={card} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="absolute bottom-10 right-14 w-[13%] h-[55px] bg-[#01193D] flex justify-between items-center px-[1%]">
                    <button
                        onClick={() => scroll("left")}
                        className="relative w-[50%] h-[50%]"
                    >
                        <Image src={"/left.svg"} alt="Left" fill />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="relative w-[50%] h-[50%]"
                    >
                        <Image src={"/right.svg"} alt="Right" fill />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ClientsSay