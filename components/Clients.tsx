"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
    const logosList = [
        "/cravatex 1.svg",
        "/fila 1.svg",
        "/glutaweis_logo 3.svg",
        "/stapl logo_002 1.svg",
        "/treo 1.svg",
        "/cravatex 1.svg",
        "/fila 1.svg",
        "/glutaweis_logo 3.svg",
        "/stapl logo_002 1.svg",
        "/treo 1.svg",
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full h-[1100px] border border-b-blue-700 bg-[#efeff8] relative">
            <div className="absolute inset-0 z-0">
                {/* Horizontal lines */}
                {Array.from({ length: 9 }).map((_, index) => (
                    <div
                        key={`h-${index}`}
                        className="absolute w-full border-t border-[#e2e4ee]"
                        style={{ top: `${index * 12.5}%` }}
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
                {Array.from({ length: 9 }).map((_, i) => (
                    Array.from({ length: 9 }).map((_, j) => (
                        <div
                            key={`dot-${i}-${j}`}
                            className="absolute w-1 h-1 bg-[#9098af] rounded-full"
                            style={{
                                top: `${i * 12.5}%`,
                                left: `${j * 12.5}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        ></div>
                    ))
                ))}
            </div>

            <div className="w-full h-[550px] border-0 border-red-500 overflow-hidden flex flex-col gap-[5%] relative z-10">
                <div className="flex flex-col w-full h-fit px-[5%] my-[1%]">
                    <div className="font-auster text-shadow text-stroke font-[600] text-[70px] text-[#DE9400] w-fit leading-28">
                        Our Clients
                    </div>
                    <div className="font-auster font-[600] text-[25px] text-[#01193D] w-fit leading-28 -mt-[50px]">
                        We value our clients as partners in our growth.
                    </div>
                </div>

                <div className="-mr-[40px] ">
                    <Slider {...settings}>
                        {logosList.map((src, index) => (
                            <div key={index} className="px-2">
                                <div className="w-[250px] h-[200px] bg-white border border-gray-300 flex items-center justify-center mx-auto !shadow-lg shadow-black/15">
                                    <div className="relative w-[120px] h-[70px]">
                                        <Image
                                            src={src}
                                            alt={`client-logo-${index}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="w-full h-[550px] border-0 border-red-500 overflow-hidden flex flex-col gap-[5%] relative z-10">
                <div className="flex flex-col w-full h-fit px-[5%] my-[1%] items-end">
                    <div className="font-auster text-shadow text-stroke font-[600] text-[70px] text-[#DE9400] w-fit leading-28">
                        Agencies Joined Hands with us
                    </div>
                    <div className="font-auster font-[600] text-[25px] text-[#01193D] w-fit leading-28 -mt-[50px]">
                        The combined expertise and resources can lead to better results.
                    </div>
                </div>

                <div className="-mr-[40px] ">
                    <Slider {...settings}>
                        {logosList.map((src, index) => (
                            <div key={index} className="px-2">
                                <div className="w-[250px] h-[200px] bg-white border border-gray-300 flex items-center justify-center mx-auto !shadow-lg shadow-black/15">
                                    <div className="relative w-[120px] h-[70px]">
                                        <Image
                                            src={src}
                                            alt={`client-logo-${index}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default Clients;
