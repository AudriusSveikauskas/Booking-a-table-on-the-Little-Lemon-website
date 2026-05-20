import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm, { validateBooking } from './BookingForm';

const futureDate = '2099-12-31';

describe('BookingForm rendering', () => {
  test('renders the "Choose date" label', () => {
    render(<BookingForm availableTimes={[]} />);
    expect(screen.getByText('Choose date')).toBeInTheDocument();
  });

  test('renders the available times as options', () => {
    render(<BookingForm availableTimes={['17:00', '18:00']} />);
    expect(screen.getByRole('option', { name: '17:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '18:00' })).toBeInTheDocument();
  });
});

describe('HTML5 validation attributes', () => {
  beforeEach(() => render(<BookingForm availableTimes={['17:00']} />));

  test('date field is required and cannot be in the past', () => {
    const date = screen.getByLabelText('Choose date');
    expect(date).toBeRequired();
    expect(date).toHaveAttribute('type', 'date');
    expect(date).toHaveAttribute('min');
  });

  test('time field is required', () => {
    expect(screen.getByLabelText('Choose time')).toBeRequired();
  });

  test('guests field is required and limited to 1-10', () => {
    const guests = screen.getByLabelText('Number of guests');
    expect(guests).toBeRequired();
    expect(guests).toHaveAttribute('type', 'number');
    expect(guests).toHaveAttribute('min', '1');
    expect(guests).toHaveAttribute('max', '10');
  });

  test('occasion field is required', () => {
    expect(screen.getByLabelText('Occasion')).toBeRequired();
  });
});

describe('validateBooking', () => {
  const validValues = {
    date: futureDate,
    time: '18:00',
    guests: '4',
    occasion: 'Birthday',
  };

  test('returns no errors for valid values', () => {
    expect(validateBooking(validValues)).toEqual({});
  });

  test('flags a missing date', () => {
    expect(validateBooking({ ...validValues, date: '' })).toHaveProperty('date');
  });

  test('flags a past date', () => {
    expect(validateBooking({ ...validValues, date: '2000-01-01' })).toHaveProperty('date');
  });

  test('flags a missing time', () => {
    expect(validateBooking({ ...validValues, time: '' })).toHaveProperty('time');
  });

  test('flags fewer than one guest', () => {
    expect(validateBooking({ ...validValues, guests: '0' })).toHaveProperty('guests');
  });

  test('flags more than ten guests', () => {
    expect(validateBooking({ ...validValues, guests: '11' })).toHaveProperty('guests');
  });
});

describe('submit behaviour', () => {
  test('submit is disabled until the form is valid, then calls submitForm', () => {
    const submitForm = jest.fn();
    render(
      <BookingForm availableTimes={['18:00']} submitForm={submitForm} />
    );

    const submit = screen.getByRole('button', { name: /make your reservation/i });
    expect(submit).toBeDisabled();

    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: futureDate } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Anniversary' } });

    expect(submit).toBeEnabled();

    fireEvent.click(submit);
    expect(submitForm).toHaveBeenCalledWith({
      date: futureDate,
      time: '18:00',
      guests: '4',
      occasion: 'Anniversary',
    });
  });

  test('shows error messages when submitting an empty form', () => {
    const submitForm = jest.fn();
    render(<BookingForm availableTimes={[]} submitForm={submitForm} />);

    fireEvent.submit(screen.getByRole('form', { name: /reserve a table/i }));

    expect(screen.getByText('Please choose a date.')).toBeInTheDocument();
    expect(submitForm).not.toHaveBeenCalled();
  });
});
