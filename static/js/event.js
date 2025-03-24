import { fetchEvent } from './model/onlineInteractions.js';
import { genEventPage } from './view/event.js';

function getId() {
	return new URLSearchParams(window.location.search).get('id');
}

function error() {
	document.getElementById('MainTitle').innerText = 'An error occurred';
}

async function main() {
	const id = getId();
	if (!id) return error();

	const event = await fetchEvent(id);
	if (!event) return error();

	genEventPage(event);
}

main();
