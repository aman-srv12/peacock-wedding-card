import { wedding } from "../data/wedding";

const eventTaglines = {
  sangeet: "An evening of music, laughter & dancing",
  haldi: "A morning of colour, flowers & blessings",
  varmala: "Garlands, promises & the beginning of forever",
  reception: "Dinner, celebration & togetherness",
  pheras: "Sacred vows around the fire",
  vidaai: "A tender morning of blessings & new beginnings",
};

export default function ScheduleSection() {
  return (
    <section className="schedule invite-section" aria-labelledby="schedule-title">
      <div className="schedule__background" aria-hidden="true" />
      <div className="invite-section__inner schedule__inner">
        <header className="schedule__header">
          <p className="eyebrow">A celebration of tradition, love &amp; family</p>
          <h2 id="schedule-title" className="section-title">Schedule of Events</h2>
          <div className="ornament">♥</div>
        </header>

        <div className="schedule__events">
          {wedding.events.map((event, index) => (
            <article
              className={`schedule-card schedule-card--${event.id}`}
              key={event.id}
            >
              <div className="schedule-card__ornament" aria-hidden="true">
                {index % 2 === 0 ? "❦" : "✦"}
              </div>

              <p className="schedule-card__date">{event.dateLabel}</p>
              <div className="schedule-card__rule" aria-hidden="true">
                <span />
                <i>♦</i>
                <span />
              </div>

              <h3>{event.name}</h3>
              <p className="schedule-card__tagline">{eventTaglines[event.id]}</p>

              <div className="schedule-card__time">{event.timeLabel}</div>
              {event.note ? <p className="schedule-card__note">{event.note}</p> : null}

              {event.dressCode ? (
                <div className="schedule-card__meta">
                  <span>Dress Code</span>
                  <strong>{event.dressCode}</strong>
                </div>
              ) : null}

              <div className="schedule-card__meta">
                <span>Venue</span>
                <strong>{wedding.venue.name}</strong>
              </div>

              <a
                className="schedule-card__address"
                href={wedding.venue.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                {wedding.venue.address} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
