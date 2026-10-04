import Image from "next/image";
import { storyCards } from "../data/content";

export default function StorySection() {
  return (
    <>
      <section className="invite-page story-intro" aria-labelledby="story-title">
        <div className="invite-page__scene story-intro__scene" aria-hidden="true" />
        <div className="story-intro__content">
          <p className="caps-line caps-line--gold">A chapter written by destiny</p>
          <h2 id="story-title">Our Story</h2>
          <p className="story-intro__ornament" aria-hidden="true">❦ ❦</p>
          <p className="story-intro__copy">
            Some chapters are written by destiny.
          </p>
          <p className="micro-heart" aria-hidden="true">♥</p>
        </div>
      </section>

      {storyCards.map((card, index) => (
        <section className="story-sheet" key={`${card.src}-${index}`} aria-label={card.caption}>
          <div className="story-sheet__paper">
            <span className="story-sheet__tape" aria-hidden="true" />
            <div className="story-sheet__photo">
              <Image
                src={card.src}
                alt={card.alt}
                width={760}
                height={940}
                sizes="(max-width: 562px) 90vw, 500px"
                priority={index === 0}
              />

              {index === 0 ? (
                <div className="story-sheet__overlay">
                  <p className="story-sheet__script">our story ♡</p>
                  <div className="story-sheet__milestones">
                    <div><span>♡</span><p><strong>The beginning</strong><small>A simple hello became endless conversations.</small></p></div>
                    <div><span>◌</span><p><strong>Connection</strong><small>We found comfort in the little things.</small></p></div>
                    <div><span>∞</span><p><strong>Forever &amp; always</strong><small>And now we get to write the rest together.</small></p></div>
                  </div>
                </div>
              ) : null}

              {index === 1 ? (
                <div className="story-sheet__overlay story-sheet__overlay--right">
                  <p className="story-sheet__script">Our Story</p>
                  <p className="story-sheet__subscript">in the making</p>
                  <div className="story-sheet__milestones story-sheet__milestones--right">
                    <div><span>◉</span><p><strong>Flashbacks</strong><small>The small moments became the best memories.</small></p></div>
                    <div><span>♡</span><p><strong>Moments that shaped us</strong><small>Laughter, adventures and everything between.</small></p></div>
                    <div><span>✦</span><p><strong>A journey of two</strong><small>Different chapters. The same love.</small></p></div>
                    <div><span>∞</span><p><strong>Still writing it</strong><small>The best part is what comes next.</small></p></div>
                  </div>
                </div>
              ) : null}
            </div>
            <p className="story-sheet__caption">“{card.caption}” ♡</p>
          </div>
        </section>
      ))}

      <section className="invite-page story-outro">
        <div className="invite-page__scene story-intro__scene" aria-hidden="true" />
        <div className="story-outro__content">
          <p>“From that first conversation to a lifetime of adventures”</p>
          <span aria-hidden="true">♥</span>
        </div>
      </section>
    </>
  );
}
