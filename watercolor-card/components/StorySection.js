import Image from "next/image";
import { storyCards } from "../data/content";

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
            <figure className={`story-card ${card.rotateClass}`} key={card.src}>
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
