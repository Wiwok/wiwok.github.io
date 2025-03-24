import Event from './event.js';

const URL_BASE = 'https://eonet.gsfc.nasa.gov/api/v3/';

async function fetchRecentEvents() {
	return (await (await fetch(URL_BASE + 'events?limit=20')).json()).events.map(ev => new Event(ev));
}

async function fetchEvents(events) {
	return await Promise.all(
		events.map(async val => new Event(await (await fetch(URL_BASE + 'events/' + val)).json()))
	);
}

async function fetchEvent(id) {
	return new Event(await (await fetch(URL_BASE + 'events/' + id)).json());
}

async function searchEvents(categories, startDate, endDate, status) {
	let url = URL_BASE + 'events?limit=20';

	if (categories.length > 0) url += '&category=' + categories;

	if (startDate) url += '&start=' + startDate;

	if (endDate) url += '&end=' + endDate;

	url += '&status=' + status;

	return (await (await fetch(url)).json()).events.map(ev => new Event(ev));
}

export { fetchEvent, fetchEvents, fetchRecentEvents, searchEvents };
