let animal = {
    name: prompt('Enter name:'),
    kind: prompt('Enter kind:'),
    speak: function(message) {
        console.log(this.name + ' speaks: "' + message + '"');
          }
};
let message = prompt('Enter message:');
console.log(animal.speak(message));