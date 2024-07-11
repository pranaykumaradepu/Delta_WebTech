# documnetObjectModel (DOM)

- it represents a documnet with a logical Tree
- it allows us to manipulate / change the webpage content.
- to see document in console 

    ```
    console.dir(document);
    ```
## selecting Elements :

- to select an element we use 
    
    ### getElementById :
    - returns the element as an object or null (if not found)

        ```
            document.getElementById(id);
        ```
    
    ### getElementsByClassName :
    - returns the elements as an HTML collection or an empty collection (if not found)

        ```
            document.getElementsByClassName(className);
        ```

    ### getElementsByTagName :
    - returns the elements as an HTML collection or an empty collection (if not found)

        ``` 
            document.getElementsByTagName(tagName);
        ```

    ### querySelector :
    - returns the first element or null (if not found)
    - allows us to select elements using css selectors

        ```
            document.querySelector(selector);

            ex : 

            document.querySelector('div');  // returns the first div

            document.querySelector('div p');  // returns the first p inside the first div
        ```

    ### querySelectorAll :
    - returns the elements as an HTML collection or an empty collection (if not found)
    - allows us to select elements using css selectors

        ```
            document.querySelectorAll(selector);
        ```

## Manipulating Attributes :

- to manipulate attributes we use the setAttribute() and getAttribute() method

    ```
        element.getAttribute(attributeName);     // returns the value of the attribute

        element.setAttribute(attributeName, attributeValue); // sets the value of the attribute

        element.removeAttribute(attributeName);  // removes the attribute

        element.hasAttribute(attributeName);  // returns true if the element has the attribute

        element.toggleAttribute(attributeName);  // toggles the attribute
        
    ```

## Manipulating Style :

- while we are maniplating style through Js it applys inline styling to the element, it won't change the style.css file code

## Manipulating Style Using ClassList :

- to manipulate style using classList we use the add(), remove() and toggle() methods

- to add new class to an element : 

    ```
    obj.classList.add('className');
    ```
- to remove a class from an element :

    ```
    obj.classList.remove('className');
    ```
- to check if class is present / not :

    ```
    obj.classList.contains('className');
    ```
- to toggle a class, adding it if not present and removing it if present :

    ```
    obj.classList.toggle('className');
    ```

## Navigation : 

- used to navigate through one element to another element

- here we have to use parentElement, childElement, previousElementSibling, nextElementSibling, childrenCount methods
    ```
    // Assuming we have the following HTML structure:
     <div id="parent">
       <p>First paragraph</p>
       <p id="middleParagraph">Middle paragraph</p>
       <p>Last paragraph</p>
     </div>

    // Get the middle paragraph element
    let middleParagraph = document.getElementById('middleParagraph');

    // Navigate to the parent element
    let parentElement = middleParagraph.parentElement;
    console.log(parentElement.id); // Output: "parent"

    // Navigate to the previous sibling
    let previousSibling = middleParagraph.previousElementSibling;
    console.log(previousSibling.textContent); // Output: "First paragraph"

    // Navigate to the next sibling
    let nextSibling = middleParagraph.nextElementSibling;
    console.log(nextSibling.textContent); // Output: "Last paragraph"

    // Get the first child of the parent
    let firstChild = parentElement.firstElementChild;
    console.log(firstChild.textContent); // Output: "First paragraph"

    // Get the last child of the parent
    let lastChild = parentElement.lastElementChild;
    console.log(lastChild.textContent); // Output: "Last paragraph"

    // Get the number of child elements
    let childCount = parentElement.children.length;
    console.log(childCount); // Output: 3
    ```

## Adding elements to documnet : 

- to create an element

    ```
    let p = document.createElement('p'); // creates a <p> element
    ```
- note : by just creating an element and not appending it to the document, the element will not be visible in the browser we have to manually append it to the document

    ### append() :

    ```
    document.body.appendChild(p);

    // or

    document.body.append(p);

    // or   

    p.appendTo(document.body);
    
    ```

    ### prepend() :

    - to add an element to the beginning of the document

        ```
            document.body.prepend(p);
        ```
    
    ### insertAdjacentElement() :

    - to insert an element in the middle of the document
        ```
            document.body.insertAdjacentElement(position, element);
        ```
    - here we have 4 positions : beforebegin, afterbegin, beforeend, afterend
    
        - beforebegin : inserts the element before the first child

        - afterbegin: inserts the element as the first child inside the target element 

        - beforeend: inserts the element as the last child inside the target element

        - afterend: inserts the element after the last child   

    ### removing elements :

    - to remove an element from the document

        ```
            document.body.removeChild(p);

            // or

            document.body.remove(p);

            // or

            p.remove(); 

            // or

            p.removeFrom(document.body);  
        ```
 