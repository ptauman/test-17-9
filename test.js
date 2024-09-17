var numberArray = [1, 2];
function sumOfArray(numberArray) {
    var total = 0;
    for (var i = 0; i < numberArray.length; i++) {
        total += numberArray[i];
    }
    return total;
}
console.log(sumOfArray(numberArray));
