import Image from "next/image";

export default function GaneshWelcome() {
  return (
    <section className="ganesh-welcome" aria-labelledby="ganesh-welcome-title">
      <div className="peacock-page__frame" aria-hidden="true" />
      <div className="peacock-page__feather peacock-page__feather--ganesh" aria-hidden="true">
        <Image src="/peacock-feather.svg" alt="" width={190} height={450} />
      </div>

      <div className="ganesh-welcome__content">
        <p className="ganesh-welcome__eyebrow">With divine blessings</p>

        <div className="ganesh-welcome__mark" aria-hidden="true">
          <Image src="/ganesh-line-art.svg" alt="" width={240} height={260} />
        </div>

        <p className="ganesh-welcome__invocation">श्री गणेशाय नमः</p>
        <h2 id="ganesh-welcome-title" className="ganesh-welcome__title">
          शुभारम्भ
        </h2>

        <div className="peacock-divider peacock-divider--ganesh" aria-hidden="true">
          <span />
          <b>✦</b>
          <span />
        </div>

        <p className="ganesh-welcome__verse">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
        </p>

        <p className="ganesh-welcome__blessing">
          With the blessings of Lord Ganesha, our celebrations begin.
        </p>
      </div>
    </section>
  );
}
