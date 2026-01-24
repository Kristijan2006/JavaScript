// first exercise
function printType(value) {
    let type = typeof value;

console.log(type);
  return type;
}


printType({});          
printType(true);        
printType(42);          
printType("Hello");     
printType(undefined);   

// second exercise

function differenceFrom13(number) {
  if (number > 13) {
    return (number - 13) * 2;
  } else {
    return 13 - number;
  }
}


console.log(differenceFrom13(20)); 
console.log(differenceFrom13(10)); 

// thrid exercise

function closerTo100(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    alert ('Negative number');
  return;
 }

  let diff1= Math.abs(100 - num1);
  let diff2= Math.abs(100 - num2);

  if (diff1 < diff2) {
    alert(num1 + " is closer to 100");
  } else if (diff2 < diff1) {
    alert(num2 + " is closer to 100");
  } else {
    alert("Both numbers are equally close to 100");
  }
}
  

// closerTo100(20,80);

// fourth exercise
let salary=1000 ;
let rent=375;
let bills=250;

let totalExpenses= rent + bills;
let amountLeft= salary - totalExpenses;

console.log(totalExpenses )
console.log(amountLeft)

// fifth exercise

let studentName='Bob Bobsky'

let Math=10
let English=6
let Science=8
let Sport=9
let Chemistry=6

let average= (Math + English + Science + Sport + Chemistry) / 5;

console.log("Student: " + studentName);
console.log("Math: " + Math);
console.log("English: " + English);
console.log("Science: " + Science);
console.log("Sport: " + Sport);
console.log("Chemistry: " + Chemistry);
console.log("Average grade: " + average);

if (average < 8) {
  alert('Student failed')
  }else {
    alert ('Student pass')
    }

    // sixth exercise
    
