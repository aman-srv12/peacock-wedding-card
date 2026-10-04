import { wedding } from "../data/wedding";
import ScratchReveal from "./ScratchReveal";

export default function CoupleHero() {
  const { bride, groom } = wedding.couple;

  return (
    <section className="couple-hero" aria-labelledby="couple-hero-title">
      <div className="couple-hero__content">
        <p className="couple-hero__eyebrow">Save the Date</p>

        <h1 id="couple-hero-title" className="couple-hero__names">
          <span>{bride.firstName}</span>
          <i>&amp;</i>
          <span>{groom.firstName}</span>
        </h1>

        <p className="couple-hero__invitation">
          With our families&apos; blessings, we invite you to celebrate our
          <br className="desktop-break" /> wedding.
        </p>

        <div className="date-frame" aria-label="Scratch to reveal our wedding date">
          <div className="date-frame__oval">
            <div className="date-frame__date">
              <strong>6–8</strong>
              <span>December</span>
              <span>2026</span>
            </div>
            <ScratchReveal />
          </div>

          <div className="date-frame__art" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
