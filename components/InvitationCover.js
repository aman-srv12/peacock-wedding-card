"use client";

import { useEffect, useRef, useState } from "react";

const INTRO_VIDEO =
  "https://shubhinvite.vercel.app/themes/peacock/intro.mp4";

export default function InvitationCover() {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [finishing, setFinishing] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [dismissed]);

  const openInvitation = async () => {
    if (started || finishing) return;

    const video = videoRef.current;
    if (!video) return;

    setStarted(true);
    video.currentTime = 0;

    try {
      await video.play();
    } catch {
      setStarted(false);
    }
  };

  if (dismissed) return null;

  return (
    <div
      className={`invitation-intro${started ? " invitation-intro--playing" : ""}${finishing ? " invitation-intro--finishing" : ""}`}
      onAnimationEnd={(event) => {
        if (
          finishing &&
          event.currentTarget === event.target &&
          event.animationName === "intro-fade-out"
        ) {
          setDismissed(true);
        }
      }}
    >
      <video
        ref={videoRef}
        className="invitation-intro__video"
        src={INTRO_VIDEO}
        preload="auto"
        playsInline
        onEnded={() => setFinishing(true)}
      />

      <button
        type="button"
        className="invitation-intro__open"
        onClick={openInvitation}
        disabled={started}
        aria-label="Play the invitation opening animation"
      >
        <span className="invitation-intro__tap">Tap to open</span>
      </button>
    </div>
  );
}
