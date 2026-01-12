let balance = 500
function atm(withdrawAmount) {
if (withdrawAmount>balance) {
    return 'Not enough money in your balance'
 } else {
    balance = balance - withdrawAmount
return 'You have withdrawn ' + withdrawAmount +  '.Your new balance is ' + balance
 }
}

console.log(atm(600))
console.log(atm(200))

