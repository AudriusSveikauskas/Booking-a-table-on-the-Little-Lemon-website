// The reservations page. The booking form and its state are added in the
// following exercises; for now it establishes the routed page and heading.
function BookingPage() {
  return (
    <section className="booking section" aria-labelledby="booking-title">
      <div className="container">
        <h1 id="booking-title">Reserve a table</h1>
        <p>Choose a date and time and we'll get your table ready.</p>
      </div>
    </section>
  );
}

export default BookingPage;
