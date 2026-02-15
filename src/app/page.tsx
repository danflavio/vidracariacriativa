import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Carousel />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
