import Monogram from "./Monogram";
import { wedding } from "../data/wedding";

export default function FamilySection() {
  const { groom, bride } = wedding.couple;

  return (
    <section className="invite-page family-page" aria-labelledby="family-title">
      <div className="invite-page__scene family-page__scene" aria-hidden="true" />

      <div className="family-page__content">
        <p className="family-page__promise">Two families. One promise.</p>
        <p className="family-page__ornament" aria-hidden="true">❦ ♥ ❦</p>

        <h2 id="family-title">Introducing the families</h2>
        <div className="reference-divider reference-divider--short">
          <span />
          <b>❦</b>
          <span />
        </div>

        <article className="family-block">
          <h3>{groom.firstName}</h3>
          <p className="family-block__spark">✦</p>
          <p className="family-block__relation">Son of</p>
          <p className="family-block__parents">
            {groom.parents.mother} &amp;<br />{groom.parents.father}
          </p>
        </article>

        <Monogram className="family-page__monogram" />

        <article className="family-block">
          <h3>{bride.firstName}</h3>
          <p className="family-block__spark">✦</p>
          <p className="family-block__relation">Daughter of</p>
          <p className="family-block__parents">
            {bride.parents.mother} &amp;<br />{bride.parents.father}
          </p>
        </article>

        <div className="reference-divider reference-divider--short">
          <span />
          <b>❦</b>
          <span />
        </div>

        <p className="family-page__closing">
          Raised with love,<br />
          united by destiny,<br />
          <em>together forever</em>
        </p>
        <p className="micro-heart" aria-hidden="true">♥</p>
      </div>
    </section>
  );
}
