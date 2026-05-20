import { initializeTimes, updateTimes } from './BookingPage';

describe('initializeTimes', () => {
  test('returns the expected non-empty list of times', () => {
    const result = initializeTimes();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toContain('17:00');
  });
});

describe('updateTimes', () => {
  test('returns a non-empty list of times for an update action', () => {
    const state = initializeTimes();
    const result = updateTimes(state, { type: 'update', date: '2026-06-01' });
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  test('returns the current state for an unknown action', () => {
    const state = initializeTimes();
    expect(updateTimes(state, { type: 'unknown' })).toEqual(state);
  });
});
