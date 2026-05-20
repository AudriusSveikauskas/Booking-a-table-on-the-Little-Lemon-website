import { useReducer } from 'react';
import BookingForm from '../components/BookingForm';

// The set of times Little Lemon can offer. Lifted into this page (the stateful
// parent of BookingForm) so the available times can be shared and updated as
// the user interacts with the form.
const DEFAULT_TIMES = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

// Creates the initial available-times state.
export function initializeTimes() {
  return DEFAULT_TIMES;
}

// Reducer that recomputes the available times from the dispatched action.
// For now it returns the same list regardless of the selected date; it is
// connected to the live API in a later exercise.
export function updateTimes(state, action) {
  switch (action.type) {
    case 'update':
      return DEFAULT_TIMES;
    default:
      return state;
  }
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);

  return (
    <section className="booking section" aria-labelledby="booking-title">
      <div className="container">
        <h1 id="booking-title">Reserve a table</h1>
        <p>Choose a date and time and we'll get your table ready.</p>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </section>
  );
}

export default BookingPage;
