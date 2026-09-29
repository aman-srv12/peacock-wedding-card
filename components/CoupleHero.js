import Image from "next/image";
import { wedding } from "../data/wedding";
import ScratchReveal from "./ScratchReveal";

export default function CoupleHero() {
  const { groom, bride } = wedding.couple;

  return (
    <section className="couple-hero" aria-labelledby="couple-hero-title">
      <div className="peacock-page__frame" aria-hidden="true" />
      <div className="peacock-page__feather peacock-page__feather--left" aria-hidden="true">
        <Image src="/peacock-feather.svg" alt="" width={190} height={450} priority />
      </div>
      <div className="peacock-page__feather peacock-page__feather--right" aria-hidden="true">
        <Image src="/peacock-feather.svg" alt="" width={190} height={450} />
      </div>

      <div className="couple-hero__content">
        <p className="couple-hero__eyebrow">Save the Date</p>

        <h1 id="couple-hero-title" className="couple-hero__names">
          <span>{groom.firstName}</span>
          <i>&amp;</i>
          <span>{bride.firstName}</span>
        </h1>

        <div className="peacock-divider" aria-hidden="true">
          <span />
          <b>◉</b>
          <span />
        </div>

        <p className="couple-hero__invitation">
          With our families&apos; blessings, we invite you
          <br className="desktop-break" /> to celebrate our wedding.
        </p>

        <ScratchReveal className="couple-hero__scratch">
          <p className="couple-hero__date">{wedding.dateRange}</p>
        </ScratchReveal>

        <p className="couple-hero__location">
          {wedding.city} <i>·</i> {wedding.state}
        </p>

        <span className="couple-hero__continue" aria-hidden="true">
          Scroll to continue
          <i />
        </span>
      </div>
    </section>
  );
}
