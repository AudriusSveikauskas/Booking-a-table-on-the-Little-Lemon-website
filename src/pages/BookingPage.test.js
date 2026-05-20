import { initializeTimes, updateTimes } from './BookingPage';

describe('initializeTimes', () => {
  test('returns a list of times from the API', () => {
    const result = initializeTimes();
    expect(Array.isArray(result)).toBe(true);
  });
});

describe('updateTimes', () => {
  test('returns a list of times for an update action', () => {
    const state = initializeTimes();
    const result = updateTimes(state, { type: 'update', date: '2026-06-01' });
    expect(Array.isArray(result)).toBe(true);
  });

  test('returns the current state for an unknown action', () => {
    const state = initializeTimes();
    expect(updateTimes(state, { type: 'unknown' })).toEqual(state);
  });
});
