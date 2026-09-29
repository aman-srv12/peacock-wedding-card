import Image from "next/image";

export default function GaneshWelcome() {
  return (
    <section className="ganesh-welcome" aria-labelledby="ganesh-welcome-title">
      <div className="page-top-rule" aria-hidden="true" />
      <div className="page-petals" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className="ganesh-welcome__corner" aria-hidden="true">
        <Image src="/peacock-corner.svg" alt="" width={560} height={560} />
      </div>

      <div className="ganesh-welcome__content">
        <p className="ganesh-welcome__eyebrow">With divine blessings</p>

        <div className="ganesh-welcome__mark" aria-hidden="true">
          <Image
            src="/ganesh-line-art.svg"
            alt=""
            width={240}
            height={260}
            priority
          />
        </div>

        <p className="ganesh-welcome__invocation">श्री गणेशाय नमः</p>

        <h1 id="ganesh-welcome-title" className="ganesh-welcome__title">
          शुभारम्भ
        </h1>

        <div className="fine-divider" aria-hidden="true">
          <span />
          <i>✦</i>
          <span />
        </div>

        <p className="ganesh-welcome__verse">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
        </p>

        <p className="ganesh-welcome__blessing">
          With the blessings of Lord Ganesha,
          <br className="desktop-break" /> our celebration begins.
        </p>

        <span className="ganesh-welcome__continue" aria-hidden="true">
          Scroll to continue
          <i />
        </span>
      </div>
    </section>
  );
}
