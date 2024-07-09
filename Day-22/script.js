// Practice Qs
// Add the following elements to the container using only JavaScript and the DOM methods.
// i) a <p> with red text that says "Hey I'm red!"

let para = document.createElement('p');

para.innerText = 'Hey i am red!..';

// para.style.color = 'red';  // we can add styling in another way that is create a class in css with styling and create the same class name though Js

para.classList.add('red')

document.querySelector('body').appendChild(para);


// ii) an <h3> with blue text that says "I'm a blue h3!"

let heading = document.createElement('h3');

heading.style.color = 'blue';

heading.innerText = ' I"m a blue h3!'

document.querySelector('body').appendChild(heading);


// iii) a <div> with a black border and pink background color with the following elements inside of it:
// • another <hl> that says "I'm in a div"
// • a <p> that says "ME TOO!"

let div = document.createElement('div');
let head = document.createElement('h1');
let para1 = document.createElement('p');

head.innerText = 'I"m in a div'
para1.innerText = 'ME TOO!';

div.append(head);
div.append(para1);
div.classList.add('box');

document.querySelector('body').appendChild(div)



