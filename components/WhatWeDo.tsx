import Image from "next/image"
import DropDown from "./DropDown"
const WhatWeDo = () => {
    const data = [
        {
            "heading": "Design",
            "sub_headings": [
                {
                    "heading": "Branding",
                    "sub_headings": [
                        "Logo Design",
                        "Visual Identity",
                        "Brand Naming",
                        "Brand Guidelines",
                        "Stationery Design"
                    ]
                },
                {
                    "heading": "Advertising",
                    "sub_headings": [
                        "Print & Digital Billboards",
                        "Print & Digital Transit Displays",
                        "Print & Digital Bus Shelters",
                        "Shopping Centers",
                        "Public Spaces",
                        "Airport Advertising",
                        "Mall Advertising",
                        "Cinema Advertising"
                    ]
                },
                {
                    "heading": "Graphic Design",
                    "sub_headings": [
                        "Brochure",
                        "Catalogue",
                        "Flyers",
                        "Coffee Table Book",
                        "Exhibition Display",
                        "Standee",
                        "Packaging Design",
                        "Invites",
                        "Reports",
                        "Presentations",
                        "Advertorials",
                        "Infographics"
                    ]
                },
                {
                    "heading": "UX and UI Design",
                    "sub_headings": [
                        "App",
                        "Website",
                        "Wireframe",
                        "Emailer",
                        "Newsletter",
                        "Usability Testing"
                    ]
                }
            ]
        },
        {
            heading: "Development",
            sub_headings: [
                {
                    heading: "Website",
                    sub_headings: [
                        "E-commerce",
                        "Shopify",
                        "Custom coded",
                        "No-code",
                        "WebFlow Management Tools",
                        "Dynamic Websites",
                        "Responsive Designs",
                        "Content Management"
                    ]
                },
                {
                    heading: "WebApp",
                    sub_headings: [
                        "Games",
                        "Multiplayer mode",
                        "Shopping Portals",
                        "Dashboards",
                        "OTT platform"
                    ]
                },
                {
                    heading: "App",
                    sub_headings: [
                        "Android Development",
                        "iOS Development",
                        "Native apps",
                        "Flutter Apps"
                    ]
                },
                {
                    heading: "Customized Software",
                    sub_headings: [
                        "CRMs",
                        "ERPs",
                        "Dashboards"
                    ]
                },
                {
                    heading: "Post Development",
                    sub_headings: [
                        "Ongoing Maintenance & Support",
                        "Organic Search Engine Optimization",
                        "Web App Security",
                        "PPC Campaign Management"
                    ]
                }
            ]
        },
        {
            heading: "Email Marketing",
            sub_headings: [
                {
                    heading: "UI and UX Design",
                    sub_headings: [
                        "Welcome/Onboarding Emails",
                        "Promotional Emails",
                        "Transactional Emails",
                        "Survey/Feedback Emails",
                        "Abandoned Cart Emails",
                        "Milestone Emails",
                        "News Letters"
                    ]
                },
                {
                    heading: "Development",
                    sub_headings: [
                        "Emailers",
                        "News Letter",
                        "Landing Page"
                    ]
                }
            ]
        },
        {
            heading: "Banner Ads",
            sub_headings: [
                {
                    heading: "",
                    sub_headings: [
                        "Web Banners",
                        "Html5 banners",
                        "Google Adwords Banners",
                        "Animated Banners",
                        "Dynamic Banners"
                    ]
                }
            ]
        },
        {
            heading: "Content Marketing",
            sub_headings: [
                {
                    heading: "Marketing",
                    sub_headings: [
                        "Influencer Marketing",
                        "Performance Marketing",
                        "Social Media Marketing",
                        "Media Campaigns"
                    ]
                },
                {
                    heading: "Strategy",
                    sub_headings: [
                        "Design Strategy",
                        "Marketing Strategy",
                        "Branding Strategy"
                    ]
                },
                {
                    heading: "Content Creation",
                    sub_headings: [
                        "Creative Content",
                        "Strategic Content",
                        "Content Writing"
                    ]
                }
            ]
        },
        {
            "heading": "Social Media",
            "sub_headings": [
                {
                    "heading": "",
                    "sub_headings": [
                        "Strategizing",
                        "Designing",
                        "Executing",
                        "Analysing",
                        "Copy Writing",
                        "Collaborations",
                        "Campaign Plans"
                    ]
                }
            ]
        },
        {
            "heading": "Motion and Video",
            "sub_headings": [
                {
                    "heading": "",
                    "sub_headings": [
                        "2D Animation",
                        "3D Animation",
                        "CGI Animation",
                        "Video Editing",
                        "Explainer Videos"
                    ]
                }
            ]
        },
        {
            "heading": "Post Production",
            "sub_headings": [
                {
                    "heading": "",
                    "sub_headings": [
                        "Ad Banners",
                        "Movie Posters",
                        "Video Editing"
                    ]
                }
            ]
        }

    ]


    const AngledLine = ({
        startY = 5,    // Bottom point
        endY = 5,       // Top point
        color = "#9ea7b7",
        opacity = 0.5,
        strokeWidth = 1
    }) => (
        <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none h-[40px]  translate-y-[30px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                {/* Main line */}
                <line
                    x1="0"
                    y1={startY}
                    x2="100"
                    y2={endY}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    opacity={opacity}
                />

                {/* Secondary line for depth */}
                <line
                    x1="0"
                    y1={startY - 3}
                    x2="100"
                    y2={endY + 3}
                    stroke={color}
                    strokeWidth={strokeWidth / 2}
                    strokeLinecap="round"
                    opacity={opacity / 2}
                />
            </svg>
        </div>
    )

    return (
        <div className="w-[100%] min-h-[1300px] h-auto pt-[10%] relative overflow-hidden border-0 border-red-500 bg-[#efeff8]">

            {/* <AngledLine></AngledLine> */}

            <div className="absolute inset-0 z-0 ">
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

            <div className="w-[100%] lg:h-[35%] sm:h-auto flex items-center gap-[4%] relative z-10 lg:flex-row sm:flex-col sm:gap-20">
                <div className="w-[60%] aspect-[5/3] relative z-20 border-0 border-amber-700">
                    <Image
                        src={"/whatwedo.svg"}
                        alt=""
                        fill
                        className="object-contain scale-[100%]"
                    ></Image>
                </div>

                <div className="lg:w-[30%] sm:w-[85%] sm:mx-auto h-[100%] lg:-mt-[7%] ">
                    <div className="font-auster text-shadow text-stroke font-[600] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[#DE9400] w-fit leading-28">
                        What We Do
                    </div>

                    <div className="font-auster font-[600] lg:text-[25px] sm:text-[20px] text-[#01193D] w-fit">
                        By offering a 360-degree approach, we provide our clients with a one-stop shop for all their marketing needs, ensuring a cohesive and integrated brand experience.
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-fit border-0 border-red-500 mt-[10%] relative z-10 ">
                {
                    data.map((data, index) => (
                        <DropDown data={data} key={index}></DropDown>
                    ))
                }

            </div>
        </div>
    )
}

export default WhatWeDo