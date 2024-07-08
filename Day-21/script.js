// Practice Qs

// q1.Check if all numbers in our array are multiples of 10 or not.

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// let res = arr.every((num) => (num%10==0) )

// console.log(res)


// q2.Create a function to find the min number in an array.

// let min = arr.reduce((mval, ele) =>{
//     if(mval < ele){
//         return mval;
//     }else{
//         return ele;
//     }
// });

// console.log(min)

// find the maximum number in an array using reduce()

// let num = [1,2,3,4,5]
// let max = num.reduce((max,el) => {
//     if(el>max){         //or  if(max < el)
//         return el;
//     }
//     return max;
// });


// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.


// let arr1 = [1,2,3,4]

// const square = arr1.map((el) => el*el )

// let sum = square.reduce((sum,el) => sum + el, 0)

// let avg = sum/square.length;

// console.log(avg)

// console.log(`the average of the array is ${arr1.map(el => el * el).reduce((sum, el) => sum + el) / arr1.length}`);



//  Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.


let numbers = [2,4,6,8,10];

console.log(numbers.map((num) => num + 5))
 

// Qs3. Create a new array whose elements are in uppercase of words present in the original array.
 
let string = ["adam", "bob", "catlyan", "donald"]

console.log(string.map((str) => str.toUpperCase()))


// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of the additional arguments doubled.
 

const doubleAndReturnArgs = (arr, ...args) => {

    return [...arr, ...args.map((num) => num * 2)];
}



// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

mergeObjects({a: 1, b: 2}, {c: 3, d: 4})

