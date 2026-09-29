import Image from "next/image";
import { wedding } from "../data/wedding";
import ScratchReveal from "./ScratchReveal";
import { OrnamentDivider, RoyalFrame } from "./InvitationUI";

export default function CoupleHero() {
  const { groom, bride } = wedding.couple;
  const { month, days, year } = wedding.dateDisplay;

  return (
    <section className="couple-hero" aria-labelledby="couple-hero-title">
      <div className="couple-hero__feather couple-hero__feather--left" aria-hidden="true">
        <Image src="/peacock-feather.svg" alt="" width={150} height={360} />
      </div>
      <div className="couple-hero__feather couple-hero__feather--right" aria-hidden="true">
        <Image src="/peacock-feather.svg" alt="" width={150} height={360} />
      </div>

      <RoyalFrame className="couple-hero__frame">
        <div className="couple-hero__arch">
          <p className="eyebrow">Save the Date</p>
          <p className="couple-hero__prelude">With our families&apos; blessings</p>

          <h2 id="couple-hero-title" className="couple-hero__names">
            <span>{groom.firstName}</span>
            <i>&amp;</i>
            <span>{bride.firstName}</span>
          </h2>

          <OrnamentDivider />

          <p className="couple-hero__invitation">
            we invite you to celebrate our wedding.
          </p>

          <ScratchReveal className="couple-hero__scratch">
            <div className="couple-hero__date-lockup">
              <span>{month}</span>
              <strong>{days}</strong>
              <span>{year}</span>
            </div>
          </ScratchReveal>

          <p className="couple-hero__location">
            {wedding.city} · {wedding.state}
          </p>

          <p className="couple-hero__hint">Continue to our celebration</p>
        </div>
      </RoyalFrame>
    </section>
  );
}
