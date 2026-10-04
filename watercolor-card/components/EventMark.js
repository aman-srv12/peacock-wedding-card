export default function EventMark({ type }) {
  const common = {
    viewBox: "0 0 120 120",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (type === "sangeet") {
    return (
      <svg {...common}>
        <path d="M44 31v47c0 10-7 18-17 18-8 0-14-5-14-12 0-8 7-13 16-13 5 0 10 2 15 5V43l43-10v36c0 10-7 18-17 18-8 0-14-5-14-12 0-8 7-13 16-13 6 0 11 2 15 5V24L44 31Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 24c7 4 12 9 15 16M88 79c7 2 12 6 16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  if (type === "haldi") {
    return (
      <svg {...common}>
        <path d="M30 68c7 18 18 27 30 27s23-9 30-27H30Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M38 68c2-15 10-23 22-23s20 8 22 23" stroke="currentColor" strokeWidth="3"/>
        <circle cx="60" cy="35" r="8" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M60 18v8M60 44v9M43 35h9M68 35h9M48 23l6 6M72 23l-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M23 74c9 3 15 7 20 14M97 74c-9 3-15 7-20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  if (type === "varmala") {
    return (
      <svg {...common}>
        <path d="M26 30c11 2 22 11 34 28 12-17 23-26 34-28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M24 30c0 25 10 46 36 63 26-17 36-38 36-63" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <g fill="currentColor">
          <circle cx="30" cy="45" r="3"/><circle cx="36" cy="59" r="3"/><circle cx="45" cy="73" r="3"/>
          <circle cx="90" cy="45" r="3"/><circle cx="84" cy="59" r="3"/><circle cx="75" cy="73" r="3"/>
          <circle cx="60" cy="87" r="3"/>
        </g>
      </svg>
    );
  }

  if (type === "reception") {
    return (
      <svg {...common}>
        <path d="M31 27h25l-4 38c-1 9-6 15-14 15s-13-6-14-15l-4-38h11Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M38 80v14M27 95h22" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M68 32h25l-4 33c-1 9-6 15-14 15s-13-6-14-15l-4-33h11Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M75 80v14M64 95h22M25 51c9 4 18 4 28 0M62 54c9 4 18 4 28 0" stroke="currentColor" strokeWidth="2"/>
        <path d="M55 24c4-7 12-9 17-3 5-6 13-4 17 3-1 8-8 12-17 18-9-6-16-10-17-18Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    );
  }

  if (type === "pheras") {
    return (
      <svg {...common}>
        <path d="M35 91h50l-7 10H42L35 91Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M60 91c-15-9-17-22-7-33 2 9 7 15 13 20 0-14 9-24 5-40 18 13 24 32 13 46-7 9-14 11-24 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M60 87c-7-6-7-13-2-20 2 5 5 8 8 11 0-6 3-11 3-17 8 7 9 15 4 21-3 4-7 6-13 5Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M60 94c-20-13-30-29-30-48 15 1 25 8 30 20 5-12 15-19 30-20 0 19-10 35-30 48Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M60 38V94M60 61c-8-9-15-14-23-16M60 72c9-9 16-14 24-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M30 30c10 2 19 7 26 15M90 30c-10 2-19 7-26 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
