let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];
function combineNames(firstNames, lastNames) {
    let combineNames=[];
    for (let i=0; i<firstNames.length; i++) {
        combineNames.push(firstNames[i] + " " + lastNames[i]);
    }
    return combineNames;
}
console.log(combineNames(first, last));