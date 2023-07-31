/**
 * @param {string} str
 * @return {string}
 */
// function returns string without spaces from the beginning and from the end, and in upper letter register
const transformString = (str) => {
  const trimmedStr = str.trim();
  const transformedStr = trimmedStr.toUpperCase();
  
  return transformedStr;
};

/**
 * @param {number[]} array
 * @return {number}
 */
// function should return max number from array
const findMaxNumber = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return NaN;
  }
  let maxNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      throw new Error("Array contains non-numeric elements");
    }
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }

  return maxNumber;
};

/**
 * @param {string} str
 * @return {number[]}
 */
// function returns array of length of every word in string
const getStringWordsLength = (str) => {
  if (str.length === 0) {
    return [];
  }
  const words = str.split(/\W+/);
  const wordLengths = words.map((word) => word.length);

  return wordLengths;
  };

/**
 * @param {number[]} numArray
 * @param {number} degree
 * @return {number[]}
 */
// function returns array of numbers as result of initial number and degree
const getTransformedNumbers = (numArray, degree) => {
  const transformedNumbers = numArray.map((number) => Math.pow(number, degree));

  return transformedNumbers;
};

/**
 * @param {string} text
 * @return {string}
 */
// function returns text with all first letters at the beginning of sentence capitalized
const getTransformedText = (text) => {
  const sentences = text.split(/(?<=[.?!])\s+/);
  const transformedSentences = sentences.map((sentence) => {
    if (sentence.length === 0) return sentence; 
    const firstLetter = sentence.charAt(0).toUpperCase();
    const endOfSentence = sentence.slice(1);

    return firstLetter + endOfSentence;
  });

  return transformedSentences.join(" ");
};

/**
 * @param {any[]} array
 * @return {number[]}
 */
// function filters array and return only array of positive integers
const getPositiveIntegers = (array) => {
  const positiveIntegers = array.filter((item) => typeof item === "number" && item > 0 && Number.isInteger(item));

  return positiveIntegers;
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {number}
 */
// functions return index of element in array
const getElementIndex = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {any | null}
 */
// function returns item from array or undefined if item is not found
const getItem = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return array[i];
    }
  }

  return undefined;
};

/**
 * @param {string[]} array
 * @param {string} word
 * @return {boolean}
 */
// function returns true if word is in every string in array and false if is not
const isWordInEveryArrayString = (array, word) => {
  const lowerCaseWord = word.toLowerCase();
  for (let i = 0; i < array.length; i++) {
    const string = array[i];
    const lowerCaseString = string.toLowerCase();
    if (!lowerCaseString.includes(lowerCaseWord)) {
      return false;
    }
  }

  return array.length > 0;
};

/**
 * @param {number[]} array
 * @return {boolean}
 */
// function returns true if any number in array is negative
const isNegativeNumbersInArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    const number = Number(array[i]);
    if (!Number.isNaN(number) && number < 0) {
      return true;
    }
  }

  return false;
  };

/**
 * @param {number[]} array
 * @param {number} startPosition
 * @param {number} endPosition
 * @return {any[]}
 */
// function returns part of array from start to end (including end) positions
const returnArrayPart = (array, startPosition, endPosition) => {
  const arrayLength = array.length;
  const normalizedStartPosition = startPosition < 0 ? Math.max(0, startPosition + arrayLength) : Math.min(arrayLength, startPosition);
  const normalizedEndPosition = endPosition < 0 ? Math.max(0, endPosition + arrayLength) : Math.min(arrayLength, endPosition);

  return array.slice(normalizedStartPosition, normalizedEndPosition + 1);
};
  
module.exports = {
  transformString,
  findMaxNumber,
  getStringWordsLength,
  getTransformedNumbers,
  getTransformedText,
  getPositiveIntegers,
  getElementIndex,
  getItem,
  isWordInEveryArrayString,
  isNegativeNumbersInArray,
  returnArrayPart,
};
