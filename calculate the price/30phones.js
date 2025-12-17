let phonePrice=119.95
let quiantity=30
let taxRate=0.05

let totalBeforeTax= phonePrice * quiantity
console.log ("Total price before tax: $" + totalBeforeTax)

let taxAmount=totalBeforeTax * taxRate
console.log('Tax amount: $'+ taxAmount)

let finalPrice= totalBeforeTax + taxAmount
console.log ('Final price including tax:$' + finalPrice) 