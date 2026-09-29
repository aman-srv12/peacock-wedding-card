export default function GaneshWelcome() {
  return (
    <section className="ganesh-welcome" aria-labelledby="ganesh-welcome-title">
      <div className="ganesh-welcome__glow" aria-hidden="true" />

      <div className="ganesh-welcome__content">
        <p className="ganesh-welcome__om" aria-hidden="true">ॐ</p>

        <div className="ganesh-welcome__mark" aria-hidden="true">
          <img src="/ganesh-line-art.svg" alt="" />
        </div>

        <p className="ganesh-welcome__invocation">श्री गणेशाय नमः</p>

        <h1 id="ganesh-welcome-title" className="ganesh-welcome__title">
          शुभारम्भ
        </h1>

        <div className="ganesh-welcome__divider" aria-hidden="true">
          <span />
          <i>◆</i>
          <span />
        </div>

        <p className="ganesh-welcome__verse">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ
        </p>
        <p className="ganesh-welcome__blessing">
          With the blessings of Lord Ganesha, our celebrations begin.
        </p>

        <span className="ganesh-welcome__scroll" aria-hidden="true">
          <i />
        </span>
      </div>
    </section>
  );
}
