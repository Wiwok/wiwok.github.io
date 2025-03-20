const URL_BASE = 'https://eonet.gsfc.nasa.gov/api/v3/';

async function loadRecentEvents() {
	const MyEvent = await import('./model/event.js')
		.then(result => result.default)
		.catch(console.error);

	return await Promise.all(
		(await (await fetch(URL_BASE + 'events?limit=20')).json()).events.map(ev => MyEvent.create(ev))
	);
}

async function RenderEvents(events) {
	const container = document.getElementsByClassName('Events').item(0);

	container.innerHTML = '';

	events.forEach(event => {
		container.appendChild(event.getCard());
	});
}

loadRecentEvents().then(RenderEvents);
