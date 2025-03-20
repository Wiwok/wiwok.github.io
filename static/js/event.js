const URL_BASE = 'https://eonet.gsfc.nasa.gov/api/v3/';

function getId() {
	return new URLSearchParams(window.location.search).get('id');
}

async function fetchEvent(id) {
	const MyEvent = await import('./model/event.js')
		.then(result => result.default)
		.catch(console.error);

	return await MyEvent.create(await (await fetch(URL_BASE + 'events/' + id)).json());
}

function error() {
	document.getElementById('MainTitle').innerText = 'An error occurred';
}

async function main() {
	const id = getId();
	if (!id) return error();

	const event = await fetchEvent(id);
	if (!event) return error();

	document.getElementById('MainTitle').innerText = 'Event details';
	document.getElementById('Event').appendChild(event.getPage());
	event.genMap();
	document.getElementById('tag').addEventListener('click', () => event.toggleTag());
}

main();
