function joinStrings(stringArray) {
  let result = "";

  for (let i = 0; i < stringArray.length; i++) {
    result += stringArray[i] + " ";
  }

  return result.trim();
}


let words = ["Hello", "there", "students", "of", "AvengaAcademy", "!"];
console.log(joinStrings(words));

