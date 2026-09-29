import Image from "next/image";
import { wedding } from "../data/wedding";

export default function WeddingFestivities() {
  const sangeet = wedding.events.sangeet;

  return (
    <section className="festivities" aria-labelledby="festivities-title">
      <header className="festivities__header">
        <p className="festivities__eyebrow">Our Celebrations</p>
        <h2 id="festivities-title">Wedding Festivities</h2>
        <p className="festivities__intro">
          We can&apos;t wait to celebrate every special moment with you.
        </p>
      </header>

      <div className="festivities__grid">
        <article className="event-card event-card--sangeet">
          <div className="event-card__visual">
            <Image
              src="/sangeet-night.svg"
              alt="Original illustration of a royal evening Sangeet celebration"
              width={920}
              height={1120}
              sizes="(max-width: 720px) 92vw, 42vw"
            />
            <div className="event-card__visual-label" aria-hidden="true">
              <span>Music</span>
              <i>✦</i>
              <span>Dance</span>
            </div>
          </div>

          <div className="event-card__body">
            <p className="event-card__date">{sangeet.dateLabel}</p>
            <h3>{sangeet.name} Night</h3>
            <div className="event-card__divider" aria-hidden="true">
              <span />
              <i>✦</i>
              <span />
            </div>

            <p className="event-card__copy">
              An evening of music, laughter and dancing as we begin the
              celebrations together.
            </p>

            <dl className="event-card__details">
              <div>
                <dt>Time</dt>
                <dd>{sangeet.timeLabel}</dd>
              </div>
              <div>
                <dt>Dress Code</dt>
                <dd>{sangeet.dressCode}</dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
}
