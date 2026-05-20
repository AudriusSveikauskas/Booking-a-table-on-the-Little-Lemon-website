import { Link } from 'react-router-dom';

// Confirmation page shown after a reservation is submitted successfully.
function ConfirmedBooking() {
  return (
    <section className="confirmed section" aria-labelledby="confirmed-title">
      <div className="container">
        <h1 id="confirmed-title">Booking confirmed!</h1>
        <p>
          Thank you for choosing Little Lemon. Your table reservation has been
          confirmed — we look forward to welcoming you.
        </p>
        <Link to="/" className="button">Back to home</Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
