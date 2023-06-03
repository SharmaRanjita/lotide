function countLetters(sentence) {
  const letterCount = {};
  for (const letter of sentence) {
    if (letter.match(/[a-zA-Z]/)) { // Ignore non-alphabetic characters
      if (letterCount[letter]) {
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
}
const sentence = "LHL";
const result = countLetters(sentence);
console.log(result);