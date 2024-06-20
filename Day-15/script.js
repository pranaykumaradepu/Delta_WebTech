// // if condition

// let trafficColor = 'green'

// if (trafficColor == 'green') {
//     console.log('you are good to go...')
// }

// if (trafficColor == 'yellow') {
//     console.log('slow down please...')
// }

// if (trafficColor == 'red'){
//     console.log('stop - knop you have to wait here')
// }


// // else if 

// let marks = 78

// if (marks >=80){
//     console.log('yoy got "a" grade')
// }

// else if (marks <=79){
//     console.log('you got "b" grade')
// }

// else if (marks >= 60){
//     console.log('you got c grade')
// }

// else if (marks >= 35){
//     console.log('you got d grade')
// }

// else if (marks <35){
//     console.log('failed')
// }




// let popcornSize = 'S';

// if (popcornSize == 'XL') {
//     console.log('the price is 250');
// } 

// else if (popcornSize == 'L') {
//     console.log('the price is 200');
// }

// else if(popcornSize == 'M'){
//     console.log('the price is 100');
// }

// else if (popcornSize == 'S'){
//     console.log('the price is 50');
// }

// else {
//     console.log('invalid size')
// }


// // nested if 

// let marks1 = 45

// if (marks1 > 33) {
//     console.log('pass');
//     if (marks1 > 80 && marks1 <90){
//         console.log('you got O grade')
//     }
//     else if (marks1 <79 && marks1 >60){
//         console.log('you git a+')
//     }
//     else{
//         console.log('you got a grade')
//     }
// }else{
//     console.log('fail');
// }


// // Qs. A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a
// // Program to find if a string is good or not.

// let str = 'abcdklj'

// if (str[0] == 'a' && str.length>3){
//     console.log('good string')
// }else{
//     console.log('not a good string')
// }



// // Qs. Predict the output of following code :
// let num = 12;
// if ((num%3==0) && ((num+1 ==15) || (num-1 == 11))){
//     console.log('safe');  //output
// }else{
//     console.log('unsafe');
// }

// // switch case
// console.log()
// console.log()

// let colorTrafic = 'red'

// switch(colorTrafic){
//     case 'green':
//         console.log('good to go')
//         break;
//     case 'yellow':
//         console.log('slow down')
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//     default:
//         console.log('not working ')
// }


// // Qs. Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.

// let day = 2

// switch (day){
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednsday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//     default:
//         console.log('invalid day')
// }


// // alret mesage

// alert('you entered a worng page')

// // to create a error kind of message

// console.error('this show how user creates a error message')

// // to create a warning message 

// console.warn('this shows how user creates a warning message')


// // to get user input 

// let cage = prompt('enter your age')

// if (cage >18){
//     console.log('you can vote');
// }else{
//     console.log('you cannot vote');
// }


// practice questions

// Qsl. Create a number variable num with some value.
// Now, print "good" if the number is divisible by 10 and print "bad" if it is not.


let num1 = 12

if (num1%10===0){
    console.log('good')
}else{
    console.log('bad')
}

// Qs2. Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting
// their name & age) •
// name is age years old.
// [Use template Literals to print this sentence]

let uName = prompt('enter user name : ')
let uAge = prompt('enter user age : ')
alert(`username ${uName} and his age is ${uAge}`)

// Qs3. Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4: October, November, December
// [Use the number as the case value in switch]


let quarter = 1

switch (quarter){
    case 1:
        console.log('january , february , march');
        break;
    case 2:
        console.log('april ,may, june');
        break;
    case 3:
        console.log('july, august, september');
        break;
    case 4:
        console.log('october, november, december');
        break;
    default:
        console.log('invalid month')
}



// Qs4. A string is a golden string if it starts with the character 'A' or 'a' and has a total
// length greater than 5.
// For a given string print if it is golden or not.


let gStr = 'apple12'

if (gStr[0] === 'A' || gStr[0] === 'a' && gStr.length>5){
    console.log('golden string')

}else{
    console.log('not a golden string')
}


// Qs5. Write a program to find the largest of 3 numbers.

let aNum = 80;

let bNum = 40;

let cNum = 30;

if (aNum > bNum || aNum > cNum){
    console.log('a grater value');
}else if (bNum > cNum){
    console.log('b grater value')
}else{
    console.log('c grater value')
}

// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2

let fnum = 32

let snum = 47852

if (fnum%10 === snum%10){
    console.log('eqaul')
}else{
    console.log('not equal')
}