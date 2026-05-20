import { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import { fetchAPI } from '../api';

// Creates the initial available-times state from the API, using today's date.
export function initializeTimes() {
  return fetchAPI(new Date());
}

// Reducer that asks the API for the available times for the selected date.
export function updateTimes(state, action) {
  switch (action.type) {
    case 'update':
      return fetchAPI(new Date(action.date));
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
