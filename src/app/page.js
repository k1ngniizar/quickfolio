import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Sample } from "@/components/Sample";
import { WhyUs } from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <About />
      <WhyUs />
      <Sample />
    </div>
  );
}
