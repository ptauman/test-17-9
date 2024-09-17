const numberArray : number[] = [1, 2];

function sumOfArray(numberArray: number[]): number {
    let total: number = 0;
    for (let i = 0; i < numberArray.length; i++) {
        total += numberArray[i];
    }
    return total;
}

console.log(sumOfArray(numberArray));

