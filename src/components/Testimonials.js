// CustomersSay band: social proof through star ratings and short reviews.
const reviews = [
  { id: 1, name: 'Maria S.', rating: 5, text: 'Best Mediterranean food in Chicago. The booking flow was effortless!' },
  { id: 2, name: 'James T.', rating: 4, text: 'Lovely atmosphere and the lemon dessert is unforgettable.' },
  { id: 3, name: 'Tilly P.', rating: 5, text: 'I booked for our anniversary and the staff made it special.' },
  { id: 4, name: 'Andre L.', rating: 5, text: 'Fresh ingredients, friendly service, will come back.' },
];

function Testimonials() {
  return (
    <section className="testimonials section" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className="section__title">What our customers say</h2>

        <ul className="testimonials__grid">
          {reviews.map((review) => (
            <li key={review.id} className="card testimonial-card">
              <p
                className="testimonial-card__rating"
                aria-label={`Rated ${review.rating} out of 5 stars`}
              >
                <span aria-hidden="true">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
              </p>
              <p className="testimonial-card__name">{review.name}</p>
              <p className="testimonial-card__text">{review.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
