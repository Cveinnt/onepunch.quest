/*
	The training data in a format like follows:
	trainingLevel: { situpsNumber: {rest: (seconds), situps: [array]} }
*/

const training = {
  1: {
    rest: 60,
    pushups: [1, 2, 3, 3, 2],
    situps: [1, 2, 3, 3, 2],
    squats: [1, 2, 3, 3, 2],
    run: [1],
  },
  2: {
    rest: 60,
    pushups: [2, 3, 3, 4, 3],
    situps: [2, 3, 3, 4, 3],
    squats: [2, 3, 3, 4, 3],
    run: [2],
  },
  3: {
    rest: 60,
    pushups: [3, 4, 5, 5, 4],
    situps: [3, 4, 5, 5, 4],
    squats: [3, 4, 5, 5, 4],
    run: [3],
  },
  4: {
    rest: 60,
    pushups: [3, 5, 5, 5, 5],
    situps: [3, 5, 5, 5, 5],
    squats: [3, 5, 5, 5, 5],
    run: [4],
  },
  5: {
    rest: 90,
    pushups: [4, 5, 5, 5, 6],
    situps: [4, 5, 5, 5, 6],
    squats: [4, 5, 5, 5, 6],
    run: [5],
  },
  6: {
    rest: 120,
    pushups: [4, 6, 6, 6, 7],
    situps: [4, 6, 6, 6, 7],
    squats: [4, 6, 6, 6, 7],
    run: [6],
  },
  7: {
    rest: 60,
    pushups: [9, 10, 8, 8, 8],
    situps: [9, 10, 8, 8, 8],
    squats: [9, 10, 8, 8, 8],
    run: [7],
  },
  8: {
    rest: 90,
    pushups: [9, 10, 9, 9, 10],
    situps: [9, 10, 9, 9, 10],
    squats: [9, 10, 9, 9, 10],
    run: [8],
  },
  9: {
    rest: 120,
    pushups: [9, 11, 10, 10, 11],
    situps: [9, 11, 10, 10, 11],
    squats: [9, 11, 10, 10, 11],
    run: [9],
  },
  10: {
    rest: 60,
    pushups: [10, 12, 11, 9, 11],
    situps: [10, 12, 11, 9, 11],
    squats: [10, 12, 11, 9, 11],
    run: [10],
  },
};

// training data for test and developement
const dev = {
  1: {
    rest: 2,
    pushups: [1, 1],
    situps: [1, 1],
    squats: [1, 1],
    run: [1],
  },
  2: {
    rest: 2,
    pushups: [111, 111],
    situps: [111, 111],
    squats: [111, 111],
    run: [2],
  },
  3: {
    rest: 2,
    pushups: [3, 4, 5, 5, 4],
    situps: [3, 4, 5, 5, 4],
    squats: [3, 4, 5, 5, 4],
    run: [3],
  },
  4: {
    rest: 2,
    pushups: [3, 5, 5, 5, 5],
    situps: [3, 5, 5, 5, 5],
    squats: [3, 5, 5, 5, 5],
    run: [4],
  },
  5: {
    rest: 2,
    pushups: [4, 5, 5, 5, 6],
    situps: [4, 5, 5, 5, 6],
    squats: [4, 5, 5, 5, 6],
    run: [5],
  },
  6: {
    rest: 2,
    pushups: [4, 6, 6, 6, 7],
    situps: [4, 6, 6, 6, 7],
    squats: [4, 6, 6, 6, 7],
    run: [6],
  },
  7: {
    rest: 2,
    pushups: [9, 10, 8, 8, 8],
    situps: [9, 10, 8, 8, 8],
    squats: [9, 10, 8, 8, 8],
    run: [7],
  },
  8: {
    rest: 2,
    pushups: [9, 10, 9, 9, 10],
    situps: [9, 10, 9, 9, 10],
    squats: [9, 10, 9, 9, 10],
    run: [8],
  },
  9: {
    rest: 2,
    pushups: [9, 11, 10, 10, 11],
    situps: [9, 11, 10, 10, 11],
    squats: [9, 11, 10, 10, 11],
    run: [9],
  },
  10: {
    rest: 2,
    pushups: [10, 12, 11, 9, 11],
    situps: [10, 12, 11, 9, 11],
    squats: [10, 12, 11, 9, 11],
    run: [10],
  },
};

// exports
// ------------------------------------------------------------------------
const final = process.env.NODE_ENV === "development" ? dev : training;

export default final;
