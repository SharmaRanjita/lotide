function tail(arr) {
  if (arr.length > 1) {
    return arr.slice(1);
  } else {
    return [];
  }
}

const myArray = ["Hello", "Lighthouse", "Labs"];
const tailArray = tail(myArray);
console.log(tailArray);  // Output: ["Lighthouse", "Labs"]