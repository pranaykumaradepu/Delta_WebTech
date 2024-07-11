/**
 * Generates a random RGB color and updates the background color of a div and the text of an h1 element.
 * 
 * This function is triggered when the button with the ID 'btn' is clicked. It generates a random RGB color,
 * sets the background color of the div element and the text content of the h1 element to the generated color.
 */
// let btn = document.getElementById('btn');

// btn.addEventListener('click',function(){
    
//     let div = document.querySelector('div');
    
//     let h1 = document.querySelector('h1');
    
//     let colorpick = randomColor();
    
//     h1.innerText = colorpick;
    
//     div.style.backgroundColor = colorpick;
    
    
// });

// let randomColor = function () {
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }


// end of random color generate


// practice questions

// Qs2. Create a button on the page using JavaScript. Add an event listener to the 
// button that changes the button’s color to green when it is clicked

// let btn = document.createElement('button');

// btn.innerText = 'click me!'

// document.querySelector('body').appendChild(btn);

// btn.addEventListener('click', function() {
//     btn.style.color = 'green';
// });


// Qs3. Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML.
//  The purpose of this input element is to enter a user’s name so it should only input letters from a-z, A-Z and space (all other characters should not be detected).
//  Whenever the user inputs their name, their input should be dynamically visible inside the heading.
//  [Please note that no other character apart from the allowed characters should be visible in the heading]

let input = document.querySelector('input')
let h2 = document.querySelector('h2')

input.addEventListener('input', function() {

    let text = this.value.replace(/[^a-zA-Z\s]/g, '')
    // This line of code does the following:
    // 1. It takes the value of the current element (likely an input field) using 'this.value'
    // 2. It uses a regular expression to replace any character that is not a letter or whitespace with an empty string
    // 3. The regular expression /[^a-zA-Z\s]/g means:
    //    - ^ inside [] means "not"
    //    - a-z matches any lowercase letter
    //    - A-Z matches any uppercase letter
    //    - \s matches any whitespace character
    //    - g flag makes it replace globally (all occurrences)
    // 4. The result is stored in the 'text' variable, which now contains only letters and spaces    
    this.value = text
    h2.textContent = text
})
