import Image from "next/image"
import DropDown from "./DropDown"
const WhatWeDo = () => {
    const data = [{
        heading: "Design",
        sub_headings: [{
            heading: "Branding",
            sub_headings: ["logo", "visual"]
        }]
    }, {
        heading: "Design",
        sub_headings: [{
            heading: "Branding",
            sub_headings: ["logo", "visual"]
        }]
    }]
    return (
        <div className="w-[100%] h-[1000px] bg-white pt-[10%]">
            <div className="w-[100%] h-[35%] flex gap-[4%]">
                <div className="w-[60%] h-[100%] relative">
                    <Image
                        src={"/whatwedo.svg"}
                        alt=""
                        fill
                        className="object-contain scale-[185%]"
                    ></Image>
                </div>

                <div className="w-[30%] h-[100%] -mt-[7%]">
                    <div className="font-auster text-shadow text-stroke font-[600] text-[70px] text-[#DE9400] w-fit leading-28">
                        What We Do
                    </div>

                    <div className="font-auster font-[600] text-[25px] text-[#01193D] w-fit">
                        By offering a 360-degree approach, we provide our clients with a one-stop shop for all their marketing needs, ensuring a cohesive and integrated brand experience.
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[65%] border border-red-500 mt-[10%]">
                {
                    data.map((data) => (
                        <DropDown data={data}></DropDown>
                    ))
                }

            </div>
        </div>
    )
}

export default WhatWeDo