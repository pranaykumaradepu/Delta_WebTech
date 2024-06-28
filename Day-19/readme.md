## function 

- used to execute a block of code when we call it / need it

- to create

    ```
    syntax :

        function functionName{
            //task
        }
    ```

    ```
    example :

        function hello(){
            console.log('hai)
        }    
    ```

-  to call 

    ```
    funcionName();

    hello();
    ```

## function With Argument

- Value we pass to the function '

    ```
        function functionName(arg1, arg2){
            //task;
        }
    
        functionName(arg1,arg2);
    ```

- note : If we miss any argumenet it does't through any error. It says undefined

## return keyword

- return keyword is used to return some value from the function \

    ```
        function functionName(args){
            //task;

            return val;
        } 
    ```

- note : when we use return keyword after the return statemnts are not execute

## scope :

- scope determines the accessibility of variable, object, and function from diffrent parts of code

    - function scope
    - block scope
    - lexical scope

    ### function scope :

    - vaiable defined inside function are not accessialbe ( visable ) from outside of the funtion

    ### bloock scope :
    - variable declared inside a block cannot be accessed from outside of the block

    ### lexical scope :
    - a variable defined in outer function can be accesable inside inner function defined after the vaiable declaration 
    - we cannot acess inner function variable at outer function scope

## function expression :

- assining a function to a variable. we can call it as nameless function, it does't required any name.
- the value will be storred in a variable 

    ```
        let var = fucn(arg) {
            //task
        }
    ```
- to call

    ```
        varName();
    ```

## higher OrderFunction :

- a function that does one or more

    - takes one / multiple fucntion
    - return a function

    ```
        fucntion multipleGreet(func, count){
            for(let i=1; i<=n; i++){
                fucn();
            }
        }
        let greet.function(){
            console.log('hello);
        }

        multipleGreet(greet, 2);
    ```

## methods :

- actoion that can be perfomed on a object

    ```
        cost calc{
            add : function(a.b){
                return a+b;
            },
            sub : function(a.b){
                return a-b;
            },
            mul : function(a.b){
                return a*b;
            },
            div : function(a.b){
                return a/b;
            }
        }

        <!-- short hand -->

        const calc = {
            add(a,b){
                return a+b;
            },
            sub(a,b){
                return a-b;
            },
            mul(a,b){
                return a*b;
            },
            div(a,b){
                return a/b;
            }
        }
    ```