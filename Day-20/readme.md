## this keyword :

- this keyword is referes to an object that executing the current piece of code

- used when we want to acess obejct element in inside of function we use this

    ```
        let student = {
            name : 'pranay',
            age : 24,
            eng : 85,
            math : 90,
            sci : 90,
            avg() {
                let average = (this.eng + this.math + this.sci) / 3;
                console.log(average);
            }            
        }

    ```

## try and catch

- the try statement allows you define a block of code to be tested for errors while it is being executed 

- the catch statement allows you to define a block of code to be executed if an error occurs in try block.

    ```
        try {
            code to be tested;
        }catch{
            code to be executed if error occurs;
        }
    ```

## arrow fucnion

-  a name which does't contain any function name and fucntion keyword

    ```
    let sum = (a,b){
        console.log(a+b);
    }
    ```

## implicit return in arrow function

- if we are using a arrow fucntion to return only single element than we can skip return keyword

    ``` 
        const func = (arg1, arg2) => (value);
    ```

    ```
        let add = (a,b) => (a+b); 
    ```

## this with arrow fucntion 

- when using arrow fucntion the scope is "lexcial scope" / parent scope when we call

- when using normal function the scope "this depends on calling object"


## set TimeOut

- callback fucntion a function which is used as an argument in another function

- set timeout is used to display a message after certain time of delay.

    ```
        console.log('hai');

        setTimeOut( () => {
            console.log('pranay');
            }, 4000);
        console.log('welcome to);
    ```

## set Interval 

- set interval is wait for mentioned time  & executes the block of code again and again until we explicitly stop the interval using "clearInterval(id)"

    ```
        console.log('hai);
        setInterval( () => {
            console.log('pranay);
        },2000);
    ```
