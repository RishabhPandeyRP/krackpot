// import React from "react"
// import Image from "next/image"

// const HeroSection = () => {
//     return (
//         <div className="w-[100%] h-[700px] border border-green-500 bg-white flex relative">
//             <div className="w-[55%] h-[70%] absolute left-[5%] top-[7%] border border-red-500">
//                 <div className="font-auster text-shadow text-stroke font-[600] text-[110px] text-[#DE9400] w-[100%] leading-28">
//                     CREaTIVE MiNDS <br />
//                     THaT BRiNGS <br />
//                     BRaNDS To <br />
//                     LiFE
//                 </div>

//                 <div>
//                     <div className="w-[250px] h-[50px] border border-[#01193D] relative bg-[#01193D]">
//                         <button className="w-[100%] h-[100%] border border-[#01193D] bg-white absolute bottom-2 left-1 flex justify-center items-center gap-[8%] text-[#01193D] px-1 cursor pointer">

//                             <div className="font-[700] text-[22px]">
//                                 view our work
//                             </div>
//                             <div className="relative w-[20%] h-full">
//                                 <Image
//                                     src="/letsTalk.svg"
//                                     alt="lets talk picture"
//                                     fill
//                                     className="rounded-bl-lg rounded-br-lg object-contain"
//                                 />
//                             </div>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className="w-[45%] h-[70%] absolute right-[2%] top-[9%] border border-red-500">
//                 <div className="relative w-[100%] h-[100%]">
//                     <Image
//                         src={"/heroAsset.svg"}
//                         alt="hero asset"
//                         fill
//                     ></Image>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection


import React from "react"
import Image from "next/image"

const HeroSection = () => {
    return (
        <div className="w-full h-[700px] relative overflow-hidden  border-0 border-green-500 flex">

            {/* 🔷 Background SVG Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/WhatsApp Image 2025-05-11 at 16.10.27_e5d0b178.jpg" // replace with your background SVG
                    alt="background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* 🔷 Main Content */}
            <div className="w-[55%] h-[70%] absolute left-[5%] top-[7%] z-10 border-0 border-red-500 flex flex-col gap-[9%]">
                <div className="font-auster text-shadow text-stroke font-[600] text-[95px] text-[#DE9400] w-full leading-28">
                    CREaTIVE MiNDS <br />
                    THaT BRiNGS <br />
                    BRaNDS To <br />
                    LiFE
                </div>

                {/* Button */}
                <div>
                    <div className="w-[250px] h-[50px] border-0 border-[#01193D] relative bg-[#01193D]">
                        <button className="w-full h-full border border-[#01193D] bg-white absolute bottom-2 left-1 flex justify-center items-center gap-[8%] text-[#01193D] px-1 cursor-pointer">
                            <div className="font-[700] text-[22px]">view our work</div>
                            <div className="relative w-[20%] h-full">
                                <Image
                                    src="/letsTalk.svg"
                                    alt="lets talk"
                                    fill
                                    className="object-contain rounded-bl-lg rounded-br-lg"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Right-side Asset */}
            <div className="w-[45%] h-[70%] absolute right-[2%] top-[9%] z-10 border-0 border-red-500">
                <div className="relative w-full h-full">
                    <Image
                        src="/heroAsset.svg"
                        alt="hero asset"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
