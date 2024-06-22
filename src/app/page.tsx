import FeaturedCourse from "@/components/FeaturedCourse";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instuctors from "@/components/Instuctors";
import TestimonialCard from "@/components/TestimonialCard";
import UpcommingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center">
        <HeroSection />
        <FeaturedCourse />
        <WhyChooseUs />
        <TestimonialCard />
        <UpcommingWebinars />
        <Instuctors />
        <Footer />
      </h1>
    </main>
  );
}
