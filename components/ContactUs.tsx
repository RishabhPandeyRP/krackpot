"use client";

import { useState } from "react";
import Image from "next/image";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        no: "",
        msg: "",
        category: "",
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        country: false,
        no: false,
        msg: false,
        category: false,
    });

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: false });
    };

    const handleCategoryChange = (e: any) => {
        setFormData({ ...formData, category: e.target.value });
        setErrors({ ...errors, category: false });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Validate fields
        const newErrors = {
            name: formData.name.trim() === "",
            email: formData.email.trim() === "",
            country: formData.country.trim() === "",
            no: formData.no.trim() === "",
            msg: formData.msg.trim() === "",
            category: formData.category.trim() === "",
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(Boolean);
        if (hasErrors) return;

        const jsonData = JSON.stringify(formData, null, 2);
        console.log("Form Data:", jsonData);
        // You can now send jsonData to your backend/API
    };

    const AngledLine = ({
        startY = 5,    // Bottom point
        endY = 5,       // Top point
        color = "#9ea7b7",
        opacity = 0.5,
        strokeWidth = 1,

    }) => (
        <div className={`absolute inset-x-0 bottom-0 z-20 pointer-events-none h-[40px]  translate-y-[30px] border-0 border-red-500`}>
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

    const AngledLine2 = ({
        startY = 5,    // Bottom point
        endY = 5,       // Top point
        color = "#9ea7b7",
        opacity = 0.5,
        strokeWidth = 1,

    }) => (
        <div className={`absolute inset-x-0 top-0 z-20 pointer-events-none h-[40px]  translate-y-[30px]`}>
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
        <div className="relative w-full lg:h-[2000px] sm:h-auto border-0 border-red-500 sm:py-[10%] lg:pt-0 flex flex-col bg-[#efeff8]">

            {/* <AngledLine></AngledLine>
            <AngledLine2></AngledLine2> */}

            <div className="absolute inset-0 z-0 ">
                {/* Horizontal lines */}
                {Array.from({ length: 11 }).map((_, index) => (
                    <div
                        key={`h-${index}`}
                        className="absolute w-full border-t border-[#e2e4ee]"
                        style={{ top: `${index * 10.5}%` }}
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
                                top: `${i * 10.5}%`,
                                left: `${j * 12.5}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        ></div>
                    ))
                ))}
            </div>

            <Image
                src="/contactUs Img.svg"
                alt="Contact background"
                fill
                className="object-contain sm:hidden lg:block"
                priority
            />
            <div className="lg:absolute lg:w-[45%] sm:mx-auto sm:w-[65%] h-[1100px] border-0 border-red-500 flex flex-col items-center z-10 lg:top-[20%] lg:left-[27%] sm:left-0 px-[5%] gap-[2%]">
                <div className="font-auster text-shadow text-stroke font-[600] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[#DE9400] text-center leading-tight w-[50%]">
                    Let's Get Started
                </div>

                <form onSubmit={handleSubmit} className="w-[100%] h-[100%] flex flex-col gap-[4%] mt-[4%]">
                    {[
                        { id: "name", label: "Full name", type: "text", placeholder: "Enter Your Name" },
                        { id: "email", label: "Your email", type: "email", placeholder: "Enter Email Address" },
                        { id: "country", label: "Country", type: "text", placeholder: "Enter Your Country" },
                        { id: "no", label: "Mobile No", type: "tel", placeholder: "Enter Your No" },
                    ].map((field) => (
                        <div key={field.id} className="flex flex-col w-[100%]">
                            <label htmlFor={field.id} className="font-auster font-[600] lg:text-[25px] sm:text-[20px] text-[#01193D] w-fit">
                                {field.label}<span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                id={field.id}
                                type={field.type}
                                placeholder={field.placeholder}
                                className="font-[400] text-[25px] text-[#696A6B] border-b-1 border-[#696A6B]"
                                value={formData[field.id as keyof typeof formData]}
                                onChange={handleChange}
                            />
                            {errors[field.id as keyof typeof errors] && (
                                <span className="text-red-500 text-sm mt-1">This field is required</span>
                            )}
                        </div>
                    ))}

                    <div className="flex flex-col w-[100%]">
                        <label htmlFor="msg" className="font-auster font-[600] lg:text-[25px] sm:text-[20px] text-[#01193D] w-fit">
                            Your Message<span className="text-red-500 ml-1">*</span>
                        </label>
                        <textarea
                            id="msg"
                            placeholder="Enter Your Message"
                            className="font-[400] text-[25px] text-[#696A6B] border-b border-[#696A6B] bg-transparent outline-none w-full resize-none"
                            value={formData.msg}
                            onChange={handleChange}
                        />
                        {errors.msg && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                    </div>

                    <div className="flex flex-col w-full text-[#696A6B]">
                        <label htmlFor="category" className="font-auster font-[600] lg:text-[25px] sm:text-[20px] text-[#01193D] w-fit">
                            What's in your mind<span className="text-red-500 ml-1">*</span>
                        </label>
                        <select
                            id="category"
                            value={formData.category}
                            onChange={handleCategoryChange}
                            className="mt-2 font-[400] lg:text-[25px] sm:text-[20px] text-[#696A6B] border-b border-[#696A6B] bg-transparent outline-none w-full"
                        >
                            <option value="" disabled>Select a category</option>
                            <option value="branding">Branding</option>
                            <option value="design">Design</option>
                            <option value="marketing">Marketing</option>
                            <option value="strategy">Strategy</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.category && <span className="text-red-500 text-sm mt-1">Please select a category</span>}
                    </div>

                    <div className="w-[50%] h-[50px] border border-[#01193D] mx-auto relative mt-[6%] bg-[#01193D]">
                        <button type="submit" className="w-[100%] h-[100%] border border-[#01193D] bg-white text-[#01193D] absolute bottom-1 left-1 flex justify-center items-center gap-[8%] font-[700] lg:text-[20px] md:text-[15px] sm:text-[13px]">
                            <div>SUBMIT ENQUIRY</div>
                            <div className="relative w-[20%] h-full">
                                <Image
                                    src="/enter_button 1.svg"
                                    alt="lets talk picture"
                                    fill
                                    className="rounded-bl-lg rounded-br-lg object-contain"
                                />
                            </div>
                        </button>
                    </div>
                </form>
            </div>

            <div className=" border-t-1 border-[#9ea7b7]/50 w-[100%] h-[160px]  bg-white z-20 overflow-hidden absolute bottom-0">
                <div className="w-[15%] h-[80%] absolute right-[10%] -top-[10%] bg-[#01193D] rounded-lg">

                    <div className="w-[100%] h-[100%] bg-white absolute bottom-2 left-2 border border-[#01193D] rounded-lg flex justify-center items-center">
                        <Image
                            src={"/blue_logo 1.svg"}
                            alt="logo"
                            width={150}
                            height={150}
                            className=" z-20"
                        ></Image>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContactUs;
