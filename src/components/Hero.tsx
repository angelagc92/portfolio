
export default function Hero() {
  return (
    <section className="hero-section container" id="hero">
      <div className="hero-main">

        <div className="hero-copy">
          <span className="eyebrow">
            FULL-STACK DEVELOPER
          </span>

          <h1 className="hero-title">
            <span>Portfolio</span>
            <span>Angela Garcia</span>
          </h1>
        </div>

        <div
          className="hero-visual"
          aria-hidden="true"
        />

      </div>

      <a className="hero-scroll" href="#about">
        <span /> SCROLL TO DISCOVER
      </a>
    </section>
  );
}
