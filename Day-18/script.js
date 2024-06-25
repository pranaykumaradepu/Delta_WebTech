// objefct literals

// let post = {
//     userName : 'pranay096',
//     content : 'post about tech summit',
//     likes : 25000,
//     reposts : 2000,
//     tags : ['@kishore', '@sai']
// }


// Qs

// Generate a random number between 1 and 100.

// let randomNum = Math.floor(Math.random() * 100)

// console.log('random number from 1 -100 :',randomNum)

// ----------------------------------------------

// Generate a random number between 1 and 5.

// let rNum = Math.floor(Math.random() * 5)

// console.log('random number from 1 -5 :',rNum)



// number gussing game

// let range = prompt('enter the range ')

// let rNum = Math.floor(Math.random() * range )

// let guess = prompt('enter your guess ') 

// while (true){
//     if (guess == 'quit'){
//         console.log('quitting game');
//         break;
//     }

//     if (guess == rNum){
//         console.log(rNum ,'correct guess !..... congrats!');
//         break;
//     }else if(guess < rNum) {
//         guess = prompt('your guess low, please enter again')
//     }else{
//         guess = prompt('your guess high please enter again');
//     }
// }



// practice question

//  Qs1. Create a program that generates a random number representing a dice roll.
//  [The number should be between 1 and 6].

let dice = Math.floor(Math.random() *6) + 1 

console.log(dice)


//  Qs2. Create an object representing a car that stores the following properties for the
//  car: name, model, color.
//  Print the car’s name.

let car = {
    name :'bmw',
    model : 'm4',
    color : 'pink'
}

console.log(car['name'])

//  Qs3. Create an object Person with their name, age and city.
//  Edit their city’s original value to change it to “New York”.
//  Add a new property country and set it to the United States

let person = {
    name : 'pranay',
    age : 24,
    city : 'hyderabad'
}

console.log('before modification :',person);

person['city'] = 'New York';

person['country'] = 'United Stattes';

console.log('after modification :',person);
