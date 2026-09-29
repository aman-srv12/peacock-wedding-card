"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function InvitationCover() {
  const [opening, setOpening] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <button
      type="button"
      className={`invitation-cover${opening ? " invitation-cover--opening" : ""}`}
      onClick={() => {
        if (!opening) setOpening(true);
      }}
      onAnimationEnd={(event) => {
        if (
          opening &&
          event.currentTarget === event.target &&
          event.animationName === "cover-exit"
        ) {
          setDismissed(true);
        }
      }}
      aria-label="Open Aman and Ananya's wedding invitation"
    >
      <span className="invitation-cover__wash" aria-hidden="true" />
      <span className="invitation-cover__frame" aria-hidden="true" />

      <span className="invitation-cover__feather invitation-cover__feather--left" aria-hidden="true">
        <Image src="/peacock-feather.svg" alt="" width={180} height={430} priority />
      </span>
      <span className="invitation-cover__feather invitation-cover__feather--right" aria-hidden="true">
        <Image src="/peacock-feather.svg" alt="" width={180} height={430} />
      </span>

      <span className="invitation-cover__content">
        <span className="invitation-cover__crest" aria-hidden="true">
          <Image src="/peacock-mark.svg" alt="" width={42} height={42} priority />
        </span>

        <span className="invitation-cover__eyebrow">You&apos;re invited</span>

        <span className="invitation-cover__ornament" aria-hidden="true">
          <i />
          <b>✦</b>
          <i />
        </span>

        <span className="invitation-cover__tap">
          <b aria-hidden="true">✧</b>
          Tap to open
          <b aria-hidden="true">✧</b>
        </span>
      </span>
    </button>
  );
}
