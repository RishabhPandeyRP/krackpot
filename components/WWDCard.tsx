import Image from "next/image"
const WWDCard = ({ data }: {
    data: {
        image: string,
        heading: string,
        subheading: string
    }
}) => {
    return (
        <div className="w-[750px] h-[850px] border-0 border-[#01193D]">
            <div className="w-[100%] h-[80%] relative p-2 border-0 border-[#01193D]">
                <Image
                    src={data.image}
                    alt="card image"
                    fill
                    className="object-contain"
                ></Image>
            </div>

            <div className="w-[100%] h-[100%] pl-[6%]">
                <div className="w-[50%] h-[5%] border border-[#01193D]  relative mt-[6%] bg-[#01193D] pl-[3%]">
                    <button className="w-[100%] h-[100%] border border-[#DE9400] bg-[#DE9400] text-[#01193D] absolute bottom-1 left-1 flex justify-center items-center gap-[8%] font-[600] text-[16px]">

                        <div>
                            {data.heading}
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
                

                <div className="font-auster font-[600] lg:text-[25px] sm:text-[20px] text-[#01193D] w-fit">
                    {data.subheading}
                </div>
            </div>


        </div>
    )
}

export default WWDCard