import { useState } from 'react';

// Today's date in the yyyy-mm-dd format the date input expects. Used both as
// the input's `min` attribute and in the JS validation to reject past dates.
function today() {
  return new Date().toISOString().split('T')[0];
}

// Pure validation helper. Returns an object of error messages keyed by field;
// an empty object means the form is valid. Exported so it can be unit tested.
export function validateBooking({ date, time, guests, occasion }) {
  const errors = {};

  if (!date) {
    errors.date = 'Please choose a date.';
  } else if (date < today()) {
    errors.date = 'The date cannot be in the past.';
  }

  if (!time) {
    errors.time = 'Please choose a time.';
  }

  const guestCount = Number(guests);
  if (guests === '' || Number.isNaN(guestCount)) {
    errors.guests = 'Please enter the number of guests.';
  } else if (guestCount < 1) {
    errors.guests = 'At least one guest is required.';
  } else if (guestCount > 10) {
    errors.guests = 'We can seat a maximum of 10 guests per booking.';
  }

  if (!occasion) {
    errors.occasion = 'Please choose an occasion.';
  }

  return errors;
}

// Controlled, validated booking form.
function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('Birthday');
  const [touched, setTouched] = useState({});

  const values = { date, time, guests, occasion };
  const errors = validateBooking(values);
  const isFormValid = Object.keys(errors).length === 0;

  function markTouched(field) {
    setTouched((previous) => ({ ...previous, [field]: true }));
  }

  function handleDateChange(event) {
    const newDate = event.target.value;
    setDate(newDate);
    if (dispatch) {
      dispatch({ type: 'update', date: newDate });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Reveal any outstanding errors if the user submits early.
    setTouched({ date: true, time: true, guests: true, occasion: true });
    if (!isFormValid) {
      return;
    }
    if (submitForm) {
      submitForm(values);
    }
  }

  // Shows a field's error only once it has been touched or a submit attempted.
  const showError = (field) => touched[field] && errors[field];

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Reserve a table"
      noValidate
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="res-date"
        required
        min={today()}
        value={date}
        onChange={handleDateChange}
        onBlur={() => markTouched('date')}
        aria-invalid={showError('date') ? 'true' : 'false'}
        aria-describedby={showError('date') ? 'res-date-error' : undefined}
      />
      {showError('date') && (
        <span id="res-date-error" className="field-error" role="alert">
          {errors.date}
        </span>
      )}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="res-time"
        required
        value={time}
        onChange={(event) => setTime(event.target.value)}
        onBlur={() => markTouched('time')}
        aria-invalid={showError('time') ? 'true' : 'false'}
        aria-describedby={showError('time') ? 'res-time-error' : undefined}
      >
        <option value="" disabled>Select a time</option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      {showError('time') && (
        <span id="res-time-error" className="field-error" role="alert">
          {errors.time}
        </span>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        required
        min="1"
        max="10"
        value={guests}
        onChange={(event) => setGuests(event.target.value)}
        onBlur={() => markTouched('guests')}
        aria-invalid={showError('guests') ? 'true' : 'false'}
        aria-describedby={showError('guests') ? 'guests-error' : undefined}
      />
      {showError('guests') && (
        <span id="guests-error" className="field-error" role="alert">
          {errors.guests}
        </span>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        required
        value={occasion}
        onChange={(event) => setOccasion(event.target.value)}
        onBlur={() => markTouched('occasion')}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Engagement">Engagement</option>
      </select>

      <button
        type="submit"
        className="button"
        disabled={!isFormValid}
        aria-disabled={!isFormValid}
      >
        Make your reservation
      </button>
    </form>
  );
}

export default BookingForm;
