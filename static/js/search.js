import { searchEvents } from './model/onlineInteractions.js';
import { renderEvents } from './view/event.js';
import {
	addCategory,
	getEndDate,
	getOption,
	getSearchTitle,
	getSelectedCategories,
	getStartDate,
	getStatus,
	loadCategories
} from './view/search.js';

function loadParameters() {
	const category = new URLSearchParams(window.location.search).get('category');
	if (!category) return;

	const option = getOption(category);

	if (option) {
		option.selected = true;
		addCategory();
	}

	search();
}

function search() {
	getSearchTitle().innerHTML = 'Searching...';

	searchEvents(getSelectedCategories(), getStartDate(), getEndDate(), getStatus()).then(renderEvents);
}

document.getElementById('search').addEventListener('click', search);

loadCategories();

loadParameters();
