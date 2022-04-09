import arrayMadness from "./index";

describe("arrayMadness", () => {
  test("should work for fixed tests", () => {
    expect(arrayMadness([4, 5, 6], [1, 2, 3])).toBe(true);
    expect(arrayMadness([5, 6, 7], [4, 5, 6])).toBe(false);
    expect(arrayMadness([4, 5, 6], [3, 4, 5])).toBe(false);
    expect(arrayMadness([3, 4, 5], [2, 3, 4])).toBe(false);
    expect(arrayMadness([2, 3, 4], [1, 2, 3])).toBe(false);
    expect(arrayMadness([1, 2, 3], [0, 1, 2])).toBe(true);
    expect(arrayMadness([5, 3, 2, 4, 1], [15])).toBe(false);
    expect(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3])).toBe(false);
    expect(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1])).toBe(false);
    expect(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1])).toBe(
      true
    );
    expect(
      arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13])
    ).toBe(false);
    expect(
      arrayMadness(
        [28, 31, 50, 51, 86, 79, 46, 5, 84, 3, 22, 7, 84],
        [49, 8, 88]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [52, 10, 2, 67, 44, 28, 32, 74, 23, 29, 36, 99, 24],
        [33, 45, 44]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [25, 80, 50, 73, 39, 68, 67, 88, 93, 0, 86, 50, 85],
        [56, 13, 90]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [95, 57, 30, 95, 43, 51, 92, 22, 11, 80, 7, 53, 31],
        [50, 84, 52]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [27, 23, 95, 69, 99, 55, 9, 51, 81, 9, 90, 71, 32],
        [94, 20, 95]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [6, 80, 88, 42, 53, 44, 27, 36, 0, 42, 32, 42, 22],
        [68, 68, 43]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [11, 10, 36, 14, 13, 51, 73, 98, 89, 38, 81, 53, 94],
        [79, 40, 95]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [26, 41, 7, 20, 76, 51, 28, 6, 13, 47, 25, 9, 74],
        [43, 13, 61]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [80, 27, 40, 1, 60, 59, 25, 79, 14, 6, 27, 100, 14],
        [56, 82, 16]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [86, 29, 41, 95, 16, 24, 28, 94, 95, 20, 11, 24, 98],
        [64, 72, 36]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [95, 11, 6, 89, 26, 68, 90, 45, 38, 56, 95, 30, 75],
        [64, 73, 91]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [65, 99, 98, 78, 27, 49, 82, 7, 11, 66, 2, 13, 60],
        [50, 59, 26]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [81, 88, 4, 60, 68, 71, 95, 25, 73, 73, 73, 26, 60],
        [14, 78, 17]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [100, 54, 59, 61, 37, 10, 46, 40, 1, 72, 18, 9, 83],
        [73, 53, 2]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [14, 57, 1, 50, 91, 45, 64, 54, 36, 55, 29, 74, 15],
        [60, 52, 33]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [10, 8, 66, 37, 4, 10, 84, 88, 71, 50, 11, 54, 11],
        [72, 22, 31]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [86, 56, 88, 37, 32, 95, 47, 57, 54, 3, 26, 56, 14],
        [66, 75, 45]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [7, 53, 26, 82, 79, 71, 33, 24, 53, 66, 17, 22, 0],
        [68, 38, 80]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [75, 4, 0, 61, 43, 21, 93, 66, 50, 99, 99, 27, 34],
        [66, 89, 59]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [97, 69, 84, 49, 99, 42, 87, 92, 23, 78, 57, 98, 25],
        [14, 48, 100]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [26, 36, 60, 27, 47, 97, 63, 70, 45, 58, 92, 13, 56],
        [43, 42, 58]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [76, 15, 79, 4, 72, 55, 0, 83, 72, 43, 23, 20, 19],
        [99, 47, 96]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [97, 3, 81, 20, 68, 4, 32, 61, 69, 77, 22, 50, 84],
        [30, 33, 15]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [28, 62, 14, 29, 8, 58, 2, 83, 99, 74, 60, 3, 43],
        [81, 87, 21]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [3, 39, 64, 77, 70, 51, 87, 5, 42, 95, 64, 71, 91],
        [49, 58, 86]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [18, 5, 47, 60, 83, 36, 24, 26, 45, 74, 29, 26, 20],
        [93, 7, 0]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [71, 93, 76, 38, 67, 97, 81, 95, 50, 76, 49, 66, 38],
        [47, 19, 13]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [45, 67, 71, 42, 88, 57, 70, 95, 54, 32, 92, 63, 2],
        [27, 78, 7]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [5, 18, 50, 11, 11, 10, 85, 70, 40, 12, 60, 19, 54],
        [20, 89, 91]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [43, 75, 39, 93, 48, 70, 22, 23, 79, 39, 39, 44, 56],
        [19, 40, 85]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [30, 47, 73, 69, 56, 55, 49, 24, 5, 59, 81, 18, 83],
        [47, 91, 43]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [36, 19, 50, 63, 0, 29, 95, 53, 0, 17, 7, 86, 18],
        [45, 96, 57]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [88, 24, 42, 28, 61, 41, 53, 67, 57, 51, 18, 57, 8],
        [49, 18, 12]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [88, 94, 41, 60, 99, 97, 79, 85, 58, 87, 8, 49, 40],
        [15, 69, 30]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [37, 65, 25, 8, 86, 34, 88, 67, 9, 46, 84, 89, 85],
        [89, 61, 4]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [16, 27, 39, 97, 90, 15, 85, 37, 5, 54, 57, 16, 39],
        [29, 72, 0]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [8, 56, 13, 90, 53, 29, 71, 48, 44, 17, 66, 22, 17],
        [23, 47, 20]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [33, 74, 12, 53, 80, 74, 48, 100, 97, 95, 85, 4, 73],
        [86, 27, 64]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [5, 59, 57, 96, 97, 57, 75, 89, 52, 83, 24, 37, 31],
        [32, 27, 79]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [83, 65, 24, 88, 65, 30, 62, 59, 36, 55, 33, 65, 27],
        [37, 87, 29]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [13, 28, 82, 49, 58, 1, 79, 26, 52, 75, 41, 53, 59],
        [81, 86, 25]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [49, 97, 53, 92, 22, 57, 18, 96, 61, 70, 54, 38, 9],
        [34, 35, 91]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [46, 95, 45, 94, 65, 13, 15, 68, 27, 89, 45, 94, 36],
        [55, 82, 32]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [44, 19, 84, 24, 61, 5, 99, 99, 24, 97, 53, 79, 73],
        [14, 24, 15]
      )
    ).toBe(true);
    expect(
      arrayMadness(
        [50, 75, 1, 48, 3, 52, 48, 45, 53, 92, 97, 10, 12],
        [19, 69, 17]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [100, 65, 18, 15, 58, 49, 8, 58, 22, 76, 18, 27, 44],
        [19, 1, 54]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [17, 22, 13, 31, 97, 94, 99, 69, 27, 48, 0, 63, 75],
        [23, 78, 8]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [30, 27, 48, 11, 26, 9, 16, 85, 17, 34, 52, 20, 87],
        [18, 45, 82]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [82, 47, 32, 77, 85, 79, 37, 48, 88, 84, 28, 2, 74],
        [39, 46, 98]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [97, 45, 88, 25, 45, 22, 3, 55, 59, 78, 1, 1, 72],
        [46, 24, 82]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [48, 2, 62, 2, 11, 23, 88, 28, 24, 34, 85, 66, 61],
        [54, 19, 36]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [6, 12, 83, 60, 56, 57, 93, 3, 49, 82, 90, 70, 97],
        [1, 65, 66]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [29, 99, 50, 100, 6, 37, 19, 54, 70, 58, 100, 33, 71],
        [61, 60, 55]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [13, 19, 96, 63, 95, 75, 81, 86, 13, 2, 66, 25, 38],
        [54, 82, 99]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [11, 64, 65, 75, 94, 71, 49, 70, 98, 26, 36, 36, 59],
        [48, 16, 40]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [34, 93, 76, 43, 88, 38, 30, 26, 41, 25, 36, 26, 32],
        [43, 72, 80]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [57, 13, 25, 29, 23, 6, 52, 22, 23, 7, 77, 86, 58],
        [89, 67, 20]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [19, 81, 100, 45, 8, 3, 19, 41, 84, 8, 47, 4, 30],
        [14, 85, 59]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [100, 20, 89, 68, 100, 99, 46, 52, 43, 82, 57, 22, 52],
        [64, 66, 21]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [5, 80, 24, 8, 3, 12, 94, 53, 86, 94, 23, 79, 34],
        [13, 92, 7]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [45, 56, 25, 14, 55, 28, 91, 25, 42, 24, 99, 96, 23],
        [88, 30, 14]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [83, 4, 58, 54, 0, 61, 75, 95, 76, 39, 21, 26, 82],
        [99, 21, 27]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [84, 88, 78, 24, 54, 23, 93, 45, 37, 78, 65, 1, 65],
        [90, 17, 63]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [33, 98, 53, 39, 76, 1, 51, 78, 92, 22, 0, 74, 22],
        [39, 64, 11]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [70, 43, 56, 16, 85, 28, 45, 25, 58, 82, 70, 87, 7],
        [29, 91, 67]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [78, 60, 2, 48, 34, 91, 89, 57, 37, 97, 37, 61, 20],
        [83, 12, 48]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [20, 96, 27, 70, 11, 6, 96, 43, 56, 84, 49, 85, 53],
        [81, 86, 0]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [39, 55, 33, 18, 41, 13, 56, 58, 78, 88, 23, 90, 54],
        [45, 42, 4]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [94, 9, 80, 57, 68, 94, 50, 10, 50, 22, 10, 88, 93],
        [24, 89, 45]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [36, 80, 24, 9, 19, 66, 26, 89, 39, 55, 26, 70, 32],
        [35, 8, 93]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [64, 49, 91, 61, 34, 26, 100, 44, 2, 69, 88, 70, 55],
        [77, 45, 38]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [97, 79, 5, 21, 4, 80, 3, 86, 59, 23, 45, 9, 64],
        [25, 10, 89]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [77, 77, 23, 65, 9, 54, 69, 51, 37, 54, 6, 92, 54],
        [96, 44, 77]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [68, 56, 80, 22, 23, 11, 52, 41, 34, 32, 50, 74, 78],
        [21, 31, 77]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [47, 100, 33, 1, 99, 48, 3, 92, 20, 74, 17, 84, 15],
        [19, 79, 8]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [64, 48, 4, 39, 23, 80, 96, 22, 49, 40, 13, 20, 6],
        [7, 60, 24]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [94, 100, 99, 12, 90, 53, 98, 17, 47, 16, 17, 18, 13],
        [21, 7, 66]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [27, 0, 78, 66, 31, 20, 100, 89, 83, 39, 100, 12, 66],
        [12, 15, 58]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [20, 14, 21, 46, 87, 4, 47, 57, 24, 96, 41, 41, 97],
        [76, 42, 39]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [92, 20, 39, 49, 93, 56, 59, 32, 10, 67, 36, 59, 80],
        [35, 93, 71]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [90, 88, 64, 8, 94, 97, 72, 80, 44, 39, 55, 34, 1],
        [26, 2, 67]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [79, 41, 92, 69, 57, 18, 17, 94, 0, 94, 99, 13, 47],
        [85, 81, 22]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [87, 6, 73, 27, 38, 59, 11, 8, 61, 65, 70, 67, 100],
        [26, 45, 26]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [85, 15, 60, 23, 18, 32, 23, 76, 10, 53, 95, 25, 57],
        [96, 85, 22]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [91, 78, 100, 29, 35, 6, 49, 93, 43, 37, 93, 5, 26],
        [3, 76, 92]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [27, 59, 37, 55, 94, 62, 22, 49, 24, 18, 86, 52, 39],
        [59, 15, 14]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [39, 63, 25, 46, 19, 72, 49, 45, 17, 45, 1, 79, 39],
        [22, 98, 65]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [10, 69, 77, 86, 39, 73, 91, 51, 84, 24, 69, 34, 49],
        [95, 79, 77]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [11, 75, 86, 18, 47, 19, 48, 76, 97, 52, 100, 6, 85],
        [6, 54, 91]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [38, 54, 27, 66, 18, 49, 35, 24, 32, 34, 10, 14, 54],
        [44, 23, 86]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [12, 39, 66, 61, 44, 46, 23, 55, 29, 55, 63, 17, 73],
        [83, 6, 57]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [100, 54, 4, 4, 39, 25, 43, 17, 88, 97, 25, 6, 39],
        [16, 43, 50]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [68, 75, 82, 45, 40, 21, 68, 79, 20, 13, 70, 56, 77],
        [55, 25, 35]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [65, 36, 46, 31, 97, 29, 39, 77, 96, 21, 95, 99, 65],
        [61, 79, 92]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [41, 8, 9, 10, 2, 25, 83, 45, 68, 30, 95, 76, 69],
        [82, 25, 49]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [16, 22, 8, 49, 23, 9, 14, 43, 59, 70, 22, 23, 35],
        [1, 99, 47]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [17, 5, 13, 24, 14, 11, 30, 6, 51, 42, 60, 13, 70],
        [46, 6, 66]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [79, 39, 61, 79, 60, 2, 60, 98, 53, 70, 90, 96, 66],
        [14, 38, 67]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [80, 13, 18, 54, 67, 1, 84, 91, 61, 60, 50, 54, 12],
        [24, 27, 87]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [98, 87, 90, 14, 87, 73, 96, 83, 18, 15, 38, 74, 2],
        [17, 32, 20]
      )
    ).toBe(true);
    expect(
      arrayMadness(
        [41, 82, 99, 86, 85, 64, 49, 17, 54, 98, 68, 74, 62],
        [49, 34, 41]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [8, 18, 96, 80, 39, 62, 54, 98, 76, 13, 53, 100, 68],
        [27, 1, 74]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [70, 32, 67, 80, 25, 11, 64, 10, 27, 43, 82, 33, 91],
        [62, 99, 92]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [14, 76, 52, 71, 17, 38, 32, 91, 38, 25, 79, 71, 95],
        [82, 48, 42]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [84, 56, 25, 78, 23, 77, 100, 34, 11, 71, 89, 89, 18],
        [71, 67, 72]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [47, 19, 90, 12, 81, 7, 28, 26, 65, 76, 1, 33, 0],
        [38, 4, 43]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [83, 42, 54, 12, 12, 75, 75, 78, 20, 13, 31, 47, 9],
        [18, 69, 92]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [85, 36, 14, 78, 93, 75, 37, 88, 61, 26, 81, 75, 75],
        [44, 23, 70]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [97, 84, 96, 16, 63, 19, 3, 55, 44, 92, 2, 50, 90],
        [31, 69, 68]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [2, 6, 13, 72, 18, 22, 26, 42, 3, 24, 99, 8, 6],
        [70, 12, 47]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [50, 54, 50, 80, 30, 85, 56, 15, 95, 24, 70, 58, 95],
        [92, 60, 27]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [58, 62, 27, 88, 74, 79, 80, 89, 46, 73, 60, 75, 63],
        [3, 85, 89]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [52, 92, 46, 58, 60, 97, 50, 90, 92, 97, 9, 7, 80],
        [8, 6, 70]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [30, 7, 68, 25, 61, 96, 47, 3, 77, 16, 53, 2, 36],
        [81, 6, 86]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [100, 57, 9, 87, 91, 16, 74, 2, 98, 27, 24, 1, 66],
        [63, 27, 81]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [17, 22, 72, 82, 91, 98, 53, 29, 81, 6, 99, 12, 86],
        [99, 6, 96]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [84, 84, 42, 75, 95, 23, 31, 93, 16, 54, 82, 58, 83],
        [66, 76, 92]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [4, 21, 4, 45, 22, 35, 2, 64, 85, 100, 79, 55, 17],
        [46, 4, 89]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [41, 53, 87, 69, 32, 82, 88, 25, 64, 79, 68, 30, 88],
        [29, 5, 78]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [37, 73, 37, 21, 1, 8, 35, 52, 80, 68, 66, 47, 5],
        [34, 2, 28]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [49, 36, 90, 77, 81, 14, 23, 7, 46, 71, 32, 29, 0],
        [7, 31, 40]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [66, 94, 25, 5, 95, 95, 23, 53, 75, 15, 91, 14, 4],
        [90, 56, 25]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [82, 20, 49, 5, 98, 10, 46, 45, 44, 14, 18, 99, 95],
        [48, 19, 36]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [16, 4, 99, 42, 23, 70, 59, 2, 44, 90, 26, 96, 0],
        [74, 69, 33]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [10, 52, 84, 52, 68, 17, 27, 80, 55, 45, 50, 27, 28],
        [16, 15, 43]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [12, 87, 65, 74, 86, 59, 19, 41, 23, 59, 40, 16, 58],
        [47, 87, 69]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [48, 94, 68, 5, 15, 23, 35, 95, 89, 10, 90, 57, 98],
        [40, 88, 3]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [49, 57, 99, 34, 29, 14, 36, 37, 56, 94, 70, 30, 69],
        [53, 69, 100]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [35, 77, 95, 69, 11, 44, 39, 41, 58, 78, 83, 53, 49],
        [11, 32, 72]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [11, 16, 14, 90, 39, 95, 16, 61, 73, 44, 70, 50, 41],
        [99, 49, 16]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [63, 31, 76, 87, 37, 16, 28, 49, 73, 52, 5, 81, 100],
        [21, 59, 85]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [39, 75, 12, 31, 34, 10, 85, 37, 11, 55, 50, 61, 21],
        [31, 52, 7]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [9, 25, 83, 8, 73, 21, 97, 20, 40, 19, 27, 28, 51],
        [29, 53, 44]
      )
    ).toBe(false);
    expect(
      arrayMadness(
        [43, 40, 18, 76, 92, 75, 11, 40, 63, 32, 48, 42, 19],
        [9, 97, 27]
      )
    ).toBe(false);
  });
});
