const sampleObject = {id: 1234, name: "Antonio", surname: "Marquez"};
const sampleArray = ["pigs", "goats", "sheep"];
const sampleArray2 = ["Amor", "Luz", "Amapola", "Coche", "Arbol"];


// HEAD

const head = ([primero]) => primero;
console.log(head(sampleArray));

// TAIL

const tail = ([firstItem, ...restItems]) => restItems;
console.log(tail(sampleArray));

// SWAPFIRSTTOLAST

const swapFirstToLast = ([firstItem, ...restItems]) => {
    restItems.push(firstItem);
    return restItems;
};
console.log(swapFirstToLast(sampleArray));

// EXCLUDEID

const excludeId = ({id, ...resto}) => resto;
console.log(excludeId(sampleObject));


// WORDSSTARTINGWITHA

const wordsStartingWithA = (array) => {
    return (array.filter((item) => item < 10));
};

console.log(wordsStartingWithA([10, 11, 9, 7, 14]));


// CONCAT
const concat = (...myArguments) => {
    return (myArguments.reduce((accumulator, currentValue) => accumulator + '|' + currentValue));
};

console.log(concat("Libro", "Mesa", "Silla"));

// MULTIARRAY
const numbersArray = [1, 2, 3, 5, 8];
const multiarray = (num, array) => {
    return (array.map((x) => num*x));
};

console.log(multiarray(3,numbersArray));

// CALCMULT

const calcMult = (...myArguments) => {
    return (myArguments.reduce((accumulator, currentValue) => accumulator * currentValue));
}

console.log(calcMult(1, 2, 3));