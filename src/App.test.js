import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage placeholder', () => {
  render(<App />);
  const homepage = screen.getByText(/homepage/i);
  expect(homepage).toBeInTheDocument();
});
