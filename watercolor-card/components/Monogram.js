export default function Monogram({ className = "" }) {
  return (
    <div className={`aa-monogram ${className}`.trim()} aria-label="A and A monogram">
      <span className="aa-monogram__flourish aa-monogram__flourish--top">✦</span>
      <div className="aa-monogram__letters">
        <span>A</span>
        <i />
        <span>A</span>
      </div>
      <span className="aa-monogram__leaf aa-monogram__leaf--left">❧</span>
      <span className="aa-monogram__leaf aa-monogram__leaf--right">❧</span>
      <span className="aa-monogram__flourish aa-monogram__flourish--bottom">❦</span>
    </div>
  );
}
