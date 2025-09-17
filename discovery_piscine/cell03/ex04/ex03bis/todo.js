
const list = document.getElementById("ft_list");
const popup_win = document.getElementById("popup");
let current_tagert = null;

function updateCookie() {
	let items = Array.from(list.children).map(div => div.textContent);
	let str = JSON.stringify(items);
	let date = new Date();
	date.setTime(date.getTime() + (2 * 24 * 60 * 60 * 1000));
	document.cookie = "todos=" + str +"; " + "path=/; " + "expires=" + date.toUTCString();
}

function addNewDiv(new_todo) {
	const newDiv = document.createElement("div");
	newDiv.textContent = new_todo;
	list.insertBefore(newDiv, list.firstChild);
}

list.addEventListener("click", function (event){
	current_tagert = event.target;
	popup_win.style.display = "block";

	removeChildDiv(event);
});

function removeChildDiv(event)
{
	document.getElementById("yes-button").onclick = () => {
		event.target.remove();
		updateCookie();
		popup_win.style.display = "none";
	};
	document.getElementById("no-button").onclick = () => {
		popup_win.style.display = "none";
	};
}

function buttonClick() {
	let new_todo = prompt("New TO DO:");
	if (new_todo !== null && new_todo.trim() !== "")
	{
		addNewDiv(new_todo);
		updateCookie();
	}
};

function rebuildDOM() {
	let cookies = document.cookie.split("; ");
	let todos_cookie = cookies.find(c => c.startsWith("todos="));
	let todos_value = todos_cookie ? todos_cookie.split("=")[1] : null;
	if (todos_value)
	{
		let todo_list = JSON.parse(todos_value);
		for (let i = todo_list.length - 1; i >= 0; i--) {
			addNewDiv(todo_list[i]);
		}
	}
}

document.addEventListener("DOMContentLoaded", () => {
	rebuildDOM();
});