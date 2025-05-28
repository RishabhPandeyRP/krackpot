"use client"
import Image from "next/image"
import DropDown from "./DropDown"
import React from "react"
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

    const [gridConfig, setGridConfig] = React.useState({ horizontalLines: 8, verticalLines: 8 })
                
                React.useEffect(() => {
                const calculateGrid = () => {
                    const containerWidth = window.innerWidth
                    const cellSize = 135 // Fixed cell size for square grid
                    const isDesktop = window.innerWidth >= 1024
                    
                    // Calculate vertical lines based on screen width
                    const verticalLines = Math.floor(containerWidth / cellSize) + 1
                    
                    // For horizontal lines:
                    // Desktop: Use fixed height of 1400px
                    // Mobile: Use a reasonable number of lines since height is auto
                    let horizontalLines
                    if (isDesktop) {
                        horizontalLines = Math.floor((1300 + 4000) / cellSize)  // Based on lg:h-[1400px]
                    } else {
                        // For mobile h-auto, use a reasonable number of lines to cover content
                        // Estimate based on typical mobile content height
                        horizontalLines = 40 // This should cover most mobile content heights
                    }
                    
                    setGridConfig({ 
                        horizontalLines: Math.max(horizontalLines, 8), // Minimum 8 lines for mobile
                        verticalLines: Math.max(verticalLines, 4)      // Minimum 4 lines
                    })
                }
                
                calculateGrid()
                window.addEventListener('resize', calculateGrid)
                
                return () => window.removeEventListener('resize', calculateGrid)
            }, [])

    return (
        <div className="w-[100%] min-h-[1300px] h-auto pt-[10%] relative overflow-hidden border-0 border-red-500 bg-[#efeff8] pb-[5%]">

            {/* <AngledLine></AngledLine> */}

            <div className="absolute inset-0 z-0 ">
                {/* Horizontal lines */}
                {Array.from({ length: gridConfig.horizontalLines }).map((_, index) => (
                    <div
                        key={`h-${index}`}
                        className="absolute w-full border-t border-[#e2e4ee]"
                        style={{ top: `${index * 135}px` }}
                    ></div>
                ))}

                {/* Vertical lines */}
                {Array.from({ length: gridConfig.verticalLines }).map((_, index) => (
                    <div
                        key={`v-${index}`}
                        className="absolute h-full border-l border-[#e2e4ee]"
                        style={{ left: `${index * 135}px` }}
                    ></div>
                ))}

                {/* Intersection dots */}
                {Array.from({ length: gridConfig.horizontalLines }).map((_, i) => (
                    Array.from({ length: gridConfig.verticalLines }).map((_, j) => (
                        <div
                            key={`dot-${i}-${j}`}
                            className="absolute w-1 h-1 bg-[#9098af77] rounded-full"
                            style={{
                                top: `${i * 135}px`,
                                left: `${j * 135}px`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        ></div>
                    ))
                ))}
            </div>

            <div className="w-[100%] lg:h-[35%] h-auto flex items-center gap-20 relative z-10 lg:flex-row flex-col-reverse">
                <div className="w-[60%] aspect-[5/3] relative z-20 border-0 border-amber-700">
                    <Image
                        src={"/whatwedo.svg"}
                        alt=""
                        fill
                        className="object-contain scale-[100%]"
                    ></Image>
                </div>

                <div className="lg:w-[30%] w-[85%] mx-auto h-[100%] lg:-mt-[7%] ">
                    <div className="font-auster text-shadow text-stroke font-[600] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[40px] text-[#DE9400] w-fit leading-28">
                        What We Do
                    </div>

                    <div className="font-auster font-[600] lg:text-[25px] sm:text-[20px] text-[15px] text-[#01193D] w-fit">
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