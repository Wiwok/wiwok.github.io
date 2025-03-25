import { fetchEvent } from './model/onlineInteractions.js';
import { genError, genEventPage } from './view/event.js';

function getId() {
	return new URLSearchParams(window.location.search).get('id');
}

async function main() {
	const id = getId();
	if (!id) return genError();

	const event = await fetchEvent(id);
	if (!event) return error();

	genEventPage(event);
}

main();
