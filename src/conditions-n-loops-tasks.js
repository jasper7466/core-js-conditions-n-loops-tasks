/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const tempMax = a > b ? a : b;
  return tempMax > c ? tempMax : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing({ x: qX, y: qY }, { x: kX, y: kY }) {
  if (qX === kX || qY === kY) {
    return true;
  }
  if (Math.abs(qX - kX) === Math.abs(qY - kY)) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }

  const eq1 = a === b ? 1 : 0;
  const eq2 = a === c ? 1 : 0;
  const eq3 = b === c ? 1 : 0;

  if (eq1 + eq2 + eq3 < 1) {
    return false;
  }

  const sum1 = a + b >= c ? 1 : 0;
  const sum2 = a + c >= b ? 1 : 0;
  const sum3 = b + c >= a ? 1 : 0;

  if (sum1 + sum2 + sum3 === 3) {
    return true;
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let n = num;
  const dict = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  function repeatStr(str, count) {
    let result = '';
    for (let i = 0; i < count; i += 1) {
      result += str;
    }

    return result;
  }

  const xCount = Math.floor(n / 10);

  n %= 10;

  return `${repeatStr('X', xCount)}${dict[n]}`;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  function dictViaSwitchEmulator(value) {
    switch (value) {
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      case '.':
        return 'point';
      case ',':
        return 'point';
      case '-':
        return 'minus';
      default:
        return '';
    }
  }

  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    if (i > 0) {
      result += ' ';
    }

    result += dictViaSwitchEmulator(numberStr[i]);
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i < j; i += 1, j -= 1) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let n = num;

  while (n) {
    if (n % 10 === digit) {
      return true;
    }

    n = Math.floor(n / 10);
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) {
    return -1;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  let leftSum = arr[0];
  let rightSum = sum - arr[0] - arr[1];

  for (let i = 1; i < arr.length - 1; i += 1) {
    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
    rightSum -= arr[i + 1];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = Array(size);
  const totalCount = size * size;
  const current = { x: 0, y: 0 };
  let count = 1;
  let direction = 0;

  const directions = [
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
  ];

  const bounds = {
    left: 0,
    right: size - 1,
    top: 0,
    bottom: size - 1,
  };

  function switchDirection() {
    switch (direction) {
      case 0: {
        bounds.top += 1;
        break;
      }
      case 1: {
        bounds.right -= 1;
        break;
      }
      case 2: {
        bounds.bottom -= 1;
        break;
      }
      case 3: {
        bounds.left += 1;
        break;
      }
      default: {
        throw new Error('Unexpected direction index');
      }
    }

    direction += 1;

    if (direction >= 4) {
      direction = 0;
    }
  }

  function isBoundReached() {
    switch (direction) {
      case 0:
        return current.x === bounds.right;
      case 1:
        return current.y === bounds.bottom;
      case 2:
        return current.x === bounds.left;
      case 3:
        return current.y === bounds.top;
      default:
        throw new Error('Unexpected direction index');
    }
  }

  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }

  while (count <= totalCount) {
    matrix[current.y][current.x] = count;

    if (isBoundReached()) {
      switchDirection();
    }

    current.x += directions[direction].x;
    current.y += directions[direction].y;
    count += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const size = matrix.length;

  function swap(source, [x1, y1], [x2, y2]) {
    const src = source;

    [src[y1][x1], src[y2][x2]] = [src[y2][x2], src[y1][x1]];
  }

  for (let layer = 0; layer < Math.floor(size / 2); layer += 1) {
    const subMaxIndex = size - layer - 1;

    for (let i = 0; i < subMaxIndex - layer; i += 1) {
      swap(matrix, [layer + i, layer], [subMaxIndex, layer + i]);
      swap(matrix, [layer + i, layer], [subMaxIndex - i, subMaxIndex]);
      swap(matrix, [layer + i, layer], [layer, subMaxIndex - i]);
    }
  }

  return matrix;
}

/**
 * Swaps array items at specified indexes.
 *
 * @param {*} arr Target array.
 * @param {*} indexA First index to swap.
 * @param {*} indexB Second index to swap.
 */
function swapItem(arr, indexA, indexB) {
  const a = arr; // Because of linter...

  [a[indexA], a[indexB]] = [a[indexB], a[indexA]];
}

/**
 * Random integer generator.
 *
 * @param {number} min Range start
 * @param {number} max Range end (inclusive)
 * @returns {number} Random integer in range [min, max]
 */
function randomInteger(min, max) {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr, from = 0, to = arr.length - 1) {
  const indexDiff = to - from;

  if (indexDiff <= 0) {
    return;
  }

  if (indexDiff === 1) {
    if (arr[from] > arr[to]) {
      swapItem(arr, from, to);
    }
    return;
  }

  let pivotIndex = randomInteger(from, to);
  let leftIndex = from;
  let rightIndex = to;

  while (leftIndex < rightIndex) {
    while (arr[leftIndex] < arr[pivotIndex] && leftIndex !== pivotIndex) {
      leftIndex += 1;
    }

    while (arr[rightIndex] > arr[pivotIndex] && rightIndex !== pivotIndex) {
      rightIndex -= 1;
    }

    if (leftIndex + 1 === rightIndex) {
      swapItem(arr, leftIndex, rightIndex);
      if (pivotIndex === leftIndex) {
        pivotIndex += 1;
      } else {
        pivotIndex -= 1;
      }
      break;
    }

    if (leftIndex === pivotIndex || rightIndex === pivotIndex) {
      const middleIndex = Math.ceil((leftIndex + rightIndex) / 2);
      swapItem(arr, pivotIndex, middleIndex);
      pivotIndex = middleIndex;
    } else {
      swapItem(arr, leftIndex, rightIndex);
      leftIndex += 1;
      rightIndex -= 1;
    }
  }
  sortByAsc(arr, from, pivotIndex - 1);
  sortByAsc(arr, pivotIndex + 1, to);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  let counter = iterations;

  while (counter) {
    let startPart = '';
    let endPart = '';

    counter -= 1;

    for (let i = 0; i < result.length; i += 2) {
      startPart += result[i];
    }

    for (let i = 1; i < result.length; i += 2) {
      endPart += result[i];
    }

    result = startPart + endPart;

    if (result === str) {
      const cycle = iterations - counter;
      return shuffleChar(str, iterations % cycle);
    }
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let digits = Array.from(`${number}`);

  if (digits.length === 1) {
    return number;
  }

  let breakIndex = null;

  for (let i = digits.length - 1; i > 0; i -= 1) {
    if (digits[i - 1] < digits[i]) {
      breakIndex = i - 1;
      break;
    }
  }

  if (breakIndex === null) {
    return number;
  }

  let nextSmallestDigitIndex = breakIndex + 1;

  for (let i = breakIndex + 1; i < digits.length; i += 1) {
    if (
      digits[i] > digits[breakIndex] &&
      digits[i] < digits[nextSmallestDigitIndex]
    ) {
      nextSmallestDigitIndex = i;
    }
  }

  [digits[breakIndex], digits[nextSmallestDigitIndex]] = [
    digits[nextSmallestDigitIndex],
    digits[breakIndex],
  ];

  const head = [];
  const tail = [];

  for (let i = 0; i <= breakIndex; i += 1) {
    head.push(digits[i]);
  }

  for (let i = breakIndex + 1; i < digits.length; i += 1) {
    tail.push(digits[i]);
  }

  tail.sort();

  digits = [...head, ...tail];

  return +digits.join('');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
