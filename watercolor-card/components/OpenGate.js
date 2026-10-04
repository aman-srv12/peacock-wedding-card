"use client";

import { useEffect, useState } from "react";
import Monogram from "./Monogram";

export default function OpenGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (open) return null;

  return (
    <div className="open-gate" role="dialog" aria-label="Open wedding invitation">
      <div className="open-gate__card">
        <div className="open-gate__scene" aria-hidden="true" />
        <div className="open-gate__content">
          <Monogram className="open-gate__monogram" />
          <p className="open-gate__names">Aman &amp; Ananya</p>
          <button type="button" onClick={() => setOpen(true)}>
            Tap to Open
          </button>
        </div>
      </div>
    </div>
  );
}
