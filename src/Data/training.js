/*
	The training data in a format like follows:
	trainingLevel: { situpsNumber: {rest: (seconds), situps: [array]} }
*/

const training = {
  // beginner
  1: {
    1: {
      rest: 60,
      situps: [1, 2, 3, 3, 2],
    },
    2: {
      rest: 60,
      situps: [2, 3, 3, 4, 3],
    },
    3: {
      rest: 60,
      situps: [3, 4, 5, 5, 4],
    },
    4: {
      rest: 60,
      situps: [3, 5, 5, 5, 5],
    },
    5: {
      rest: 90,
      situps: [4, 5, 5, 5, 6],
    },
    6: {
      rest: 120,
      situps: [4, 6, 6, 6, 7],
    },
    7: {
      rest: 60,
      situps: [9, 10, 8, 8, 8],
    },
    8: {
      rest: 90,
      situps: [9, 10, 9, 9, 10],
    },
    9: {
      rest: 120,
      situps: [9, 11, 10, 10, 11],
    },
    10: {
      rest: 60,
      situps: [10, 12, 11, 9, 11],
    },
    11: {
      rest: 90,
      situps: [12, 14, 12, 12, 13],
    },
    12: {
      rest: 120,
      situps: [14, 16, 13, 13, 15],
    },
    13: {
      rest: 60,
      situps: [15, 17, 15, 15, 15],
    },
    14: {
      rest: 45,
      situps: [9, 9, 11, 11, 9, 9, 8, 19],
    },
    15: {
      rest: 45,
      situps: [11, 11, 13, 13, 12, 12, 9, 24],
    },
    16: {
      rest: 60,
      situps: [22, 27, 20, 15, 34],
    },
    17: {
      rest: 120,
      situps: [12, 12, 13, 13, 14, 14, 9, 9, 38],
    },
    18: {
      rest: 90,
      situps: [11, 11, 15, 15, 16, 16, 14, 14, 44],
    },
  },
  // intermediate
  2: {
    1: {
      rest: 60,
      situps: [5, 5, 5, 5, 4],
    },
    2: {
      rest: 60,
      situps: [5, 7, 7, 7, 6],
    },
    3: {
      rest: 60,
      situps: [7, 9, 8, 8, 9],
    },
    4: {
      rest: 60,
      situps: [8, 9, 9, 9, 9],
    },
    5: {
      rest: 90,
      situps: [9, 10, 10, 10, 11],
    },
    6: {
      rest: 120,
      situps: [10, 11, 11, 11, 13],
    },
    7: {
      rest: 60,
      situps: [10, 15, 15, 15, 15],
    },
    8: {
      rest: 90,
      situps: [12, 17, 16, 16, 17],
    },
    9: {
      rest: 120,
      situps: [14, 18, 17, 17, 18],
    },
    10: {
      rest: 60,
      situps: [16, 19, 14, 14, 17],
    },
    11: {
      rest: 90,
      situps: [18, 22, 18, 18, 20],
    },
    12: {
      rest: 120,
      situps: [20, 25, 22, 22, 25],
    },
    13: {
      rest: 60,
      situps: [25, 32, 24, 21, 27],
    },
    14: {
      rest: 45,
      situps: [16, 16, 18, 18, 12, 12, 14, 32],
    },
    15: {
      rest: 45,
      situps: [16, 16, 18, 18, 15, 15, 18, 37],
    },
    16: {
      rest: 60,
      situps: [37, 47, 24, 24, 42],
    },
    17: {
      rest: 120,
      situps: [18, 18, 20, 20, 18, 18, 16, 16, 45],
    },
    18: {
      rest: 90,
      situps: [19, 19, 27, 27, 24, 24, 16, 16, 47],
    },
  },
  // advanced
  3: {
    1: {
      rest: 60,
      situps: [9, 10, 8, 8, 8],
    },
    2: {
      rest: 60,
      situps: [9, 10, 9, 9, 10],
    },
    3: {
      rest: 60,
      situps: [9, 13, 10, 10, 11],
    },
    4: {
      rest: 60,
      situps: [12, 12, 11, 11, 13],
    },
    5: {
      rest: 90,
      situps: [12, 14, 14, 14, 15],
    },
    6: {
      rest: 120,
      situps: [14, 15, 16, 16, 18],
    },
    7: {
      rest: 60,
      situps: [12, 16, 16, 16, 18],
    },
    8: {
      rest: 90,
      situps: [18, 22, 17, 17, 22],
    },
    9: {
      rest: 120,
      situps: [19, 27, 22, 22, 25],
    },
    10: {
      rest: 60,
      situps: [18, 22, 19, 19, 22],
    },
    11: {
      rest: 90,
      situps: [22, 26, 23, 23, 26],
    },
    12: {
      rest: 120,
      situps: [26, 30, 27, 27, 30],
    },
    13: {
      rest: 60,
      situps: [33, 37, 28, 22, 30],
    },
    14: {
      rest: 45,
      situps: [17, 17, 19, 19, 15, 15, 20, 35],
    },
    15: {
      rest: 45,
      situps: [18, 18, 21, 21, 17, 17, 20, 40],
    },
    16: {
      rest: 60,
      situps: [42, 52, 33, 28, 45],
    },
    17: {
      rest: 120,
      situps: [19, 19, 27, 27, 22, 22, 15, 15, 48],
    },
    18: {
      rest: 90,
      situps: [23, 23, 30, 30, 24, 24, 20, 20, 50],
    },
  },
};

// training data for test and developement
const dev = {
  1: {
    1: {
      rest: 2,
      situps: [1, 1],
    },
    2: {
      rest: 2,
      situps: [111, 111],
    },
  },
  2: {
    1: {
      rest: 2,
      situps: [2, 2],
    },
    2: {
      rest: 2,
      situps: [222, 222],
    },
  },
  3: {
    1: {
      rest: 2,
      situps: [3, 3],
    },
    2: {
      rest: 2,
      situps: [333, 333],
    },
  },
};

// exports
// ------------------------------------------------------------------------
const final = process.env.NODE_ENV === "development" ? dev : training;

export default final;
