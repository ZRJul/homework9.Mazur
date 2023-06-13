/*
Створити масив, довжину та елементи якого задає користувач. Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку.*/

let arr = [];
function arrAdd() {

    let amount = +prompt("Введите количество елементов");
    for(let i = 0; i < amount; i++) {
        arr[i] = prompt("Введите элемент" + (i + 1));
    }
    alert(arr);
    console.log(arr)
}
let functionResult = arrAdd();

arr.splice(2,3);
alert(arr);
console.log(arr)




/*Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
Знайти суму та кількість позитивних елементів. +
Знайти мінімальний елемент масиву та його порядковий номер. +
Знайти максимальний елемент масиву та його порядковий номер. +
Визначити кількість негативних елементів. +
Знайти кількість непарних позитивних елементів.+
Визначити кількість парних позитивних елементів. +
Знайти суму парних позитивних елементів.+
Знайти суму непарних позитивних елементів.+
Знайти добуток позитивних елементів.+
Знайти найбільший серед елементів масиву, решту занулити.
*/


let arrTwo = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//1. Знайти суму та кількість позитивних елементів.
let resultOne = arrTwo.filter(function (item, index,array) {
    return item > 0;
})
lengthOne = resultOne.length
let sumOne = resultOne.reduce(function (previousValue, item, index, array) {
    return item + previousValue;
}, 0);
// alert(`Сума позитивних елементів ${sumOne}, кількість позитивних елементів ${lengthOne}`);

//2. Знайти мінімальний елемент масиву та його порядковий номер.
let minOne = Math.min.apply(null, arrTwo);
let numberOne = arrTwo.indexOf(minOne,0);
// alert(`мінімальний елемент масиву ${minOne}, його порядковий номер ${numberOne}`);

//3. Знайти максимальний елемент масиву та його порядковий номер.
let maxThree = Math.max.apply(null, arrTwo);
let numberThree = arrTwo.indexOf(maxThree,0);
// alert(`максимальний елемент масиву ${maxThree}, його порядковий номер ${numberThree}`);

//4. Визначити кількість негативних елементів.
let resultFour = arrTwo.filter(function (item, index,array) {
    return item < 0;
})
lengthFour = resultFour.length
// alert(`кількість негативних елементів - ${lengthFour}`);

//5. Знайти кількість непарних позитивних елементів.
let resultFive = arrTwo.filter(function (item, index,array) {
    return item %2 !== 0 && item > 0;
})
let numberFive = resultFive.length;
// alert(`кількість непарних позитивних елементів ${numberFive}`);

//6. Визначити кількість парних позитивних елементів.
let resultSix = arrTwo.filter(function (item, index,array) {
    return item %2 === 0 && item > 0;
})
let numberSix = resultSix.length;
// alert(`кількість парних позитивних елементів ${numberSix}`);

//7. Знайти суму парних позитивних елементів.
let sumSeven = resultSix.reduce(function (previousValue, item, index, array) {
    return item + previousValue;
});
// alert(`Сума парних позитивних елементів ${sumSeven}`);

//8. Знайти суму непарних позитивних елементів.
let sumEight = resultFive.reduce(function (previousValue, item, index, array) {
    return item + previousValue;
});
// alert(`Сума непарних позитивних елементів ${sumEight}`);

//9. Знайти добуток позитивних елементів.
let resultNine = 1;
for (let i= 0; i < resultOne.length; i++){
    resultNine= resultNine * resultOne [i];
}
// alert(`добуток позитивних елементів ${resultNine}`);

//10. Знайти найбільший серед елементів масиву, решту занулити.
for (let i= 0; i < arrTwo.length; i++){
     if (arrTwo [i] < maxThree) {
         arrTwo [i] = 0;
     }
}

alert(`Сума позитивних елементів ${sumOne}, кількість позитивних елементів ${lengthOne}\n
мінімальний елемент масиву ${minOne}, його порядковий номер ${numberOne}\n
максимальний елемент масиву ${maxThree}, його порядковий номер ${numberThree}\n
кількість негативних елементів ${lengthFour}\n
кількість непарних позитивних елементів ${numberFive}\n
кількість парних позитивних елементів ${numberSix}\n
Сума парних позитивних елементів ${sumSeven}\n
Сума непарних позитивних елементів ${sumEight}\n
добуток позитивних елементів ${resultNine}\n
Новий масив ${arrTwo}`);