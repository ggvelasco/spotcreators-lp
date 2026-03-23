import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DNA from "@/components/DNA";
import Services from "@/components/Services";
import Casting from "@/components/Casting";
import Brands from "@/components/Brands";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DNA />
      <Services />
      <Casting />
      <Brands />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
