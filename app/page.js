import {
  InvitationCard,
  InvitationSection,
  OrnamentDivider,
  RoyalFrame,
} from "../components/InvitationUI";
import { wedding } from "../data/wedding";

export default function Home() {
  const { groom, bride } = wedding.couple;

  return (
    <main className="design-preview">
      <RoyalFrame className="design-preview__frame">
        <InvitationSection eyebrow="Wedding Invitation">
          <p className="design-preview__kicker">Together with their families</p>
          <h1 className="couple-title">
            {groom.firstName} <span>&amp;</span> {bride.firstName}
          </h1>
          <OrnamentDivider />
          <InvitationCard className="design-preview__card">
            <p className="design-preview__date">{wedding.dateRange}</p>
            <p className="design-preview__place">
              {wedding.city} · {wedding.state}
            </p>
          </InvitationCard>
        </InvitationSection>
      </RoyalFrame>
    </main>
  );
}
