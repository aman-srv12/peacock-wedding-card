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
    <section className="rsvp invite-section" aria-labelledby="rsvp-title">
      <div className="rsvp__wash" aria-hidden="true" />
      <div className="invite-section__inner rsvp__inner">
        <div className="rsvp__monogram monogram" aria-hidden="true">
          <span>A</span>
          <i />
          <span>A</span>
        </div>

        <div className="rsvp__shape paper-card">
          <p className="eyebrow">Aman &amp; Ananya</p>
          <h2 id="rsvp-title" className="section-title">RSVP</h2>
          <div className="ornament">♥</div>

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
              Send RSVP on WhatsApp
            </button>
          </form>

          <p className="rsvp__note">
            Celebrate this new chapter with us.
          </p>
        </div>

        <div className="venue-card">
          <p className="eyebrow">Wedding Venue</p>
          <h3>{wedding.venue.name}</h3>
          <p>{wedding.venue.address}</p>
          <a href={wedding.venue.mapsUrl} target="_blank" rel="noreferrer">
            <span aria-hidden="true">📍</span> Get Directions
          </a>
        </div>

        <p className="rsvp__closing script-title">
          With love, Aman &amp; Ananya
        </p>
      </div>
    </section>
  );
}
