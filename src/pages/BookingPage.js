import BookingForm from '../components/BookingForm';

// The reservations page. It wraps the BookingForm with surrounding content.
// The available-times state is lifted into this page in the next exercise;
// for now a static list of times is provided to the form.
const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function BookingPage() {
  return (
    <section className="booking section" aria-labelledby="booking-title">
      <div className="container">
        <h1 id="booking-title">Reserve a table</h1>
        <p>Choose a date and time and we'll get your table ready.</p>
        <BookingForm availableTimes={initialTimes} />
      </div>
    </section>
  );
}

export default BookingPage;
