import { searchEvents } from './model/onlineInteractions.js';
import { renderEvents } from './view/event.js';
import {
	addCategory,
	getEndDate,
	getOption,
	getSelectedCategories,
	getStartDate,
	getStatus,
	loadCategories,
	setSearchTitle
} from './view/search.js';

function loadParameters() {
	const category = new URLSearchParams(window.location.search).get('category');
	if (!category) return;

	const option = getOption(category);

	if (option) {
		option.selected = true;
		addCategory();
		search();
	}
}

function search() {
	setSearchTitle('Searching...');

	searchEvents(getSelectedCategories(), getStartDate(), getEndDate(), getStatus()).then(renderEvents);
}

loadCategories();

loadParameters();
