//Teil A (leicht):
//Schreibe eine Funktion mit dem namen getNextFibonacciNumber
//Die Funktion erhält zwei Parameter
//prevNum1 eine number
//prevNum2 eine number
//Die Funktion gibt eine number zurück
//getNextFibonacciNumber gibt die nächste Fibonacci Zahl der Folge zurück.
//Beispiel:
//getNextFibonacciNumber(5,8) -> 13
//getNextFibonacciNumber(0,1) -> 1
//getNextFibonacciNumber(21,34) ->55

function getNextFibonacciNumber(prevNum1, prevNum2) {
    console.log(`---------Teil-A--------`);
    let result = prevNum1 + prevNum2;
    return result;
}
console.log(getNextFibonacciNumber(5, 8));

/*
Teil B (mittel):
Schreibe eine Funktion mit dem namen getAllFibonacciNumbersBelow
Die Funktion erhält einen Parameter
num eine number
Die Funktion gibt ein Array zurück
getAllFibonacciNumbersBelow gibt ein Array aller Fibonacci Zahlen unter dem übergebenen Parameter num zurück
Beispiel:
getAllFibonacciNumbersBelow(10) -> [0, 1, 1, 2, 3, 5, 8]
getAllFibonacciNumbersBelow(50) -> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
getAllFibonacciNumbersBelow(144) -> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
*/
let array = [];
function getAllFibonacciNumbersBelow(num) {
    console.log(`---------Teil-B--------`);
    for (let i = 0; i < num; i++) {
        return array.push(i);
    }
}
console.log(getAllFibonacciNumbersBelow(10));
