"use client";

import { useEffect, useMemo, useState } from "react";

function getRemaining(target) {
  const distance = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance / 3600000) % 24),
    minutes: Math.floor((distance / 60000) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

export default function Countdown({ target }) {
  const initial = useMemo(() => getRemaining(target), [target]);
  const [remaining, setRemaining] = useState(initial);

  useEffect(() => {
    const update = () => setRemaining(getRemaining(target));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const items = [
    ["Days", remaining.days],
    ["Hrs", remaining.hours],
    ["Mins", remaining.minutes],
    ["Secs", remaining.seconds],
  ];

  return (
    <div className="countdown" aria-label="Countdown to Varmala">
      {items.map(([label, value]) => (
        <div className="countdown__item" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
