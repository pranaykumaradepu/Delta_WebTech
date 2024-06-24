# loops

- used to iterate peace of code

    ```
    syntax :

    for(initalization; condition; updation){
        //code
    }

    example :
    
    //to print numbers from 1-5

    for(let i=0; i<=5; i++){
        console.log(i);
    }

    //to print 1-5 numbers in reverse
    
    for(let i=5; i>=1; i--){
        console.log(i);
    }

    //to print odd number values from 1-10

    for (i=1;i<=10; i+=2){      //for reverse order for loop is : for(let i=10; i>=1; i -= 2)
        console.log(i);
    }

    //to print odd numbers values form 2-10

    for (i=2; i<=10; i+=2){     //for reverse order for loop is : for(let i=10; i>=2; i -= 2)
        console.log(i);
    }

    ```

### while loop

- it is similar to for loop

    ```
        syntax : 
        
            declaration;
            while (conditon){
                code 
                increment ++ / decrement --
            }
        
        example :

            let i = 0;
            while (i<=10){
                cosole.log(i);
                i++;

            }

    ```

### for of loop :

- used to ietarate over collections. It directly access values in collection not the index values 

    ```
    syntax :
        for(let variableName of collection){
            code
        }
    
    example:
        let arr = ['a', 'b', 'c', 'd']

        for(letter of arr){
            console.log(letter)
        }

    ```

### nested loop

- writing a loop inside anothe loop

    ```
    let arr1 = [ [1,2,3], [4,5,6], [7,8,9]]
    for (i=0; i<arr1.length; i++){
        for (j=0;j<arr1[i].length; j++){
            console.log(arr1[i][j])
        }
    }
    ```