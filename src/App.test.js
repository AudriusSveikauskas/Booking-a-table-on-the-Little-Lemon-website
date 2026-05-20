import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// App renders route components, so it must be wrapped in a router in tests.
function renderAt(route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
}

test('renders the homepage hero on the index route', () => {
  renderAt('/');
  expect(
    screen.getByRole('heading', { level: 1, name: /little lemon/i })
  ).toBeInTheDocument();
});

test('renders the booking page heading on the /booking route', () => {
  renderAt('/booking');
  expect(
    screen.getByRole('heading', { level: 1, name: /reserve a table/i })
  ).toBeInTheDocument();
});
