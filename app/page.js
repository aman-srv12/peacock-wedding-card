import CoupleHero from "../components/CoupleHero";
import GaneshWelcome from "../components/GaneshWelcome";
import InvitationCover from "../components/InvitationCover";

export default function Home() {
  return (
    <main className="invitation">
      <InvitationCover />
      <CoupleHero />
      <GaneshWelcome />
    </main>
  );
}
