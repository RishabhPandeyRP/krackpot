"use client";

import HeroSection from "@/components/HeroSection";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import WhatWeDid from "@/components/WhatWeDid";
import WhatWeDo from "@/components/WhatWeDo";
import ClientsSay from "@/components/ClientsSay";
import ContactUs from "@/components/ContactUs";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function HomeContent() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const isMobile = window.innerWidth <= 650;
                    const yOffset = isMobile ? 250 : -110;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }, 300);
            }
        }
    }, [pathname, searchParams]);

    return (
        <div className="w-[100.1%] overflow-hidden bg-white">
            <HeroSection />
            <Team />
            <div id="clients" className="md:scroll-mt-[110px]">
                <Clients />
            </div>
            <WhatWeDid />
            <WhatWeDo />
            <ClientsSay />
            <div id="contact" className="scroll-mt-[200px]">
                <ContactUs />
            </div>
        </div>
    );
}
