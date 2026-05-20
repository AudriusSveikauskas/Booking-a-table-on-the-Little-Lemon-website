import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../api';

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
  const navigate = useNavigate();

  // Submits the reservation to the API and, on success, navigates to the
  // confirmation page.
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  }

  return (
    <section className="booking section" aria-labelledby="booking-title">
      <div className="container">
        <h1 id="booking-title">Reserve a table</h1>
        <p>Choose a date and time and we'll get your table ready.</p>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </section>
  );
}

export default BookingPage;
