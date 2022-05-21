/*
	The training data in a format like follows:
	trainingLevel: { situpsNumber: {rest: (seconds), situps: [array]} }
*/

// training data for test and developement
const training = {
  1: {
    rest: 60,
    situps: [10, 10, 10, 1],
  },
  2: {
    rest: 60,
    situps: [20, 20, 20, 2],
  },
  3: {
    rest: 60,
    situps: [30, 30, 30, 3],
  },
  4: {
    rest: 60,
    situps: [40, 40, 40, 4],
  },
  5: {
    rest: 60,
    situps: [50, 50, 50, 5],
  },
  6: {
    rest: 60,
    situps: [60, 60, 60, 6],
  },
  7: {
    rest: 120,
    situps: [70, 70, 70, 7],
  },
  8: {
    rest: 180,
    situps: [80, 80, 80, 8],
  },
  9: {
    rest: 240,
    situps: [90, 90, 90, 9],
  },
  10: {
    rest: 240,
    situps: [100, 100, 100, 10],
  },
};

// training data for test and developement
const dev = {
  1: {
    rest: 2,
    situps: [10, 10, 10, 1],
  },
  2: {
    rest: 2,
    situps: [20, 20, 20, 2],
  },
  3: {
    rest: 2,
    situps: [30, 30, 30, 3],
  },
  4: {
    rest: 2,
    situps: [40, 40, 40, 4],
  },
  5: {
    rest: 2,
    situps: [50, 50, 50, 5],
  },
  6: {
    rest: 2,
    situps: [60, 60, 60, 6],
  },
  7: {
    rest: 2,
    situps: [70, 70, 70, 7],
  },
  8: {
    rest: 2,
    situps: [80, 80, 80, 8],
  },
  9: {
    rest: 2,
    situps: [90, 90, 90, 9],
  },
  10: {
    rest: 2,
    situps: [100, 100, 100, 10],
  },
};

// exports
// ------------------------------------------------------------------------
const final = process.env.NODE_ENV === "development" ? dev : training;

export default final;
