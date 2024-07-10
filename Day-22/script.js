// Practice Qs
// Add the following elements to the container using only JavaScript and the DOM methods.
// i) a <p> with red text that says "Hey I'm red!"

// let para = document.createElement('p');

// para.innerText = 'Hey i am red!..';

// para.style.color = 'red';  // we can add styling in another way that is create a class in css with styling and create the same class name though Js

// para.classList.add('red')

// document.querySelector('body').appendChild(para);


// ii) an <h3> with blue text that says "I'm a blue h3!"

// let heading = document.createElement('h3');

// heading.style.color = 'blue';

// heading.innerText = ' I"m a blue h3!'

// document.querySelector('body').appendChild(heading);


// iii) a <div> with a black border and pink background color with the following elements inside of it:
// • another <hl> that says "I'm in a div"
// • a <p> that says "ME TOO!"

// let div = document.createElement('div');
// let head = document.createElement('h1');
// let para1 = document.createElement('p');

// head.innerText = 'I"m in a div'
// para1.innerText = 'ME TOO!';

// div.append(head);
// div.append(para1);
// div.classList.add('box');

// document.querySelector('body').appendChild(div)



// practice questions

// Qsl. Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me'

let input = document.createElement('input');  // create the input element

let btn = document.createElement('button');

btn.innerText = 'Click me';

document.querySelector('body').appendChild(input);
document.querySelector('body').appendChild(btn);


// Qs2. Add following attributes to the element : 
// Change placeholder value of input to "username" 
// Change the id of button to "btn'

input.setAttribute('placeholder','username');

btn.setAttribute('id','btn');


// Qs3. Access the btn using the querySelector and button id. Change the button background  color to blue and text color to white.

let button = document.querySelector('#btn');

button.classList.add('btn');

// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.  Change its color to purple.  

let head = document.createElement('h1');

head.innerHTML = '<u>DOM Practice</u>';

head.style.color = 'purple';

document.querySelector('body').append(head);

// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold.

let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);





