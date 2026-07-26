import Hero from "@/components/home/Hero";
import SelectedCollection from "@/components/home/SelectedCollection";
import BehindTheCamera from "@/components/home/BehindTheCamera";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/home/Intro";

export default function Home() {
  return (
    <>

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