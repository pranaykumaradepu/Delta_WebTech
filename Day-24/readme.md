## Event Bubbling:

Event bubbling is a mechanism in JavaScript where an event triggered on a nested element "bubbles up" through its parent elements in the DOM hierarchy. When an event occurs on an element, it first runs the handlers on it, then on its parent, and so on up to the root.


    <div id="outer">
        <div id="inner">
        <button id="button">Click me</button>
        </div>
    </div>

    <script>
    document.getElementById('button').addEventListener('click', function() {
        console.log('Button clicked');
    });

    document.getElementById('inner').addEventListener('click', function() {
        console.log('Inner div clicked');
    });

    document.getElementById('outer').addEventListener('click', function() {
        console.log('Outer div clicked');
    });
    </script>

    When the button is clicked, the output will be:
    Button clicked
    Inner div clicked
    Outer div clicked
    

This demonstrates how the click event bubbles up from the button to its parent elements.
## Event Delegation:

Event delegation is a technique where you attach a single event listener to a parent element to handle events for its child elements, even those added dynamically. It leverages event bubbling to efficiently manage events for multiple elements.

Example:

    <ul id="todo-list">
    <li>Task 1</li>
    <li>Task 2</li>
    <li>Task 3</li>
    </ul>

    <script>
    document.getElementById('todo-list').addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
        console.log('Clicked on:', e.target.textContent);
        }
    });
    </script>

    In this example, instead of adding click listeners to each <li>, we add one to the parent <ul>. 
    This handles clicks on all list items, including those added later.