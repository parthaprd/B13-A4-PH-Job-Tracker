#1

What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById() works with a single, unique element identified by its ID.

getElementsByClassName() works with multiple elements that share the same class name.

querySelector() works with only the first matching element.

For example:

<p class="text">Paragraph 1</p>
<p class="text">Paragraph 2</p>
const paragraph = document.querySelector(".text");
console.log(paragraph);

Here, querySelector() will select only “Paragraph 1”, because it returns the first match.

querySelectorAll() works with all matching elements and selects every element that matches the given selector.
----------------------------------------------------------------------------------------------------------------------

#2
How do you create and insert a new element into the DOM? 

i wil Create a element
const div = document.createElement("div");

then Add content or attributes
div.innerText = "Hello";

Insert it into the DOM
document.body.appendChild(div);

--------------------------------------------------------------------------------------------------------------------------------

#3
What is Event Bubbling?
Event Bubbling is a process where an event starts from the target element and then bubbles up to its parent elements in the DOM.

How it works:
When ywe click on an element, the event first runs on that element, then on its parent, then on the parent’s parent, and so on.

Example:
Clicking a button inside a div clicked:
button > div > body > document

--------------------------------------------------------------------------------------------------------------------------------
#4
What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where instead of adding event listeners to multiple child elements, we add one event listener to their parent element and handle events using event bubbling.

It is useful because it:
Improves performance by using fewer event listeners
Works for dynamically added elements

------------------------------------------------------------------------------------------------------------------------------------
#5
What is the difference between preventDefault() and stopPropagation()?

preventDefault() is used to stop the default browser behavior of an element.
For example, it prevents a form from submitting or a link from opening.
stopPropagation() is used to stop the event from bubbling up to parent elements.
