Star Rating Explanation

1. Selecting the Star Container

let starContainer = document.getElementById("star-container");
This line selects the element with the ID "star-container" from the HTML document and stores it in the variable starContainer.
document.getElementById("star-container"): The getElementById method is used to find a single element by its unique ID, which is "star-container" in this case.
starContainer: This variable holds the reference to the element that contains all the star elements (presumably used for a rating system).
2. Selecting the Star Elements

let star = document.querySelectorAll(".star");
This line selects all elements with the class name "star" and stores them in the variable star.
document.querySelectorAll(".star"): The querySelectorAll method is used to select all elements that match the CSS selector .star, which means all elements with the class="star" in the document. It returns a NodeList of all the matching elements.
star: This variable contains a list of all the stars that will be interacted with in the rating system.
3. Variable to Track Filled Stars

let filled = 0;
This line initializes a variable filled to keep track of the number of stars that have been "filled" (selected).
filled: The variable starts at 0 because, initially, no stars are selected.
4. Click Event Listener

starContainer.addEventListener("click", function(e) 
This line adds an event listener to starContainer that listens for a "click" event.
addEventListener("click", function(e) {...}): This method sets up a function to be called whenever the user clicks anywhere inside the starContainer.
The e parameter represents the event object, which contains details about the event that occurred (in this case, the click event).
4.1. Getting the Clicked Star's Index

let currentValue = e.target.dataset.index;
This line retrieves the data-index attribute of the star that was clicked.
e.target: Refers to the specific element that was clicked inside starContainer.
e.target.dataset.index: The dataset object contains all the data attributes (attributes that start with data-) of an element. Here, data-index is used to store the star's index (its position in the list of stars).
currentValue: Holds the index of the star that was clicked, which will be used to determine how many stars should be filled.
4.2. Logging Filled and Current Value

console.log("filled", filled);
console.log("currentValue", currentValue);
These lines log the current value of the filled variable and the currentValue (index of the clicked star) to the console for debugging purposes.
This helps in seeing how many stars are currently filled and which star was clicked.
4.3. Removing Filled Stars

for(let i = 0; i < filled; i++) 
{
    star[i].classList.remove("currValue");
}
This loop removes the "currValue" class from the stars that are currently filled.
for(let i = 0; i < filled; i++): This loop runs for all the stars that are currently filled, based on the value of filled. It ensures that the previous "filled" state of the stars is cleared before filling the new stars.
star[i].classList.remove("currValue"): For each filled star, the class "currValue" is removed, which likely makes the star appear unfilled (e.g., changes the color back to default).
4.4. Filling the Clicked Stars

for(let i = 0; i < currentValue; i++) 
{
    star[i].classList.add("currValue");
}
This loop adds the "currValue" class to the stars that should be filled, based on the user's click.
for(let i = 0; i < currentValue; i++): This loop runs from 0 to currentValue, which is the number of stars that the user clicked on.
star[i].classList.add("currValue"): For each star up to the clicked index, the class "currValue" is added, which visually "fills" the star (e.g., changes its color).
4.5. Displaying the Current Value

document.getElementById("display").innerText = `${currentValue}`;
This line updates the text content of an element with the ID "display" to show the current value (the number of stars clicked).
document.getElementById("display"): Selects the element with the ID display.
.innerText = ${currentValue}``: Sets the inner text of the selected element to the value of currentValue.
4.6. Updating the Filled Variable

filled = currentValue;
This updates the filled variable to the current number of stars that are filled based on the user's click.
The next time a star is clicked, this variable will be used to know how many stars were previously filled.
5. Mouseover Event Listener

starContainer.addEventListener("mouseover", function(e) 
This sets up an event listener for the mouseover event on starContainer.
addEventListener("mouseover", function(e) {...}): The mouseover event fires whenever the user moves the mouse over the starContainer or any of its child elements (in this case, the stars).
5.1. Getting the Hovered Star's Index

let currentValue = e.target.dataset.index;
Similar to the click event, this retrieves the data-index of the star that the mouse is currently hovering over.
5.2. Logging the Hovered Value

console.log("abc", currentValue);
Logs the currentValue (the index of the hovered star) to the console for debugging purposes.
5.3. Removing All Filled Stars on Hover

for(let i = 0; i < 5; i++) 
{
    star[i].classList.remove("currValue");
}
This loop clears the filled state of all stars when the mouse hovers over the stars, preparing to temporarily fill the hovered stars.
for(let i = 0; i < 5; i++): Loops through all 5 stars (assuming the rating system has 5 stars).
star[i].classList.remove("currValue"): Removes the currValue class from each star to reset their visual state.
5.4. Filling the Stars Based on Hover

for(let i = 0; i < currentValue; i++) 
{
    star[i].classList.add("currValue");
}
This loop temporarily fills the stars up to the hovered star based on currentValue.
When the user hovers over a star, the stars up to that index are filled to provide visual feedback.
6. Mouseout Event Listener

starContainer.addEventListener("mouseout", function(e) 
This sets up an event listener for the mouseout event on starContainer.
addEventListener("mouseout", function(e) {...}): The mouseout event fires when the mouse leaves the starContainer or any of its child elements (in this case, the stars).
6.1. Removing the Hovered Stars' Filled State

for(let i = 0; i < filled; i++) 
{
    star[i].classList.remove("currValue");
}
This loop clears the filled state of the stars when the mouse leaves the star area.
It removes the temporary filled state applied during the mouseover event.
6.2. Restoring the Previously Clicked Stars

for(let i = 0; i < filled; i++) 
{
    star[i].classList.add("currValue");
}
This loop restores the stars that were filled based on the last click event (tracked by the filled variable).
After the mouse leaves the star area, it resets the stars to their previous state (based on the user's last click).
