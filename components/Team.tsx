import Image from "next/image"

const Team = () => {
    return (
        <div className="w-[100%] h-[1400px] border border-green-500 bg-white">

            <div className="w-[100%] h-[700px] flex flex-col border border-blue-500">
                <div className="w-[100%] font-auster text-shadow text-stroke font-[700] text-[90px] text-[#DE9400] leading-28 px-[5%] my-[0.5%]">
                    Who We Are
                </div>

                <div className="w-[100%] h-[100%] flex justify-between px-[5%]">
                    <div className="w-[35%] relative border border-red-500">
                        <Image
                            src={"/whoWeAreImage.svg"}
                            alt=""
                            fill
                        ></Image>
                    </div>

                    <div className="w-[65%] border border-red-500 mt-[2%] relative">
                        <div className="font-auster text-shadow text-stroke font-[600] text-[70px] text-[#DE9400] w-fit leading-28">CReATiNG INSPIRATiON</div>
                        <div className="font-auster text-shadow text-stroke font-[600] text-[70px] text-[#DE9400] w-fit leading-28 absolute right-0 -mt-[5%]">WiTH CReATiVE SoLUTiONS</div>


                        <div className="font-auster font-[600] text-[25px] text-[#01193D] w-[90%] text-justify absolute right-0 mt-[7%]">{`${"We (designers) are crazy, think differently, always think or see things unconventionally, we see designs created in our mind when client talks about their brief, as crazy as we at times see a 3D imagery in front of our eyes of the end product in motion when client describes their thought."}`}</div>

                        <div className="absolute right-0 top-[60%] flex flex-col justify-end items-end">
                            <div className="font-auster text-shadow text-stroke font-[600] text-[80px] text-[#DE9400] w-fit leading-28 mt-5">ViSION</div>
                            <div className="font-auster font-[600] text-[25px] text-[#01193D] w-fit text-justify">Our vision is to create a visual output of a thought or an idea.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[700px] flex flex-col border border-blue-500">
                <div className="w-[100%] font-auster text-shadow text-stroke font-[700] text-[90px] text-[#DE9400] leading-28 px-[5%] my-[1%] text-center">
                The Team
                </div>
            </div>
        </div>
    )
}

export default Team