import Hero from "@/components/sections/Hero";
import PassionSection from "@/components/sections/PassionSection";
import PositioningSection from "@/components/sections/PositioningSection";
import TimelineSection from "@/components/sections/TimeLineSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TimelineSection />
      <PassionSection />
      <PositioningSection />
    </main>
  );
}
