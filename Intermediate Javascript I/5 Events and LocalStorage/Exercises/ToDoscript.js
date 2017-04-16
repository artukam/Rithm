window.onload = function () {
	var form = document.querySelector(".task-form");
	var addTask = document.querySelector("#add-task");
	var activeList = document.querySelector(".active-list");
	var completeList = document.querySelector(".completed-list");
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
		activeList.appendChild(newTask);
		newTask.appendChild(newButton);
		newTask.appendChild(newTaskText);
		newButton.addEventListener("click", function(event) {
			event.preventDefault();
			var completedTask = document.createElement("li");
			completedTask.classList.add("list-group-item");
			completedTask.classList.add("completed-tasks");
			completedTask.innerText = newTaskText.innerText;
			completeList.appendChild(completedTask);
			newButton.parentElement.remove();
		})
		form.reset();
	})
	// Complete task and move to completed task list

}