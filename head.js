function head(arr) {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
  }
}

const myArray = [5, 8, 3, 2, 1];
const firstElement = head(myArray);
console.log(firstElement);  // Output: 5