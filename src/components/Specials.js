import specials from '../data/specials';

// Specials band: loops over the specials data and renders a card per dish.
function Specials() {
  return (
    <section className="specials section" aria-labelledby="specials-title">
      <div className="container">
        <div className="specials__header">
          <h2 id="specials-title">This week's specials!</h2>
          <a className="button" href="/menu">Online Menu</a>
        </div>

        <ul className="specials__grid">
          {specials.map((dish) => (
            <li key={dish.id} className="card special-card">
              <img
                className="special-card__image"
                src={dish.image}
                alt={dish.title}
              />
              <div className="special-card__body">
                <div className="special-card__heading">
                  <h3>{dish.title}</h3>
                  <span className="price">{dish.price}</span>
                </div>
                <p>{dish.description}</p>
                <a className="special-card__order" href="/order">
                  Order a delivery
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Specials;
