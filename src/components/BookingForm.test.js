import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the "Choose date" label', () => {
  render(<BookingForm availableTimes={[]} />);
  const label = screen.getByText('Choose date');
  expect(label).toBeInTheDocument();
});

test('renders the available times as options', () => {
  render(<BookingForm availableTimes={['17:00', '18:00']} />);
  expect(screen.getByRole('option', { name: '17:00' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: '18:00' })).toBeInTheDocument();
});
