import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SelectedCollection from "@/components/home/SelectedCollection";
import BehindTheCamera from "@/components/home/BehindTheCamera";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Intro from "@/components/home/Intro";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <SelectedCollection />
        <BehindTheCamera />
        <Contact />
      </main>

      <Footer />
    </>
  );
}