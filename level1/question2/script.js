
var app = document.getElementById('root');

var container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);

request.onload = function () {
	var data = JSON.parse(this.response);

	data.forEach(todo => {
		var card = document.createElement('div');
		card.setAttribute('class', 'card');

		var h1 = document.createElement('h1');
		h1.textContent = todo.title;

		var h2 = document.createElement('h2');
		h2.textContent = "ID: " + todo.userId;

		var h3 = document.createElement('h3');
		h3.textContent = "Title: " + todo.id;

		var p = document.createElement('p');
		p.textContent = "Completed: " + todo.completed;

		container.appendChild(card);
		card.appendChild(h1);
		card.appendChild(h2);
		card.appendChild(h3);
		card.appendChild(p);
	});
}

request.send();


