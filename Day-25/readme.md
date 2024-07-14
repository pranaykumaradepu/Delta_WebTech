## call stack :

- it is a callstack data structure which tracks the order in which functions are called

- it is a LIFO data structure

    ```js

        function one(){
            return 1;
        }

        fucntion two(){
            return one() + one();
        }

        fucntion three(){
            let answer = two() + one();
            console.log(answer);
        }

        three();

    ```
    // output :

    3

    <!-- flow of execution -->

    in step 1 : 

    it creates answer variable with undefined value. then 

    the callstack will store three() fucntion call


    in step 2 :

    it goes inside the three() function and store two() function call in the callstack


    in step 3 : 

    it goes inside the two() function and store one() function call in the callstack


    in step 4 : 

    it goes inside the one() function and return 1 in the callstack then it removes the one() function call from call stack

    in step 5 :

    it goes inside the one() function and return 1 in the callstack then it removes the one() function call from call stack and returns 2 

    in step 6 :

    it goes inside the one() function and return 1 in the callstack then it removes the one() function call from call stack and returns 3

## break points :

- used to track program execution used for debug the program.

## Js is single threaded :

- Js is single threaded language, it means only one thing can be executed at a time.

- to eradicate this problem we use callstack

- browser will store the callstack in the memory and gives back js after the execution

## Callback Hell:

- Callback hell refers to the situation where multiple nested callbacks make code difficult to read and maintain. It occurs when asynchronous operations are chained together, resulting in deeply nested function calls.

Example :

    ```js
        function getData(callback) {
            setTimeout(() => {
                callback('data');
            }, 1000);
        }   

        getData(function(a) {
            getMoreData(a, function(b) {
                getMoreData(b, function(c) {
                    getMoreData(c, function(d) {
                        getMoreData(d, function(e) {
                            console.log(e);
                        });
                    });
                });
            });
        });

    ```


This nested structure can become hard to follow and debug as complexity increases.


## Promises in JavaScript:

- A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

- Promises have three states:
  1. Pending: Initial state, neither fulfilled nor rejected.
  2. Fulfilled: The operation completed successfully.
  3. Rejected: The operation failed.

- Promises are created using the Promise constructor, which takes an executor function as an argument.

- Promises use .then() for success callbacks and .catch() for error handling.

- Promises can be chained to handle sequential asynchronous operations, improving code readability.

- The Promise.all() method can be used to handle multiple promises concurrently.

- Async/await is syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code.

- resolve is a function that is called when the promise is fulfilled, and reject is a function that is called when the promise is rejected.

Example:

    ```js
        const myPromise = new Promise((resolve, reject) => {
        // Asynchronous operation
        setTimeout(() => {
            const success = true;
            if (success) {
            resolve("Operation successful");
            } else {
            reject("Operation failed");
            }
        }, 1000);
        });

        myPromise
        .then(result => console.log(result))
        .catch(error => console.error(error));

    ```
## Promise Chaining:

- Promise chaining is a technique in JavaScript where multiple asynchronous operations are performed in sequence by attaching multiple .then() handlers to a promise.
- Each .then() handler returns a new promise, allowing for a chain of asynchronous operations.
- This approach helps avoid the "callback hell" problem and makes the code more readable and maintainable.
- Error handling can be done at the end of the chain using a single .catch() method.
- Example:


    ```js
    // Function to fetch data
    function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        resolve(data);
        }, 1000);
    });
    }

    // Function to process data
    function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const processedData = { ...data, age: 30 };
        resolve(processedData);
        }, 1000);
    });
    }

    // Function to save data
    function saveData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Saving data:", data);
        resolve();
        }, 1000);
    });
    }

    // Chain of promises
    fetchData()
    .then(result => processData(result))
    .then(processedData => saveData(processedData))
    .then(() => console.log("Data saved successfully"))
    .catch(error => console.error("An error occurred:", error));
    ```

- In this example, each operation (fetchData, processData, saveData) returns a promise, and they are executed in sequence.
