import Hero from "@/components/sections/Hero";
import PassionSection from "@/components/sections/PassionSection";
import PositioningSection from "@/components/sections/PositioningSection";
import TimelineSection from "@/components/sections/TimeLineSection";
import Header from "@/components/header/Header";
import ContactUsCta from "@/components/sections/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TimelineSection />
      <PassionSection />
      <PositioningSection />
      <ContactUsCta />
      <Footer />
    </main>
  );
}
