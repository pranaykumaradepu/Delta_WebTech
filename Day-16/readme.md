# String Methods

### trim() :
- Removes whitespaces from both starting and ending of the string.

    ```
    syntax : string.trim()
    ```

### toUpperCase() :
- to convert the lower text to upper text

    ```   
    synatax : string.toUpperCase()
    ```

### toLowerCase() :
- to convert the upper text to lower text

    ```   
    syntax : string.toLowerCase()
    ```

### indexOf() :
- returns the first index of the occurance of given value. 
- return -1 if value is not avaliable

    ```   
    syntax : string.indexOf(vlaue)
    ```

### method chaning : 
- applying multiple methods in single shot.

    ```   
    syntax : string.method1().method2()
    ```

### slice() :
- return a part of the string as a new string.

    ```   
    string.slice(start);
    string.slice(start,end);
    string.slice(-num) = string.slice(string.length - num); //to get values from reverse order 
    ```

### replace() :
- search for the given value in string and returns new string with the value replaced
- if we pass one letter as an argument it replace only first occurance only

    ```
    string.repalce('old_string','new_string')
    string.repalce('old_single_letter', 'new_single_letter')
    ```

### repeat() :
- returns a string with the number of copies of a string

    ```
    string.repeat(3)
    ``` 

# Array :
- Array is a linear collectionn of things 
- Array are mutable

## Array Methods :

### push() :
- Add elements at the end

    ```
    arrayName.push(newElement); 
    ```

### pop() :
- removes element from end and return the value

    ```
    arrayName.pop();
    ```

### unShift() :
- add element to start of an array

    ```
    arrayName.unshift(newElement);
    ```

### shift ():
- removes element from the start of an array

    ```
    arrayName.shift();
    ```

### idnexOf() :
- if element exist returns idnexOf element else return -1 if element not avaliable

    ```
    arrayName.indexOf(element);
    ```
### includes() : 
- search for a value if value found retunrs "true" else returns "false"

    ```
    arrayName.includes(element);
    ```
### concat() :
- merge two arrays into single array

    ```
    arrayName.concat(arrayName2);
     ```

### reverse() :
- used to reverse the array

   ```
    arrayName.reverse()
    ```
### slice() :
- copies a portion of an array

    ```
    arrayName.slice()     -> no changes applyed
    arrayName.slice(2)    -> slice from index_2 to end of the array
    arrayName.slice(2,3)  -> slice starts form index_2 to ends at index_3;
    arrayName.slice(-2)   -> slice from end two elements  
    ```

### splice() :
- removes / replpaces / add element in palce. It gives a array

    ```
    syntax : arrayName.splice(start, deleteCount, element1......elementN);

    arrayName.splice(4)                     -> removes element form the 4th index position to end. (It act like start index)
    arrayName.splice(0,1)                   -> removes 0-index elemet only. (to remove/delete a single element in array we can use this)
    arrayName.splice(0,1,'black','grey')    -> it removes from 0-index element only and adds two elements from 0-index  
    ```

### sort() :
- it is used to sort an array

    ```
    arrayName.sort()
    ```

#### const array :
- const array allows edit array elemts bit not allow to change the array
