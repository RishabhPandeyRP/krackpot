"use client"

import WorksCard from "@/components/WorksCard"
import { useState } from "react";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";

const Works = () => {
    const data = [{
        heading: "Apps",
        images: ["/work_apps01.png", "/work_apps02.png", "/work_apps03.png",]
    }, {
        heading: "Emailer",
        images: ["/work_emailer01.png", "/work_emailer02.png", "/work_emailer03.png", "/work_emailer04.png", "/work_emailer05.png", "/work_emailer06.png", "/work_emailer07.png",]
    }, {
        heading: "Website",
        images: ["/work_website01.png", "/work_website02.png", "/work_website03.png", "/work_website04.png", "/work_website05.png", "/work_website06.png", "/work_website07.png", "/work_website08.png", "/work_website09.png", "/work_website10.png"]
    }, {
        heading: "Ad banners",
        images: ["/work_adbanners01.png", "/work_adbanners02.png", "/work_adbanners03.png", "/work_adbanners04.png", "/work_adbanners05.png", "/work_adbanners06.png", "/work_adbanners07.png"]
    }, {
        heading: "Presentation",
        images: ["/work_presentation01.png", "/work_presentation02.png", "/work_presentation03.png", "/work_presentation04.png", "/work_presentation05.png"]
    }, {
        heading: "Social Media",
        images: ["/work_socialmedia01.png", "/work_socialmedia02.png", "/work_socialmedia03.png", "/work_socialmedia04.png", "/work_socialmedia05.png", "/work_socialmedia06.png", "/work_socialmedia07.png", "/work_socialmedia08.png", "/work_socialmedia09.png", "/work_socialmedia10.png", "/work_socialmedia11.png", "/work_socialmedia12.png"]
    }, {
        heading: "OOH/Print",
        images: ["/work_oohprint01.png", "/work_oohprint02.png", "/work_oohprint03.png", "/work_oohprint04.png", "/work_oohprint05.png", "/work_oohprint06.png", "/work_oohprint07.png", "/work_oohprint08.png", "/work_oohprint09.png"]
    }]


    const [currentIndex, setCurrentIndex] = useState(0);

    const scroll = (direction: "left" | "right") => {
        const maxIndex = data.length - 1;
        setCurrentIndex((prev) => {
            const newIndex = direction === "left"
                ? (prev > 0 ? prev - 1 : prev)
                : (prev < maxIndex ? prev + 1 : prev);
    
            // Scroll to top after state is updated
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 0);
    
            return newIndex;
        });
    };
    

    return (
        <div className="w-[100.1%]  bg-white border-0 border-red-500 flex flex-col items-end overflow-hidden mt-[110px]">
            
            
            <div className="w-full">
                <WorksCard item={data[currentIndex]} />
            </div>

            {/* Button Navigation */}
            <div className="w-[13%] h-[55px] bg-[#01193D] flex justify-between items-center px-[1%] mb-20 mr-24">
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

export default Works