# Dom Event 

-  events are signels that something has occured

## onclick () :

- it is used to add an event listener to an element when the element is clicked
    ```
    <button>click me!</button>

    js:

    let btn = document.querySelector('button');

    fucntion sayHello(){
        alert('hello');
    }

    btn.onclick = sayHello;
    ```

    - while assigning function to onclick no need to pass pranthesis because it will automatically call the function

## onmouseenter () :

- it is used to add an event listener to an element when the mouse enters the element
    
    ```
    <button>click me!</button>

    js:

    let btn = document.querySelector('button');

    btn.onmouseenter = function(){
        alert('hello');
    }

    ```

## event listener() :

### addEventListener() :

- it is used to add an event listener to an element

    ```
    element.addEventListener('event',function(){
        //task
    })

    js:

    let btn = document.querySelector('button');

    btn.addEventListener('click',function(){
        alert('hello');
    });

    ```

## keyboard events :

- it is used to add an event listener to an element when the key is pressed

    ```
    <button>click me!</button>

    js:

    let btn = document.querySelector('button');

    btn.addEventListener('click',fucntion(event){
        console.log(event);
        console.log('button pressed");
    });

    ```
- to get which key is press

    ```
    console.log(ecent.key);
    ```
- to get key code

    ```
    console.log(event.keyCode);
    ```

## form events :

- it is used to add an event listener to an element when the form is submitted

- to prevent event default action then we have to use preventDefault()

    ```
    form.addEventListener('submit',function(event){
        event.preventDefault();
    });
    ```

## extracting form data :

- to get entered data of input tag. Here InnerText won't work it has special attribute called 'value'

    ```
    <input type='text'>

    js:

    let input = document.querySelector('input');

    console.log(input.value);
    ```

## other events :

### change event :

- the change enent occurs when the value of an element is changed ( works only for input and textarea and select)

### input event :

- the input event occurs when the value of an element is changed ( works only for input and textarea    

