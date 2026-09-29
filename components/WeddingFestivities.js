import Image from "next/image";
import { wedding } from "../data/wedding";

export default function WeddingFestivities() {
  const sangeet = wedding.events.sangeet;
  const haldi = wedding.events.haldi;

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
        <article className="event-card event-card--sangeet event-card--poster">
          <div className="event-poster__art event-poster__art--sangeet">
            <div className="event-poster__floral-roof" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <Image
              src="/sangeet-couple.svg"
              alt="Stylized Indian couple dressed for a Sangeet celebration"
              width={760}
              height={980}
              sizes="(max-width: 760px) 88vw, 39vw"
            />

            <div className="event-poster__art-caption" aria-hidden="true">
              <span>Music</span>
              <i>✦</i>
              <span>Dance</span>
              <i>✦</i>
              <span>Celebration</span>
            </div>
          </div>

          <div className="event-poster__panel event-poster__panel--sangeet">
            <div className="event-poster__frame">
              <p className="event-card__date">{sangeet.dateLabel}</p>
              <p className="event-poster__invite">You are cordially invited to the</p>
              <h3>{sangeet.name} Night</h3>

              <div className="event-card__divider" aria-hidden="true">
                <span />
                <i>✦</i>
                <span />
              </div>

              <p className="event-card__copy">
                An evening of melody, dance and celebration beneath
                peacock-blue skies.
              </p>

              <dl className="event-card__details event-card__details--poster">
                <div>
                  <dt>Time</dt>
                  <dd>{sangeet.timeLabel}</dd>
                </div>
                <div>
                  <dt>Dress Code</dt>
                  <dd>{sangeet.dressCode}</dd>
                </div>
                <div>
                  <dt>Venue</dt>
                  <dd>{wedding.venue.name}</dd>
                </div>
                <div className="event-card__detail--address">
                  <dt>Address</dt>
                  <dd>
                    <a
                      href={wedding.venue.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${wedding.venue.name} in Google Maps`}
                    >
                      {wedding.venue.address}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </article>

        <article className="event-card event-card--haldi event-card--poster">
          <div className="event-poster__art event-poster__art--haldi">
            <div className="event-poster__marigold-roof" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <Image
              src="/haldi-couple.svg"
              alt="Stylized Indian couple dressed for a Haldi ceremony"
              width={760}
              height={980}
              sizes="(max-width: 760px) 88vw, 39vw"
            />

            <div className="event-poster__art-caption event-poster__art-caption--haldi" aria-hidden="true">
              <span>Haldi</span>
              <i>✦</i>
              <span>Flowers</span>
              <i>✦</i>
              <span>Blessings</span>
            </div>
          </div>

          <div className="event-poster__panel event-poster__panel--haldi">
            <div className="event-poster__frame event-poster__frame--haldi">
              <p className="event-card__date">{haldi.dateLabel}</p>
              <p className="event-poster__invite">We cordially invite you to the</p>
              <h3>{haldi.name} Ceremony</h3>

              <div className="event-card__divider" aria-hidden="true">
                <span />
                <i>✦</i>
                <span />
              </div>

              <p className="event-card__copy">
                A morning of colour, flowers, laughter and blessings as the
                wedding festivities glow golden.
              </p>

              <dl className="event-card__details event-card__details--poster">
                <div>
                  <dt>Time</dt>
                  <dd>{haldi.timeLabel}</dd>
                </div>
                <div>
                  <dt>Dress Code</dt>
                  <dd>{haldi.dressCode}</dd>
                </div>
                <div>
                  <dt>Venue</dt>
                  <dd>{wedding.venue.name}</dd>
                </div>
                <div className="event-card__detail--address">
                  <dt>Address</dt>
                  <dd>
                    <a
                      href={wedding.venue.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${wedding.venue.name} in Google Maps`}
                    >
                      {wedding.venue.address}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
