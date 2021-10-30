'use strict';
/**
 * @param {[][]} arr
 * @return {number}
 */

function diagonalDifference(arr) {
    let firstValues = []
    let secondValues = []

    let indexTracker = 0
    arr.forEach( (childArray, index) => {
        firstValues.push(childArray[indexTracker])
        indexTracker++
    })
    // reset for second iteration to lenght to child array to decrement
    indexTracker = arr[0].length -1

    arr.forEach( (childArray, index) => {
        secondValues.push(childArray[indexTracker])
        indexTracker--
    })

    // `firstvalue ${firstValue} secondValue ${secondValue}`
    let firstOperand = 0
    let secondOperand = 0

    firstValues.forEach( value => firstOperand+=value)
    secondValues.forEach(value => secondOperand+=value)

    if ( firstOperand < secondOperand) {
        return secondOperand - firstOperand
    } else {
        return firstOperand - secondOperand
    }

}

console.log(diagonalDifference( [ [1,2,3], [4,5,6],  [9,8,9]  ] ))