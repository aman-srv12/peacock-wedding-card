import {
  InvitationCard,
  InvitationSection,
  OrnamentDivider,
  RoyalFrame,
} from "../components/InvitationUI";

export default function Home() {
  return (
    <main className="design-preview">
      <RoyalFrame className="design-preview__frame">
        <InvitationSection eyebrow="Wedding Invitation">
          <p className="design-preview__kicker">Together with their families</p>
          <h1 className="couple-title">
            Aman <span>&amp;</span> Ananya
          </h1>
          <OrnamentDivider />
          <InvitationCard className="design-preview__card">
            <p className="design-preview__date">6–8 December 2026</p>
            <p className="design-preview__place">Lucknow · Uttar Pradesh</p>
          </InvitationCard>
        </InvitationSection>
      </RoyalFrame>
    </main>
  );
}
