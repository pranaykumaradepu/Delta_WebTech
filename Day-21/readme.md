## array Methods :

### forEach() :

- it takes callback as an argument these are higherOrderFunction
- we use this to aceess individual elements of an array
    ```
        syantax : 
            array.forEach(sime function defination / name)

        example :
            let arr = [1,2,3,4,5,6,7,8,9,10]

            function print(el){
                console.log(el);
            }
            array.forEach(print)
        
                    --or--
        array.forEach(function(el){
            console.log(el);
        });
    ```

### map() :

- It takes function as an argument and creates a new array

    ```             
        syntax :
            let neeArray = map(somefucntion defination / name)

        example :       

            let arra = [1,2,3,4]

            let sqr = arra.map(function(el){
                return el*el
            });
    ```

### filter() :

- It filter the array if the codnition is true and creates a new array else it does't store in new array 

    ```
        syantx :
            let newArray = arr.filter(some function defination / name);

        example :

            let num =  [1,2,3,4,5,6,7,8,9,10]

            let even = num.filter((el) => (el%2==0));
    ```

### every() :

- returns **true** if all elements of array gives true for the condition else returns **false**

    ```
        synatax :
            array.every(some function defination / name);

        example :

            let num =  [1,2,3,4,5,6,7,8,9,10]

            let even = num.every((el) => (el%2==0));  //flase

            let num2 = [2,4,6,8,10]

            let even2 = num2.every((el) => (el%2==0));  //true
    
    ```

### some() :

- returns **true** if atleast one element of array gives true for the condition else returns **false**

    ```
        synatax :
            array.some(some function defination / name);

        example :

            let num =  [1,2,3,4,5,6,7,8,9,10]

            let even = num.some((el) => (el%2==0));  //true

            let num2 = [1,3]

            let even2 = num2.some((el) => (el%2==0));  //false
    ```

### reduce() :

- reduce the array to single value.

    ```
        syntax :
            array.reduce(some function defination / name)

        example :
            let arr = [1,2,3,4]

            let sum = arr.reduce((res,el) => (res+el))
    ```

### default parameter() :

- giving a default value to argument

    ```

    fucntion func(a,b=2){
        return a+b   
    }

    ```

- note if you pass default parameter to first element & then pass single argument it does't mean the single argument assign to second value , Js assigns the value to first argument only.

### spread() :

- expands an iterable into multiple values 

    ```
        function func(...args){
            //task
        }

        example :

        let arr = [1,2,3,4,5]

        Math.min(...arr); //1    // we use (...) as spread operator 
        console.log(...arr)  //1,2,3,4,5
 
    ```
### spread with array literals :

  ```

    let arr = [1,2,3,4,5]

    let arr2 = [...arr]

    console.log(arr2) -> [1,2,3,4,5]

    let char = [...'hello']

    console.log(char) -> [h,e,l,l,o]
  ```

- to concat two arrays

    ```
    let new = [...arr1, ...arr2]
    ```

### spread with object literals :

    ```
        let data = {
            email : 'pranay00@gmail.com',
            password : 'pr1@#96'
        }

        let dataCopy = {...data, id=123}
    ```

### destructing :

- strong values of an array into multiple variables

    ```
        let names = ['pranay', 'kumar', 'adepu']

        let ['firstName', 'middleName'] = names;

        cosnole.log(firstName, middleName)      //pranay kumar

    ```
- here firstName will store firstIndex value of an array

- here middleName will store secondIndex value of an array

- if we want to store first and last except middle

    ```
        let names = ['pranay', 'kumar', 'adepu']

        let [firstName, , lastName] = names;

        cosnole.log(firstName, lastName)      //pranay adepu

    ```

### destructing with object literals :

    ```
        let data = {
            email : 'pranay00@gmail.com',
            password : 'pr1@#96'
        }

        let {email, password} = data;

        console.log(email, password)      //pranay00@gmail.com pr1@#96


        //to store in new variable

        let {email: mail, password: pass} = data; //here email is a key and mail is a variable

        //
    ```

    
