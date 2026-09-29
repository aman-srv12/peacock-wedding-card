"use client";

import { useState } from "react";
import Image from "next/image";
import { wedding } from "../data/wedding";

export default function InvitationCover() {
  const [opening, setOpening] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { groom, bride } = wedding.couple;

  if (dismissed) return null;

  return (
    <button
      type="button"
      className={`invitation-cover${opening ? " invitation-cover--opening" : ""}`}
      onClick={() => setOpening(true)}
      onAnimationEnd={() => {
        if (opening) setDismissed(true);
      }}
      aria-label="Open Aman and Ananya's wedding invitation"
    >
      <span className="invitation-cover__top-rule" aria-hidden="true" />
      <span className="invitation-cover__petals" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>

      <span className="invitation-cover__corner" aria-hidden="true">
        <Image
          src="/peacock-corner.svg"
          alt=""
          width={560}
          height={560}
          priority
        />
      </span>

      <span className="invitation-cover__content">
        <span className="invitation-cover__mark" aria-hidden="true">✦</span>
        <span className="invitation-cover__eyebrow">You&apos;re invited</span>
        <span className="invitation-cover__names">
          {groom.firstName} <i>&amp;</i> {bride.firstName}
        </span>
        <span className="invitation-cover__date">{wedding.dateRange}</span>
        <span className="invitation-cover__place">{wedding.city}</span>

        <span className="invitation-cover__tap">
          <i aria-hidden="true" />
          Tap to open
          <i aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}
