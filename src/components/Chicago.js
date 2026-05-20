import ownersA from '../assets/images/mario-and-adrian-a.jpg';
import ownersB from '../assets/images/mario-and-adrian-b.jpg';

// "Chicago" / About band: the restaurant's backstory with owner photography.
function Chicago() {
  return (
    <section className="about section" aria-labelledby="about-title">
      <div className="container about__inner">
        <div className="about__content">
          <h2 id="about-title">Little Lemon</h2>
          <p className="about__subtitle">Chicago</p>
          <p>
            Founded by brothers Mario and Adrian, Little Lemon brings the
            flavours of the Mediterranean to the heart of Chicago. Mario’s
            passion for traditional recipes and Adrian’s eye for hospitality
            shape every plate and every visit.
          </p>
          <p>
            What started as a small family kitchen has grown into a beloved
            neighbourhood restaurant — but the recipes, and the welcome, remain
            just as authentic.
          </p>
        </div>
        <div className="about__images">
          <img src={ownersA} alt="Mario and Adrian preparing food" />
          <img src={ownersB} alt="Mario and Adrian in the restaurant" />
        </div>
      </div>
    </section>
  );
}

export default Chicago;
