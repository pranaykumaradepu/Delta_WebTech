// creaye a function to print a poem

// function poem(){
//     console.log('poem.........!')
//     console.log('---------------')
//     console.log('jhonny jhonny');
//     console.log('yes papa!');
//     console.log('eating suger');
//     console.log('no papa');
//     console.log('open your mouth ');
//     console.log('ha ha haaaaaa');
// }

// poem();


// tq2 : Create a Function to roll a dice & always display the value of the dice (1 to 6).

// function dice() {
//     console.log(Math.floor(Math.random() * 6));
// }

// dice()

// -------------------------------------

// function with arguments

// function userInfo(name, age){
//     console.log(`your name is "${name}" and your age is ${age}`)
// }

// userInfo('pranay',24)
// userInfo(prompt('enter your name '),prompt('enter your age'))


// Create a Function that gives us the average of 3 numbers.

// function averageOfThree(num1, num2, num3){
//     let average = (num1 + num2 + num3) / 3
//     console.log(`avarage of three numbers is ${average}`)
// }

// averageOfThree(2,4,6);


// Create a Function that prints the multiplication table of a number.

// function mTable(number){
//     console.log('printing multiplication table ');
//     for (let i=1; i<=10;i++){
//         console.log(`${number} X ${i} = ${number * i}`)
//     }
// }

// mTable(5);


// Create a Function that returns the sum of numbers from 1 to n.

// function sumOfN(n){
//     sum = 0
//     for(i=1; i<=n; i++){
//         sum += i
//     }
//     return sum
// }

// console.log(sumOfN(5))


// Create a Function that returns the concatenation of all strings in an array.

// function concatArry(array){
//     let str = ""
//     for(txt of array){
//         str += txt
//         str += " "
//     }
//     return str
// }

// console.log(concatArry(['hai', 'hello', 'am', 'pranay']))


// output

// let greet = 'hello'

// function changeGreet() {
//     let greet = 'namaste';
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
// }

// console.log(greet);
// changeGreet()


// higherOrderFunction

// function evenOrOddTest(request){
//     if (request == 'odd'){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }else if (request == 'even'){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }else{
//         console.log('wrong request');
//     }
// }

// let request = 'odd'



// 