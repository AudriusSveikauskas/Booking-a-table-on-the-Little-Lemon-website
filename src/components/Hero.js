import { Link } from 'react-router-dom';
import heroImage from '../assets/images/restaurant-food.jpg';

// CallToAction / hero band. Introduces the restaurant and drives the primary
// action — reserving a table — with a prominent button.
function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">Little Lemon</h1>
          <p className="hero__subtitle">Chicago</p>
          <p className="hero__text">
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="button">Reserve a table</Link>
        </div>
        <img
          className="hero__image"
          src={heroImage}
          alt="A plate of Little Lemon's Mediterranean food"
        />
      </div>
    </section>
  );
}

export default Hero;
