import Image from "next/image";

export default function GaneshWelcome() {
  return (
    <section className="ganesh-welcome" aria-labelledby="ganesh-welcome-title">
      <div className="ganesh-welcome__glow" aria-hidden="true" />

      <div className="ganesh-welcome__content">
        <p className="ganesh-welcome__om" aria-hidden="true">ॐ</p>

        <div className="ganesh-welcome__mark" aria-hidden="true">
          <Image src="/ganesh-line-art.svg" alt="" width={240} height={260} priority />
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
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
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
