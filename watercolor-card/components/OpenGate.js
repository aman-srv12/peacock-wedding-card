"use client";

import { useEffect, useState } from "react";

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
      <div className="open-gate__wash" aria-hidden="true" />
      <div className="open-gate__content">
        <div className="monogram" aria-label="A and A">
          <span>A</span>
          <i />
          <span>A</span>
        </div>
        <p>Aman &amp; Ananya</p>
        <button type="button" onClick={() => setOpen(true)}>
          Tap to Open
        </button>
      </div>
    </div>
  );
}
