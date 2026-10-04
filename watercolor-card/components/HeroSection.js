import Countdown from "./Countdown";
import Monogram from "./Monogram";
import { wedding } from "../data/wedding";

export default function HeroSection() {
  return (
    <section className="invite-page hero-page" aria-labelledby="hero-title">
      <div className="invite-page__scene hero-page__scene" aria-hidden="true" />

      <div className="hero-page__content">
        <Monogram className="hero-page__monogram" />

        <h1 id="hero-title" className="hero-page__names">
          <span>{wedding.couple.groom.firstName}</span>
          <em>Weds</em>
          <span>{wedding.couple.bride.firstName}</span>
        </h1>

        <p className="micro-heart" aria-hidden="true">♥</p>
        <p className="caps-line">We are getting married</p>
        <p className="micro-heart" aria-hidden="true">♥</p>

        <p className="caps-line caps-line--gold">Save the Date</p>
        <p className="hero-page__date">{wedding.heroDate}</p>
        <p className="caps-line">{wedding.city}, {wedding.state}</p>

        <div className="reference-divider">
          <span />
          <b>The countdown begins</b>
          <span />
        </div>

        <Countdown target={wedding.countdownTarget} />
        <p className="hero-page__forever">❦ Until our forever begins ❦</p>

        <p className="micro-heart micro-heart--lower" aria-hidden="true">♥</p>
        <p className="hero-page__thanks">
          Thank you for being a part of our special day.
        </p>
        <p className="micro-heart" aria-hidden="true">♥</p>
      </div>
    </section>
  );
}
