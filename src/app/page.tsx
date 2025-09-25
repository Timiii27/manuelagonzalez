import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import Presentation from "@/components/Presentation";
import WorkSection from "@/components/WorkSection";
import Techniques from "@/components/Techniques";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Presentation />
      <WorkSection />
      <Techniques />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
