let numbers= [3, 5, 6, 8, 11] 

function sumMinMax(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return `Max: ${max}, Min: ${min}, Sum: ${max + min}`;
}
console.log(sumMinMax(numbers))


function sumMinMax(arr) {
  let numbersOnly = [];


  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      numbersOnly.push(arr[i]);
    }
  }

  if (numbersOnly.length === 0) {
    return "Error: No valid numbers in the array.";
  }

  let max = numbersOnly[0];
  let min = numbersOnly[0];

  for (let i = 1; i < numbersOnly.length; i++) {
    if (numbersOnly[i] > max) {
      max = numbersOnly[i];
    }
    if (numbersOnly[i] < min) {
      min = numbersOnly[i];
    }
  }

  return `Max: ${max}, Min: ${min}, Sum: ${max + min}`;
}


console.log(sumMinMax([3, 5, "hello", 6, true, 8, 11]));
console.log(sumMinMax(["a", false, null]));
