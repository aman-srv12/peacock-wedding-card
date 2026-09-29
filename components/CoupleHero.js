import Image from "next/image";
import { wedding } from "../data/wedding";
import ScratchReveal from "./ScratchReveal";

export default function CoupleHero() {
  const { groom, bride } = wedding.couple;
  const { month, days, year } = wedding.dateDisplay;

  return (
    <section className="couple-hero" aria-labelledby="couple-hero-title">
      <div className="page-top-rule" aria-hidden="true" />
      <div className="page-petals" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className="couple-hero__corner" aria-hidden="true">
        <Image src="/peacock-corner.svg" alt="" width={560} height={560} />
      </div>

      <div className="couple-hero__content">
        <span className="couple-hero__mark" aria-hidden="true">✦</span>
        <p className="couple-hero__eyebrow">Save the Date</p>

        <h2 id="couple-hero-title" className="couple-hero__names">
          <span>{groom.firstName}</span>
          <i>&amp;</i>
          <span>{bride.firstName}</span>
        </h2>

        <div className="fine-divider fine-divider--hero" aria-hidden="true">
          <span />
          <i>◉</i>
          <span />
        </div>

        <p className="couple-hero__invitation">
          With our families&apos; blessings, we invite you
          <br className="desktop-break" /> to celebrate our wedding.
        </p>

        <ScratchReveal className="couple-hero__scratch">
          <div className="couple-hero__date-lockup">
            <span>{month}</span>
            <strong>{days}</strong>
            <span>{year}</span>
          </div>
        </ScratchReveal>

        <p className="couple-hero__location">
          {wedding.city} <i>·</i> {wedding.state}
        </p>
      </div>
    </section>
  );
}
