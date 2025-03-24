import { genCategoryHTML, genCategoryLinkedHTML } from './category.js';
import genMap from './map.js';

function genEventCard(event) {
	const container = document.createElement('a');

	container.classList.add('EventCard');
	container.href = '/event.html?id=' + event.id;

	container.innerHTML = `
	<div class='left'>
		<h3>${event.title}</h3>
		<div>${
			event.end
				? 'From ' + event.geometry[0].date.toLocaleDateString() + ' to ' + event.end.toLocaleDateString()
				: 'Since ' + event.geometry[0].date.toLocaleDateString()
		}</div>
	</div>
	<div>
		<div class="Categories">${event.categories.map(genCategoryHTML).join('')}
		</div>
	</div>
`;

	return container;
}

function genEventPage(event) {
	document.getElementById('MainTitle').innerText = 'Event details';

	const container = document.createElement('div');

	container.classList.add('Event');

	container.innerHTML = `
	<div>
		<h3>${event.title}</h3>
		<p>${event.description}</p>
		<div class="Categories">${event.categories.map(genCategoryLinkedHTML).join('')}</div>
		<div><strong>Starting date:</strong> ${event.geometry[0].date.toLocaleDateString()}</div>
		<div><strong>End date:</strong> ${event.end ? event.end.toLocaleDateString() : 'In progress'}</div>
		<div class="Sources">
			${event.sources.map((val, i) => '<a target="_blank" href="' + val.url + '">Source ' + (i + 1) + '</a>').join('')}
		</div>
		<button class='TagButton' id='tag'>${event.isTag ? 'Untag' : 'Tag'}</button>
	</div>
	<div>
		<div id='map'></div>
	</div>
`;

	document.getElementById('Event').appendChild(container);
	genMap(event);
	document.getElementById('tag').addEventListener('click', () => event.toggleTag());
}

function renderEvents(events) {
	const container = document.getElementsByClassName('Events').item(0);

	container.innerHTML = '';

	if (events.length == 0) {
		return (container.innerHTML = 'There is no elements to display.');
	}

	events.forEach(event => container.appendChild(genEventCard(event)));
}

export { genEventCard, genEventPage, renderEvents };
