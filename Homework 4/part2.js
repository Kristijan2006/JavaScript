function sumArray(numbers)  {
     let sum=0;
         for (let i=0; i<numbers.length; i++) {
            sum=sum + numbers[i];
            }
            return sum;
    }
        console.log(sumArray([1,2,3,4,5]));

       
       
        function validateNumber(num) {
  return typeof num === "number" && !isNaN(num);
}

function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (!validateNumber(numbers[i])) {
      return "Error: One of the values is not a valid number.";
    }
    sum=sum + numbers[i];
  }

  return sum;
}


console.log(sumArray([1, 2, 3, 4, 5]));        
console.log(sumArray([1, 2, "3", 4, 5]));      
