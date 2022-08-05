// Aufgabe 1 (Karte ziehen)
// Implementiere eine Funktion mit dem Namen getCard welche eine zufällige Karte aus dem Array cards entfernt und als String zurückgibt. Wenn man die Funktion getCard 52 mal aufgerufen hat soll sie zurück geben “Der Stapel ist leer”.
// Nutze folgenden Code:
// const cards = [“2 Pik”,“3 Pik”,“4 Pik”,“5 Pik”,“6 Pik”, “7 Pik”, “8 Pik”, “9 Pik”, “10 Pik”, “Bube Pik”, “Dame Pik”, “König Pik”, “Ass Pik”, “2 Kreuz”,“3 Kreuz”,“4 Kreuz”,“5 PKreuzik”,“6 Kreuz”, “7 Kreuz”, “8 Kreuz”, “9 Kreuz”, “10 Kreuz”, “Bube Kreuz”, “Dame Kreuz”, “König Kreuz”, “Ass Kreuz”, “2 Karo”,“3 Karo”,“4 Karo”,“5 Karo”,“6 Karo”, “7 Karo”, “8 Karo”, “9 Karo”, “10 Karo”, “Bube Karo”, “Dame Karo”, “König Karo”, “Ass Karo”, “2 Herz”,“3 Herz”,“4 Herz”,“5 Herz”,“6 Herz”, “7 Herz”, “8 Herz”, “9 Herz”, “10 Herz”, “Bube Herz”, “Dame Herz”, “König Herz”, “Ass Herz”]
// Bonus:
// Implementiere eine Funktion mit dem Namen shuffleCards welche die Karten im Array cards mischt.

const cards = [
    "2 Pik",
    "3 Pik",
    "4 Pik",
    "5 Pik",
    "6 Pik",
    "7 Pik",
    "8 Pik",
    "9 Pik",
    "10 Pik",
    "Bube Pik",
    "Dame Pik",
    "König Pik",
    "Ass Pik",
    "2 Kreuz",
    "3 Kreuz",
    "4 Kreuz",
    "5 PKreuzik",
    "6 Kreuz",
    "7 Kreuz",
    "8 Kreuz",
    "9 Kreuz",
    "10 Kreuz",
    "Bube Kreuz",
    "Dame Kreuz",
    "König Kreuz",
    "Ass Kreuz",
    "2 Karo",
    "3 Karo",
    "4 Karo",
    "5 Karo",
    "6 Karo",
    "7 Karo",
    "8 Karo",
    "9 Karo",
    "10 Karo",
    "Bube Karo",
    "Dame Karo",
    "König Karo",
    "Ass Karo",
    "2 Herz",
    "3 Herz",
    "4 Herz",
    "5 Herz",
    "6 Herz",
    "7 Herz",
    "8 Herz",
    "9 Herz",
    "10 Herz",
    "Bube Herz",
    "Dame Herz",
    "König Herz",
    "Ass Herz",
];
function getCard() {
    console.log(`---------------Aufgabe 1(Karte ziehen)----------------`);
    if (cards.length > 1) {
        return cards.splice(getRandom(), 1)[0];
    } else {
        return "Der Stapel ist leer";
    }
}

console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());

// Bonus:
// Implementiere eine Funktion mit dem Namen shuffleCards welche die Karten im Array cards mischt.
function getRandom() {
    return Math.floor(Math.random() * cards.length);
}
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

// Aufgabe 2 (Passwort Generator)
// Implementiere eine Funktion mit dem Namen createPassword welche ein zufällig erzeugtes Passwort zurückgibt.
// Die Funktion gibt einen string zurück
// Die Funktion erhält 4 Parameter
// 1. length, eine number, gibt die Länge des Passworts an
// 2. useSmallLetters, ein boolean, gibt an ob das Passwort kleine Buchstaben von a-z enthalten soll
// 3. useCapitalLetters, ein boolean, gibt an ob das Passwort große Buchstaben von A-Z enthalten soll
// 4. useSpecialCharacters, ein boolean, gibt an ob das Passwort Sonderzeichen wie @ ! $ % & * enthalten soll.


// function createPassword(
//     length,
//     useSmallLetters,
//     useCapitalLetters,
//     useSpecialCharacters
// ) {
//     console.log(`---------------Q2----------------`);
//     if (
//         length >= 8 &&
//         useSmallLetters === true &&
//         useCapitalLetters === true &&
//         useSpecialCharacters === true
//     )
//         return `${typeof length} and ${typeof useSmallLetters} and ${typeof useCapitalLetters} and ${typeof useSpecialCharacters}`;
// }
// console.log(createPassword(9, "hallo", "Hi", "$%"));

// let arr = [`A,B,C,D,E,F,G,a,b,c,d,e,f,g,!,@,$,%,&`];
// let result = " ";

// function getRandom() {
//     result = Math.floor(Math.random() * 20);
//     if (result !== "string") {
//         console.log(true);
//         return arr[result];
//     } else {
//     }
//     console.log(false);
//     return false;
// }

// console.log(getRandom());

function createPassword(length) {
    console.log(`---------------Q2----------------`);
    let result = "";
    let characters = "Almnopq@";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    console.log(true);
    return result;
}
/////////////////////
//__________ERSTELLEN 4 FUNCTIONS LENGTH ALS ERSTE, JEWEILS 3 CHARACTERS ERSTELLEN RANDOM UND AM SCHLUSS ZUSAMMENFÜGEN DAS ALLE 3 CARACTERVARIANTEN VERFÜGT UND LENGTH ZB AUF 9 EINGEHALTEN IST!!!!!!!!!!!!!!!!
/////////////////
console.log(createPassword(8));

function 

 function createPassword(length) {
     let arrayOfElements
     for(let i = 0; cre)
     console.log(`---------------Q2----------------`);
 }
 console.log(createPassword(8));
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
// Aufgabe 3 (Symmetrischer Unterschied)
// Implementiere eine Funktion mit dem namen symmetricDifference(), die zwei Arrays als Parameter erhält und ein Array mit deren symmetrischer Differenz zurückgibt. Das zurückgegebene Array darf nur eindeutige Werte enthalten (keine Duplikate).
// Beispiel:
// symmetricDifference([1, 2], [ ]) sollte [1, 2] zurückgeben
// symmetricDifference([1, 2], [1]) sollte [2] zurückgeben
// symmetricDifference([1, 2], [1, 3]) sollte [2, 3] zurückgeben
// symmetricDifference([1, 2, 3], [5, 2, 1, 4]) sollte [3, 4, 5] zurückgeben
// symmetricDifference([1, 2, 3, 3], [5, 2, 1, 4]) sollte [3, 4, 5] zurückgeben
// symmetricDifference([1, 2, 3], [5, 2, 1, 4, 5]) sollte [3, 4, 5] zurückgeben

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
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
    console.log(`---------Aufgabe 4/Teil-A--------`);
    let result = prevNum1 + prevNum2;
    return result;
}
console.log(getNextFibonacciNumber(21, 34));

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

function getAllFibonacciNumbersBelow(num) {
    console.log(`---------Aufgabe 4/Teil-B--------`);

    let fib = [0, 1];
    let data = [];
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        data.push(fib[i]);
    }
    return data;
}

console.log(getAllFibonacciNumbersBelow(20));
