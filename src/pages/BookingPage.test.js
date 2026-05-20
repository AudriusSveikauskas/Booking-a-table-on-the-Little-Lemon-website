import { initializeTimes, updateTimes } from './BookingPage';
import { fetchAPI } from '../api';

// Mock the API so the times are deterministic and the tests do not depend on
// the seeded pseudo-random generator.
jest.mock('../api');

const MOCK_TIMES = ['17:00', '18:00', '19:00', '20:00'];

beforeEach(() => {
  fetchAPI.mockReturnValue(MOCK_TIMES);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('initializeTimes', () => {
  test('returns the non-empty list of times provided by the API', () => {
    const result = initializeTimes();
    expect(result).toEqual(MOCK_TIMES);
    expect(result.length).toBeGreaterThan(0);
    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });
});

describe('updateTimes', () => {
  test('returns the API times for the selected date on an update action', () => {
    const result = updateTimes(MOCK_TIMES, { type: 'update', date: '2026-06-01' });
    expect(result).toEqual(MOCK_TIMES);
    // fetchAPI should be queried with a Date built from the selected date.
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI.mock.calls[0][0]).toBeInstanceOf(Date);
  });

  test('returns the current state unchanged for an unknown action', () => {
    const result = updateTimes(MOCK_TIMES, { type: 'unknown' });
    expect(result).toEqual(MOCK_TIMES);
    expect(fetchAPI).not.toHaveBeenCalled();
  });
});
