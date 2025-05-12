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

    return (
        <div className="relative w-full h-[2000] bg-white border-0 border-red-500">
            <Image
                src="/contactUs Img.svg"
                alt="Contact background"
                fill
                className="object-contain"
                priority
            />
            <div className="absolute w-[700px] h-[1100px] border-0 border-red-500 flex flex-col items-center z-10 top-[20%] left-[27%] px-[5%] gap-[2%]">
                <div className="font-auster text-shadow text-stroke font-[600] text-[70px] text-[#DE9400] text-center leading-tight w-[50%]">
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
                            <label htmlFor={field.id} className="font-auster font-[600] text-[25px] text-[#01193D] w-fit">
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
                        <label htmlFor="msg" className="font-auster font-[600] text-[25px] text-[#01193D] w-fit">
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
                        <label htmlFor="category" className="font-auster font-[600] text-[25px] text-[#01193D] w-fit">
                            What's in your mind<span className="text-red-500 ml-1">*</span>
                        </label>
                        <select
                            id="category"
                            value={formData.category}
                            onChange={handleCategoryChange}
                            className="mt-2 font-[400] text-[25px] text-[#696A6B] border-b border-[#696A6B] bg-transparent outline-none w-full"
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
                        <button type="submit" className="w-[100%] h-[100%] border border-[#01193D] bg-white text-[#01193D] absolute bottom-1 left-1 flex justify-center items-center gap-[8%] font-[700] text-[20px]">
                            <div>SUBMIT ENQUIRY</div>
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
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
