import Image from "next/image";
const ProjectsCard = ({ item }: {
    item: {
        heading: string;
        content: string;
        objective: string;
        challenges: string;
        solution: string;
        logo: string;
        images: string[];
    }
}) => {
    return (
        <div className="w-[100%] px-[5%] py-5">
            <div className="w-[100%] flex flex-col gap-3">
                <div className="w-[100%] flex justify-between items-center">
                    <div className="font-auster text-shadow text-stroke font-[600] lg:text-[60px] md:text-[50px] sm:text-[40px] text-[40px] text-[#DE9400] w-[85%] mx-auto leading-normal">
                        {item.heading}
                    </div>

                    <div className="sm:w-[250px] sm:h-[55px] w-[150px] h-[50px] relative">
                        <Image
                            src={item.logo}
                            alt="logo image"
                            fill
                            className="object-contain"
                        />
                    </div>

                </div>

                <div className="font-auster font-[600] lg:text-[21px] md:text-[18px] sm:text-[15px] text-[15px] text-[#01193D] w-full">
                    {item.content}
                </div>
            </div>

            <div className="w-[100%] flex sm:flex-row justify-between flex-col">
                <div className="flex flex-col w-[95%] sm:w-[45%] gap-3">
                    <div className="font-auster text-shadow-2 font-[600] lg:text-[60px] md:text-[50px] text-[40px] text-[#01193D] w-[100%] mx-auto leading-28">
                        Objective
                    </div>

                    <div className="font-auster font-[600] lg:text-[21px] md:text-[18px] text-[15px] text-[#01193D] w-full">
                        {item.objective}
                    </div>
                </div>

                <div className="flex flex-col w-[95%] sm:w-[45%] gap-3">
                    <div className="font-auster text-shadow-2 font-[600] lg:text-[60px] md:text-[50px] text-[40px] text-[#01193D] w-[100%] mx-auto leading-28">
                        Challenges
                    </div>

                    <div className="font-auster font-[600] lg:text-[21px] md:text-[18px] text-[15px] text-[#01193D] w-full">
                        {item.challenges}
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-[100%] gap-3">
                <div className="font-auster text-shadow-2 font-[600] lg:text-[60px] md:text-[50px] text-[40px] text-[#01193D] w-[100%] mx-auto leading-28">
                    Solution/Execution
                </div>

                <div className="font-auster font-[600] lg:text-[21px] md:text-[18px] text-[15px] text-[#01193D] w-full">
                    {item.solution}
                </div>
            </div>

            <div className="flex flex-col w-full items-center gap-4 my-10">
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

export default ProjectsCard