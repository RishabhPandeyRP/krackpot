import Image from "next/image"
const ClientCard = ({ data, index }: {
    data: {
        content: string,
        name: string,
        post: string,
        logoLink: string
    },
    index: number
}) => {
    return (
        <div className={`sm:w-[600px] sm:h-[750px] w-[320px] h-[650px] bg-[#01193D] relative ${index % 2 != 0 ? "mt-[10%]" : ""}`}>
            <div className="sm:w-[600px] sm:h-[750px] w-[320px] h-[650px] border border-[#01193D] bg-[#E9E9ED] absolute bottom-2 left-2 flex items-center">
                <Image
                    src={"/downQuotes2.svg"}
                    alt=""
                    width={110}
                    height={110}
                    className="absolute top-0 right-0"
                ></Image>

                <Image
                    src={"/downQuotes2.svg"}
                    alt=""
                    width={110}
                    height={110}
                    className="absolute bottom-0 left-0 rotate-180"
                ></Image>

                <Image
                    src={"/downQuotes1.svg"}
                    alt=""
                    width={95}
                    height={95}
                    className="absolute top-0 right-0"
                ></Image>

                <Image
                    src={"/downQuotes1.svg"}
                    alt=""
                    width={95}
                    height={95}
                    className="absolute bottom-0 left-0 rotate-180"
                ></Image>


                <div className="w-[76%] h-fit mx-auto font-auster font-[500] lg:text-[25px] sm:text-[20px] text-[#01193D] text-center">
                    {data.content}
                </div>

                <div className="w-[50%] h-auto absolute bottom-5 sm:right-10 right-5 flex flex-col items-end border-0 border-red-500 gap-0">
                    <div className="font-auster font-[600] lg:text-[30px] sm:text-[25px] text-[15px] text-[#01193D]">{data.name}</div>
                    <div className="font-auster font-[400] lg:text-[20px] sm:text-[15px] text-[15px] text-[#01193D] border-0 border-red-500 text-end">{data.post}</div>

                    <Image
                        src={data.logoLink}
                        alt="comment img link"
                        width={100}
                        height={50}
                        
                        className="object-cover"
                    ></Image>

                </div>
            </div>
        </div>
    )
}

export default ClientCard