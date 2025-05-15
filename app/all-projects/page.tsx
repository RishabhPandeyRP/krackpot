"use client"

import WorksCard from "@/components/WorksCard"
import { useState } from "react";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";
import ProjectsCard from "@/components/ProjectsCard";

const Projects = () => {
    const data = [{
        heading: "Amazon Prime Video",
        content: "Amazon Prime Video, or simply Prime Video, is an American subscription VOD (video on-demand) OTT (over-the-top) streaming television service owned by Amazon. The service primarily distributes films and television series produced or co-produced by Amazon MGM Studios or licensed to Amazon, as Amazon Originals, with the service also hosting content from other providers, content add-ons, live sporting events, and video rental and purchasing services. Along with Prime Video Channels, one can find shows and movies from other channels like Lionsgate play, Discovery Plus, Manoramamax, hoichoi etc.  all in one place.",
        objective: "Amazon Prome Videos advertise their OTT streaming contents through banner ads in multiple languages and on multiple platforms. These require adapting the Ad banners to Multiple sizes as per the media requirement and with varied CTA’s like prompting for taking a subscription, renewing your subscriptions etc.",
        challenges: "Achieving high number of adaptations of the OTT ad banners maintaining the creative balance. Accuracy of placement, maintaining the correct data on each banner and an extremely large quantity- all this in a stipulated amount of time.",
        solution: "Delivered all the requirements in the given deadline to make sure the banners are displayed on time. On a busy month we have achieved worked on 52 titles and approx. 80 adapts of each making it almost 4000 adapts in a month along with other Movie poster adapts for print.",
        logo: "/logo/logo_primevideo.png",
        images: ["/casestudies/cs_amazonprime01.png", "/casestudies/cs_amazonprime02.png", "/casestudies/cs_amazonprime03.png", "/casestudies/cs_amazonprime04.png", "/casestudies/cs_amazonprime05.png",]
    }, {
        heading: "Platinum Connect",
        content: "Platinum Connect; the virtual platform designed specially to give a seamless 24x7 secure access to the world of platinum jewellery. The platform aims at providing proven merchandise opportunities that have been instrumental in making platinum the fastest growth opportunity for manufacturer and retailer partners.",
        objective: "Platinum Guild India (PGI) aimed to create a virtual platform for their entire manufacturer, retailer and distributor community for a smooth online interaction with utmost security and privacy.",
        challenges: "A B2B secure portal with multilevel access point which is specific to the user. An intra portal with through product detail capture at backend, collating to specific information important to the buyer. Product selection and quantity modification from store to state level and final order placement all in a secured process.",
        solution: "A B2B secure portal with multilevel access point which is specific to the user. An intra portal with through product detail capture at backend, collating to specific information important to the buyer. Product selection and quantity modification from store to state level and final order placement all in a secured process.",
        logo: "/logo/logo_platinumconnect.png",
        images: ["/casestudies/cs_ptconnect01.png", "/casestudies/cs_ptconnect02.png", "/casestudies/cs_ptconnect03.png", "/casestudies/cs_ptconnect04.png", "/casestudies/cs_ptconnect05.png",]
    },]


    const [currentIndex, setCurrentIndex] = useState(0);

    const scroll = (direction: "left" | "right") => {
        const maxIndex = data.length - 1;
        if (direction === "left") {
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
        } else {
            setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
        }
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