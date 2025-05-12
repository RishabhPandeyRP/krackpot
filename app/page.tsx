import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import WhatWeDid from "@/components/WhatWeDid";
import WhatWeDo from "@/components/WhatWeDo";
import ClientsSay from "@/components/ClientsSay";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="w-[100%] overflow-hidden">
      <Header></Header>
      <HeroSection></HeroSection>
      <Team></Team>
      <Clients></Clients>
      <WhatWeDid></WhatWeDid>
      <WhatWeDo></WhatWeDo>
      <ClientsSay></ClientsSay>
      <ContactUs></ContactUs>
    </div>
  );
}
