export function RoyalFrame({ children, className = "" }) {
  return (
    <div className={`royal-frame ${className}`.trim()}>
      <span className="royal-corner royal-corner--tl" aria-hidden="true" />
      <span className="royal-corner royal-corner--tr" aria-hidden="true" />
      <span className="royal-corner royal-corner--bl" aria-hidden="true" />
      <span className="royal-corner royal-corner--br" aria-hidden="true" />
      {children}
    </div>
  );
}

export function OrnamentDivider({ label }) {
  return (
    <div className="ornament-divider" aria-hidden={!label}>
      <span />
      <b>{label || "◆"}</b>
      <span />
    </div>
  );
}

export function InvitationSection({
  eyebrow,
  title,
  children,
  className = "",
}) {
  return (
    <section className={`invitation-section ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <h2 className="section-title">{title}</h2> : null}
      {children}
    </section>
  );
}

export function InvitationCard({ children, className = "" }) {
  return (
    <div className={`invitation-card ${className}`.trim()}>{children}</div>
  );
}

export function InvitationButton({
  children,
  href,
  variant = "primary",
  ...props
}) {
  const className = `invitation-button invitation-button--${variant}`;
  return href ? (
    <a className={className} href={href} {...props}>
      {children}
    </a>
  ) : (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  );
}
