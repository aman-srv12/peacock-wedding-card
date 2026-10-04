import { wedding } from "../data/wedding";

export default function FamilySection() {
  const { groom, bride } = wedding.couple;

  return (
    <section className="family invite-section" aria-labelledby="family-title">
      <div className="family__background" aria-hidden="true" />
      <div className="invite-section__inner family__inner">
        <p className="family__lead">Two families. One promise.</p>
        <div className="ornament">♥</div>
        <h2 id="family-title" className="section-title">Introducing the families</h2>

        <div className="family__grid">
          <article className="family__person">
            <p className="eyebrow">Groom</p>
            <h3>{groom.firstName}</h3>
            <span className="family__spark">✦</span>
            <p>Son of</p>
            <strong>{groom.parents.mother} &amp; {groom.parents.father}</strong>
          </article>

          <div className="family__monogram monogram" aria-hidden="true">
            <span>A</span>
            <i />
            <span>A</span>
          </div>

          <article className="family__person">
            <p className="eyebrow">Bride</p>
            <h3>{bride.firstName}</h3>
            <span className="family__spark">✦</span>
            <p>Daughter of</p>
            <strong>{bride.parents.mother} &amp; {bride.parents.father}</strong>
          </article>
        </div>

        <p className="family__closing">
          Raised with love,<br />
          united by destiny,<br />
          <span>together forever</span>
        </p>
      </div>
    </section>
  );
}
