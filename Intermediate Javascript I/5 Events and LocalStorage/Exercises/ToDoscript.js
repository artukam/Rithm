window.onload = function () {
	var form = document.querySelector(".task-form");
	var addTask = document.querySelector("#add-task");
	var activeList = document.querySelector(".active-list");
	var completeList = document.querySelector(".completed-list");
	var clearButton = document.querySelector(".label-danger")
	var storage = [];
	// Import items from local storage
	var retrieveStorage = JSON.parse(localStorage.getItem("ToDoList"));
	if (Array.isArray(retrieveStorage)) {
		storage = retrieveStorage;
	}
	
	function retrieveItems(arrayValue) {
		if(arrayValue["status"] === "active") {
			var newTask = document.createElement("li");
			var newButton = document.createElement("button");
			var newTaskText = document.createElement("span");
			newTask.classList.add("list-group-item");
			newTask.classList.add("active-tasks");
			newButton.setAttribute("type", "button");
			newButton.classList.add("checkbutton");
			newTaskText.classList.add("list-task");
			newTaskText.innerText = " " + arrayValue["text"];
			newButton.addEventListener("click", function(event) {
				event.preventDefault();
				var completedTask = document.createElement("li");
				completedTask.classList.add("list-group-item");
				completedTask.classList.add("completed-tasks");
				completedTask.innerText = newTaskText.innerText;
				completeList.appendChild(completedTask);
				if (storage.length > 0) {
					for (var i = 0; i < storage.length; i++) {
						if(storage[i]["text"] === newTaskText.innerText && storage[i]["status"] === "active") {
							storage.splice(i, 1);
							break;
						}
					}
				}
				var completeObj = {
					text: completedTask.innerText,
					status: "completed"
				}
				storage.push(completeObj);
				localStorage.setItem("ToDoList", JSON.stringify(storage));
				newButton.parentElement.remove();
			})
			activeList.appendChild(newTask);
			newTask.appendChild(newButton);
			newTask.appendChild(newTaskText);
		} else if (arrayValue["status"] === "completed") {
			var completedTask = document.createElement("li");
			completedTask.classList.add("list-group-item");
			completedTask.classList.add("completed-tasks");
			completedTask.innerText = arrayValue["text"];
			completeList.appendChild(completedTask);
		}
	}
	
	if (storage.length > 0) {
		for (var i = 0; i < storage.length; i++) {
			retrieveItems(storage[i]);
		}
	}

	// Create new item in list
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		var newTask = document.createElement("li");
		var newButton = document.createElement("button");
		var newTaskText = document.createElement("span");
		newTask.classList.add("list-group-item");
		newTask.classList.add("active-tasks");
		newButton.setAttribute("type", "button");
		newButton.classList.add("checkbutton");
		newTaskText.classList.add("list-task");
		newTaskText.innerText = " " +addTask.value;
		// Create button to complete task
		newButton.addEventListener("click", function(event) {
			event.preventDefault();
			var completedTask = document.createElement("li");
			completedTask.classList.add("list-group-item");
			completedTask.classList.add("completed-tasks");
			completedTask.innerText = newTaskText.innerText;
			completeList.appendChild(completedTask);
			if (storage.length > 0) {
				for (var i = 0; i < storage.length; i++) {
					if(storage[i]["text"] === newTaskText.innerText && storage[i]["status"] === "active") {
						storage.splice(i, 1);
						break;
					}
				}
			}
			var completeObj = {
				text: completedTask.innerText,
				status: "completed"
			}
			storage.push(completeObj);
			localStorage.setItem("ToDoList", JSON.stringify(storage));
			newButton.parentElement.remove();
		})
		activeList.appendChild(newTask);
		newTask.appendChild(newButton);
		newTask.appendChild(newTaskText);
		// Add new item to storage
		var obj = {
			text: newTaskText.innerText,
			status: "active"
		};
		storage.push(obj);
		localStorage.setItem("ToDoList", JSON.stringify(storage));
		form.reset();
	})
	// Clear completed
	clearButton.addEventListener("click", function(event) {
		event.preventDefault();
		var allCompletedTasks = document.querySelectorAll(".completed-tasks")
		if (allCompletedTasks.length > 0) {
			while(completeList.firstChild) {
				completeList.removeChild(completeList.firstChild);
			}
		}
		if (storage.length > 0) {
			for (var i = storage.length - 1; i >= 0; i--) {
				if (storage[i]["status"] === "completed") {
					storage.splice(i, 1);
				}
			}
		localStorage.setItem("ToDoList", JSON.stringify(storage));
		}
	})
}