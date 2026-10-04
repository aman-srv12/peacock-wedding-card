import Image from "next/image";

const storyCards = [
  {
    src: "/story-caricature-1.svg",
    alt: "Watercolor caricature placeholder of Aman and Ananya meeting",
    caption: "Every journey led us here",
    rotate: "story-card--left",
  },
  {
    src: "/story-caricature-2.svg",
    alt: "Watercolor caricature placeholder of Aman and Ananya travelling",
    caption: "From adventures to forever",
    rotate: "story-card--right",
  },
  {
    src: "/story-caricature-3.svg",
    alt: "Watercolor caricature placeholder of Aman and Ananya celebrating",
    caption: "Our best adventure begins now",
    rotate: "story-card--left-soft",
  },
];

export default function StorySection() {
  return (
    <section className="story invite-section" aria-labelledby="story-title">
      <div className="story__background" aria-hidden="true" />
      <div className="invite-section__inner story__inner">
        <p className="eyebrow">A chapter written by destiny</p>
        <h2 id="story-title" className="section-title">Our Story</h2>
        <div className="ornament">❦</div>

        <div className="story__cards">
          {storyCards.map((card) => (
            <figure className={`story-card ${card.rotate}`} key={card.src}>
              <div className="story-card__image">
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={760}
                  height={940}
                  sizes="(max-width: 720px) 82vw, 28vw"
                />
              </div>
              <figcaption>{card.caption}</figcaption>
            </figure>
          ))}
        </div>

        <p className="story__quote">
          “From that first conversation to a lifetime of adventures.”
        </p>
      </div>
    </section>
  );
}
