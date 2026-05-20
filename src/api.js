// Little Lemon booking API.
//
// This is a local copy of the API module provided with the capstone
// (originally loaded as a remote <script> exposing window.fetchAPI /
// window.submitAPI). Keeping it as an importable module makes the data layer
// explicit, removes a network dependency and lets the functions be mocked in
// unit tests.

// Deterministic pseudo-random generator seeded from a number, so the same
// date always yields the same set of available times.
const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

// Returns the list of available booking times for a given Date.
export const fetchAPI = function (date) {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

// Submits a reservation. Returns true on success.
export const submitAPI = function (formData) {
  return true;
};
