# object literals

- used to store data in key and value pair 
- property = (key, value pair)
- objects are collection of properties

### to Create Object

    ```
        let  object_LiteralName = {
            key : value,
            key : value,
            key : value
        }

        let person = {
            name : 'pranay',
            age : 24,
            gender : 'male'
        }
    ```
### to get values :

- we can get values in two ways
    - using square braket  ex : object['key']
    - using dot notaion    ex : object.key 

- note : In js objects the keys are internally converted into string we use any type of datatype, it also accept keywords like null, undefined
    - If we use 1 as key, internally it convoerts to string
    - while accessing internally it converts into string & matches the string of key i.e "1"

### to Add / Update values :

- #### add :
    ```
        objectName.key = newValue;
    ```
- #### update :
    ```
        objectName.exsistingKey = newValue;

    ```
- #### deletet :
    ```
        delete objectName.exsistingKey;

    ```

### object of object / nested objects

- storing multiple objects in single object
     
    ```
    syntax :

        let object = {
            key : {},
            key : {},
            key : {}
        }

    example : 

        let class = {
            student1 : {
                name : 'pranay',
                age : 24
            },
            student2 : {
                name : 'kumar',
                age : 23
            },
            student3 : {
                name : 'pk',
                age : 24
            }
        }
    
    ```

### array Of Object

- storing multiple objects in array

    ```
    syntax :

        let arrayName = [
            {object1},
            {object2},
            {object3}
        ]
    
    example :

        let students = [
            {
                name : 'pranay',
                agae : 24
            },
            {
                name : 'kumar',
                agae : 22
            },
            {
                name : 'pkp',
                agae : 25
            }
        ]
    ```

# Math Object :
- properties : 

    - Math.PI   -> 3.14

- methods :
    - #### abs() : 
        - converts negative Number to positive Number
        ```
            Math.abs(Number);

            Math.abs(-12)   o/p -> 12
        ```
    - #### pow() :
        - to get power of a number
        ```
            Math.pow(a,b);
            Math.pow(2,4);

        ```
    - #### floor() :
        - It rounds of any number 
        - used to round of nearest smallest integer value 
        ```
            Math.floor(float-number);
            Math.floor(5.1999);    -> 5
        ```
    - #### ceil() :
        - It also rounds of any number
        - used to round of nearest larger integer value
        ```
            Math.ceil(float-number);
            Math.ceil(7.5)  -> 8
        ```
    - #### random() :
        - gives random value from  0 - 1
        - it will noot give value as 1

### to generte random number :

     step - 1 : let num = Math.random()
     step - 2 : num = num * 10 // to get  1 - 10
     step - 3 : num = Math.floor(num)
     step - 4 : num = num + 1  // to get 10 also

### short hand ;

    let random = Math.floor(Math.random() * 10)

    let random = Math.floor(Math.random() * 10) + 1  // to get 10 also


 
