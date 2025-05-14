import Image from "next/image";
const WorksCard = ({ item }: {
    item: {
        heading: string;
        images: string[]
    }
}) => {
    return (
        <div className="w-screen flex-shrink-0  flex flex-col gap-3 border-0 border-blue-500 pb-28 pt-5">
            <div className="font-auster text-shadow text-stroke font-[600] text-[60px] text-[#DE9400] w-[85%] mx-auto leading-28">
                Works - {item.heading}
            </div>

            <div className="flex flex-col w-full items-center gap-4">
                {item.images.map((imgSrc, index) => (
                    <div key={index} className="relative w-[85%]  aspect-[16/9]">
                        <Image
                            src={imgSrc}
                            alt=""
                            fill
                            className="object-cover"
                            priority={index === 0} // Optional: prioritize first image for faster loading
                        />
                    </div>
                ))}
            </div>
            

        </div>
    )
}

export default WorksCard