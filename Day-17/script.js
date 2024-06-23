// multiplicationn table for 5

// let table = prompt('enter table you want to print ')
// for  (let i=1; i<=10; i++){
//     console.log(`${table} X ${i} = ${table*i}`)
// }


// while loop

// let i = 1;
// while (i<=5){
//     console.log(i);
//     i++;
// }

// guessing fav movie

// const myMovie = 'kalki'

// let guess = prompt('enter your guess')
// while ((guess != myMovie) && (guess != 'quit')){
//     guess = prompt('wrong guess try again');
// }

// if (guess == myMovie){
//     console.log('congrats!');
// }else{
//     console.log('you quit!')
// }

// breeak statement

// let k = 1;

// while (k<=5){
//     if (k==3){
//         break;
//     }
//     console.log(k);
//     k++;
// }
// console.log('used break statment after 3')


// loops in array

// let fruits = ['maango', 'banana', 'apple', 'grapes']

// console.log('extracting stright : ')
// for (let i=0; i<fruits.length;i++){
//     console.log(`fruits index ${i} and fruits value "${fruits[i]}"`)
// }

// console.log('extracting reverse : ')

// for (let i=fruits.length-1; i>=0; i--){
//     console.log(`fruits index ${i} and fruits value "${fruits[i]}"`)
// }


//nested loop

// let superHeros = [ 
//     ['spiderman', 'thor', 'iron man', 'hulk'],
//     ['superman', 'aquaman', 'batman', 'flash']
// ]

// for (let i=0; i<superHeros.length; i++){
//     console.log(`heros : ${i} `)
//     for (let j=0; j<superHeros[i].length; j++){
//         console.log(`${i} : ${superHeros[i][j]}`);
//     }
// }


//another example

// let students = [
//     ['aman', 90], ['shradha', 80], ['sachin', 70], ['sahil', 60]
// ]

// for (i=0; i<students.length; i++){
//     console.log('outer ',i)
//     for (j=0; j<students[i].length; j++){
//         console.log(`${students[i][j]}`);
//     }
// }


// for of loop

// let fruits = ['mango', 'apple', 'banana', 'grapes']

// for(fruit of fruits){
//     console.log(fruit)
// }


// nested for of loop


// let superHeros = [ 
//         ['spiderman', 'thor', 'iron man', 'hulk'],
//         ['superman', 'aquaman', 'batman', 'flash']
//     ]


// for (universe of superHeros){
//     console.log("heros : ");
//     for (hero of universe){
//         console.log(hero);
//     }
// }


// Qs1.WriteaJSprogramtodeletealloccurrencesofelement ‘num’ inagivenarray.
//  Example: ifarr=[1,2,3,4,5,6,2,3]&num=2
//  Resultshouldbearr=[1,3,4,5,6,3]

// let ifarr = [1,2,3,4,5,6,2,3]

// let num = prompt('enter the value you want to remove')

// for (i=0; i<ifarr.length; i++){
//     if (ifarr[i] == num){
//         ifarr.splice(i, 1);
//     }
//     console.log(i,ifarr[i])
// }
// console.log(ifarr)


//  Qs2.Write a JSprogram to find the no of digits in a number.
//  Example: if number = 287152, count=6

// let number = 287152

// let count = 0

// let copy = number;
// while (copy > 0) {
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(`the total count of numbers are ${count}`)

//  Qs3.Write a JSprogram to find the sum of digits in a number.
//  Example: ifnumber=287152,sum=25

// let number1 = 287152

// let sum = 0

// let copy1 = number1

// while (copy1 > 0){
//     lDigit = copy1 % 10
//     sum += lDigit
//     copy1 = Math.floor(copy1/10) 
// }
// console.log(sum)

//  Qs4.Print the factorial of a number n.
//  [Factorial of a number n is the product of all positive integers lessthan or equal to a give n positive integer and denoted by that integer.
//  Example:
//  7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
//  5! (factorial of 5) = 1x2x3x4x5 = 120
//  3! (factorial of 3) = 1x2x3 = 6
//  0! Is always 1

// let fNum = prompt('enter number to print factoial');

// let factoial = 1;

// for (i=1; i<=fNum; i++){
//     factoial *= i;
// }
// console.log(`factorial of ${fNum} is ${factoial}`)


//  Qs5.Find the largest number in an array with only positive numbers

let arr = [5,8,6,7,9,2,3,-5,-9]

let lNum = 0

for (i=0; i<arr.length; i++){
    if (lNum < arr[i]) {
        lNum = arr[i]
    }
    
}

console.log(lNum)