"use client";

import { useState } from "react";
import { wedding } from "../data/wedding";

export default function RsvpSection() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("accept");

  const submitRsvp = (event) => {
    event.preventDefault();

    const response =
      attending === "accept" ? "Joyfully accepts" : "Regretfully declines";

    const message = [
      "Wedding RSVP — Aman & Ananya",
      `Name: ${name.trim() || "Guest"}`,
      `Response: ${response}`,
      "7 December 2026 · Lucknow",
    ].join("\n");

    const url = `https://wa.me/${wedding.rsvp.aman.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="invite-page rsvp-page" aria-labelledby="rsvp-title">
      <div className="invite-page__scene rsvp-page__scene" aria-hidden="true" />

      <div className="rsvp-arch">
        <span className="rsvp-arch__lobe rsvp-arch__lobe--left" aria-hidden="true" />
        <span className="rsvp-arch__lobe rsvp-arch__lobe--right" aria-hidden="true" />

        <div className="rsvp-arch__content">
          <p className="rsvp-arch__initials">A <i /> A</p>
          <h2 id="rsvp-title">RSVP</h2>
          <p className="micro-heart" aria-hidden="true">♥</p>

          <form className="rsvp-form" onSubmit={submitRsvp}>
            <label>
              <span>Full Name</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                autoComplete="name"
              />
            </label>

            <fieldset>
              <legend>Will you be attending?</legend>
              <div className="rsvp-form__choices">
                <button
                  type="button"
                  className={attending === "accept" ? "is-selected" : ""}
                  onClick={() => setAttending("accept")}
                  aria-pressed={attending === "accept"}
                >
                  Joyfully Accept
                </button>
                <button
                  type="button"
                  className={attending === "decline" ? "is-selected" : ""}
                  onClick={() => setAttending("decline")}
                  aria-pressed={attending === "decline"}
                >
                  Regretfully Decline
                </button>
              </div>
            </fieldset>

            <button className="rsvp-form__submit" type="submit">
              Send RSVP
            </button>
          </form>

          <p className="rsvp-arch__note">
            Celebrate this new chapter with us.
          </p>

          <div className="rsvp-map" aria-label="Ritz Resort location">
            <div className="rsvp-map__roads" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="rsvp-map__pin" aria-hidden="true">●</div>
            <div className="rsvp-map__label">
              <strong>{wedding.venue.name}</strong>
              <span>{wedding.city}, {wedding.state}</span>
            </div>
          </div>
        </div>
      </div>

      <a
        className="rsvp-page__directions"
        href={wedding.venue.mapsUrl}
        target="_blank"
        rel="noreferrer"
      >
        <span aria-hidden="true">⌖</span> Get Directions
      </a>
    </section>
  );
}
