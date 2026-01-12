function calculateDogAge(humanYears) {
    const dogYears = humanYears * 7;
    console.log("Your dog is " + dogYears + " years old in dog years");
    return dogYears;
}
calculateDogAge(3);

function calculateHumanAge(dogYears) {
    const humanYears = dogYears / 7;
    console.log ('Your dog is ' + humanYears + ' years old in human years')
    return humanYears

}
calculateHumanAge (21)
