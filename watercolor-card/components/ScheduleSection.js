import { eventLayouts, eventTaglines } from "../data/content";
import { wedding } from "../data/wedding";
import EventMark from "./EventMark";

export default function ScheduleSection() {
  return (
    <>
      <section className="invite-page schedule-intro" aria-labelledby="schedule-title">
        <div className="invite-page__scene schedule-intro__scene" aria-hidden="true" />
        <div className="schedule-intro__content">
          <p className="schedule-intro__ornament" aria-hidden="true">❦</p>
          <h2 id="schedule-title">Schedule of Events</h2>
          <p className="micro-heart" aria-hidden="true">♥</p>
          <p className="caps-line">
            A celebration of tradition,<br />love &amp; family
          </p>
        </div>
      </section>

      {wedding.events.map((event) => {
        const layout = eventLayouts[event.id] || "framed";

        return (
          <section
            className={`invite-page event-page event-page--${event.id} event-page--${layout}`}
            key={event.id}
            aria-labelledby={`event-${event.id}`}
          >
            <div className="invite-page__scene event-page__scene" aria-hidden="true" />

            <article className={`event-sheet event-sheet--${layout}`}>
              <span className="event-sheet__corner event-sheet__corner--tl" aria-hidden="true">❦</span>
              <span className="event-sheet__corner event-sheet__corner--tr" aria-hidden="true">❦</span>
              <span className="event-sheet__corner event-sheet__corner--bl" aria-hidden="true">❦</span>
              <span className="event-sheet__corner event-sheet__corner--br" aria-hidden="true">❦</span>

              <div className="event-sheet__inner">
                <p className="event-sheet__date">{event.dateLabel}</p>
                <div className="event-sheet__rule" aria-hidden="true">
                  <span />
                  <i>♦</i>
                  <span />
                </div>

                <div className="event-sheet__mark">
                  <EventMark type={event.id} />
                </div>

                <h3 id={`event-${event.id}`}>{event.name}</h3>
                <p className="event-sheet__tagline">{eventTaglines[event.id]}</p>

                <div className="event-sheet__rule event-sheet__rule--small" aria-hidden="true">
                  <span />
                  <i>♥</i>
                  <span />
                </div>

                <p className="event-sheet__time">{event.timeLabel}</p>

                {event.note ? (
                  <p className="event-sheet__note">{event.note}</p>
                ) : null}

                {event.dressCode ? (
                  <div className="event-sheet__detail">
                    <span>Dress Code</span>
                    <strong>{event.dressCode}</strong>
                  </div>
                ) : null}

                <div className="event-sheet__detail">
                  <span>Venue</span>
                  <strong>{wedding.venue.name}</strong>
                </div>

                <a
                  className="event-sheet__address"
                  href={wedding.venue.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {wedding.venue.address}
                  <small aria-hidden="true">↗</small>
                </a>

                <div className="event-sheet__bottom-flourish" aria-hidden="true">❦</div>
              </div>
            </article>
          </section>
        );
      })}
    </>
  );
}
