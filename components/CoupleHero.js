import { wedding } from "../data/wedding";
import { OrnamentDivider, RoyalFrame } from "./InvitationUI";

export default function CoupleHero() {
  const { groom, bride } = wedding.couple;

  return (
    <section className="couple-hero" aria-labelledby="couple-hero-title">
      <div className="couple-hero__feather couple-hero__feather--left" aria-hidden="true">
        <img src="/peacock-feather.svg" alt="" />
      </div>
      <div className="couple-hero__feather couple-hero__feather--right" aria-hidden="true">
        <img src="/peacock-feather.svg" alt="" />
      </div>

      <RoyalFrame className="couple-hero__frame">
        <div className="couple-hero__arch">
          <p className="eyebrow">Together with their families</p>
          <p className="couple-hero__prelude">request the pleasure of your company</p>

          <h2 id="couple-hero-title" className="couple-hero__names">
            <span>{groom.firstName}</span>
            <i>&amp;</i>
            <span>{bride.firstName}</span>
          </h2>

          <OrnamentDivider />

          <p className="couple-hero__invitation">
            as they begin their forever
          </p>

          <div className="couple-hero__date-lockup">
            <span>December</span>
            <strong>6–8</strong>
            <span>2026</span>
          </div>

          <p className="couple-hero__location">
            {wedding.city} · {wedding.state}
          </p>

          <p className="couple-hero__hint">Scroll to celebrate with us</p>
        </div>
      </RoyalFrame>
    </section>
  );
}
