
  let numbers = [2, 4, 5];

  let sum = numbers[0] + numbers[1] + numbers[2];

  document.getElementById("numberList").innerHTML =
    "<li>" + numbers[0] + "</li>" +
    "<li>" + numbers[1] + "</li>" +
    "<li>" + numbers[2] + "</li>";

  document.getElementById("sum").innerText =
    numbers[0] + " + " + numbers[1] + " + " + numbers[2] + " = " + sum;




