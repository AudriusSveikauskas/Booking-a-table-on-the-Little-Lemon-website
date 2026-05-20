import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Confirmation page shown after a reservation is submitted successfully.
function ConfirmedBooking() {
  const headingRef = useRef(null);

  // UX/accessibility revision: move focus to the confirmation heading on mount
  // so the success of the action is announced to screen-reader users and is
  // immediately visible to keyboard users (Nielsen heuristic: visibility of
  // system status).
  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <section className="confirmed section" aria-labelledby="confirmed-title">
      <div className="container">
        <h1 id="confirmed-title" ref={headingRef} tabIndex={-1}>
          Booking confirmed!
        </h1>
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
