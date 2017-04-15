/*
Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. 
You can do this either using window.onload or adding an event listener for DOMContentLoaded.
*/

window.onload = function () {
/*
Replace the text "Change me" with "Hello World!".
*/
	var heading = document.querySelector("#change_heading");
	heading.innerText = "Hello World!";

/*
When a user hovers over one of the colored boxes change the 
text to display the color that is being hovered over.
*/
	
	var colorText = document.querySelector(".selected");
	var section = document.querySelector("section");
	section.addEventListener("mouseover", function(event) {
		colorText.innerText = event.target.className;
	})
/*
Create a new div element.
*/
	var newDiv = document.createElement("div");
/*
Give your new div a class of purple and style it so that it 
has a background color of purple.
*/
	newDiv.classList.add("purple");

/*
Append your new div to the page to the section tag.
*/
	section.appendChild(newDiv);

/*
Create a racing game with the two cars. When the race button is pressed, the two cars should move across the screen until one of them is at the end of the screen. 
When one of the blocks reaches the end - you should alert "winner!"
*/
	var button = document.querySelector("button");
	var car1 = document.querySelector(".car1");
	var car2 = document.querySelector(".car2");
	car1.style["margin-left"] = 0 + "px";
	car2.style["margin-left"] = 0 + "px";

	button.addEventListener("click", function() {
		var car1Timer = setInterval(function() {
			car1.style["margin-left"] = parseInt(car1.style["margin-left"]) + Math.random() * 10 + "px";
			if (parseInt(car1.style["margin-left"]) > document.body.clientWidth) {
				clearInterval(car1Timer);
				clearInterval(car2Timer);
				car1.style["margin-left"] = 0 + "px";
				car2.style["margin-left"] = 0 + "px";
				alert("Car 1 wins!");
			}
		}, 30)

		var car2Timer = setInterval(function() {
			car2.style["margin-left"] = parseInt(car1.style["margin-left"]) + Math.random() * 10 + "px";
				if (parseInt(car2.style["margin-left"]) > document.body.clientWidth) {
					clearInterval(car1Timer);
					clearInterval(car2Timer);
					car1.style["margin-left"] = 0 + "px";
					car2.style["margin-left"] = 0 + "px";
					alert("Car 2 wins!");
			}
		}, 30)
	});

}