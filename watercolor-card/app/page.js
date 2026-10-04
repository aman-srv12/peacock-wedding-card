import FamilySection from "../components/FamilySection";
import HeroSection from "../components/HeroSection";
import OpenGate from "../components/OpenGate";
import StorySection from "../components/StorySection";

export default function Home() {
  return (
    <main className="watercolor-invite">
      <OpenGate />
      <HeroSection />
      <FamilySection />
      <StorySection />
    </main>
  );
}
