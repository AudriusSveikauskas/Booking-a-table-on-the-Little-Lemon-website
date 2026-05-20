import { useState } from 'react';

// Controlled booking form. Every field is driven by React state so the
// component is the single source of truth for the form's values.
// `availableTimes` (the list of selectable times) is provided by the parent,
// which also owns the times state; `dispatch` lets the form ask the parent to
// recompute the times when the chosen date changes.
function BookingForm({ availableTimes = [], dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  function handleDateChange(event) {
    const newDate = event.target.value;
    setDate(newDate);
    // Ask the parent to update the available times for the selected date.
    if (dispatch) {
      dispatch({ type: 'update', date: newDate });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Submission is wired to the API in a later exercise.
    const reservation = { date, time, guests, occasion };
    console.log('Reservation submitted', reservation);
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Reserve a table">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="res-time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
      >
        <option value="" disabled>Select a time</option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(event) => setGuests(event.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(event) => setOccasion(event.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Engagement">Engagement</option>
      </select>

      <button type="submit" className="button">Make your reservation</button>
    </form>
  );
}

export default BookingForm;
