"use client"

import WorksCard from "@/components/WorksCard"
import { useEffect, useState } from "react";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";
import ProjectsCard from "@/components/ProjectsCard";
import { projectData } from "@/data/projectData";

const Projects = () => {
    const data = projectData


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentIndex]);
    

    const scroll = (direction: "left" | "right") => {
        const maxIndex = data.length - 1;
        setCurrentIndex((prev) => {
            return direction === "left"
                ? (prev > 0 ? prev - 1 : prev)
                : (prev < maxIndex ? prev + 1 : prev);
        });
    };
    

    return (
        <div className="w-[100%]  bg-white border-0 border-red-500 flex flex-col items-end overflow-hidden gap-10 relative">

            <div className="absolute inset-0 z-0">
                {/* Horizontal lines */}
                {Array.from({ length: 40 }).map((_, index) => (
                    <div
                        key={`h-${index}`}
                        className="absolute w-full border-t border-[#e2e4ee]"
                        style={{ top: `${index * 2.5}%` }}
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
                {Array.from({ length: 40 }).map((_, i) => (
                    Array.from({ length: 9 }).map((_, j) => (
                        <div
                            key={`dot-${i}-${j}`}
                            className="absolute w-1 h-1 bg-[#9098af] rounded-full"
                            style={{
                                top: `${i * 2.5}%`,
                                left: `${j * 12.5}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        ></div>
                    ))
                ))}
            </div>


            <div className="w-full z-10">
                <ProjectsCard item={data[currentIndex]} />
            </div>

            {/* Button Navigation */}
            <div className="w-[13%] h-[55px] bg-[#01193D] flex justify-between items-center px-[1%] mb-20 mr-24 z-10">
                <button
                    onClick={() => scroll("left")}
                    className="relative w-[50%] h-[50%] cursor-pointer"
                >
                    <Image src={"/left.svg"} alt="Left" fill />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="relative w-[50%] h-[50%] cursor-pointer"
                >
                    <Image src={"/right.svg"} alt="Right" fill />
                </button>
            </div>

            <ContactUs></ContactUs>
        </div>
    )
}

export default Projects