import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Home1 from "@/components/Home";
import Getstarted from "@/components/Getstarted";
import Navbar from "@/components/Navbar";
import Aos from "aos";
import { useEffect } from "react";
import Roadmap from "@/components/Roadmap";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Rewards from "@/components/Rewards";
import Problem_stmnt from "@/components/Problem_stmtn";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    useEffect(() => {
      Aos.init({
        offset: 50,
      });
    }, []);
      
  return (
    <>
      <title>IBeTo | Excel 2023</title>
      <Navbar />
      <div className="fixed">
        <Home1 />
      </div>
      <div id="start" className="relative top-[90vh] sm:top-[88vh]">
        <Getstarted />
        <Roadmap />
        <Problem_stmnt />
        <Timeline />
        <Rewards/>
        <Sponsors />
        <div className="absolute w-full z-50">
          <Faq />
          <Contact />
          <Footer />
          
        </div>
        
      </div>
    </>
  );
}
