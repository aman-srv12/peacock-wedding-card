import Countdown from "./Countdown";
import { wedding } from "../data/wedding";

export default function HeroSection() {
  return (
    <section className="hero invite-section" aria-labelledby="hero-title">
      <div className="hero__background" aria-hidden="true" />
      <div className="invite-section__inner hero__inner">
        <div className="hero__monogram monogram" aria-hidden="true">
          <span>A</span>
          <i />
          <span>A</span>
        </div>

        <h1 id="hero-title">
          <span>{wedding.couple.groom.firstName}</span>
          <em>Weds</em>
          <span>{wedding.couple.bride.firstName}</span>
        </h1>

        <div className="hero__heart" aria-hidden="true">♥</div>
        <p className="hero__kicker">We are getting married</p>
        <div className="hero__heart" aria-hidden="true">♥</div>

        <p className="hero__save">Save the Date</p>
        <p className="hero__date">{wedding.heroDate}</p>
        <p className="hero__place">{wedding.city}, {wedding.state}</p>

        <div className="ornament">The countdown begins</div>
        <Countdown target={wedding.countdownTarget} />
        <p className="hero__forever">❦ Until our forever begins ❦</p>
        <p className="hero__thanks">
          Thank you for being a part of our special day.
        </p>
      </div>
    </section>
  );
}
