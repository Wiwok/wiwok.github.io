const URL_BASE = 'https://eonet.gsfc.nasa.gov/api/v3/';

async function fetchEvents(tagged) {
	const MyEvent = await import('./model/event.js')
		.then(result => result.default)
		.catch(console.error);

	return Promise.all(tagged.map(async val => MyEvent.create(await (await fetch(URL_BASE + 'events/' + val)).json())));
}

function getTagged() {
	return JSON.parse(window.localStorage.getItem('tagged')) ?? [];
}

async function RenderEvents(events) {
	const container = document.getElementsByClassName('Events').item(0);

	container.innerHTML = '';

	if (events.length == 0) {
		return (container.innerHTML = 'You have no tagged events');
	}

	events.forEach(event => {
		container.appendChild(event.getCard());
	});
}

fetchEvents(getTagged()).then(RenderEvents);
