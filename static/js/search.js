const URL_BASE = 'https://eonet.gsfc.nasa.gov/api/v3/';

const CATEGORIES = [
	{ id: 'drought', name: 'Drought' },
	{ id: 'dustHaze', name: 'Dust and Haze' },
	{ id: 'earthquakes', name: 'Earthquakes' },
	{ id: 'floods', name: 'Floods' },
	{ id: 'landslides', name: 'Landslides' },
	{ id: 'manmade', name: 'Manmade' },
	{ id: 'seaLakeIce', name: 'Sea and Lake Ice' },
	{ id: 'severeStorms', name: 'Severe Storms' },
	{ id: 'snow', name: 'Snow' },
	{ id: 'tempExtremes', name: 'Temperature Extremes' },
	{ id: 'volcanoes', name: 'Volcanoes' },
	{ id: 'waterColor', name: 'Water Color' },
	{ id: 'wildfires', name: 'Wildfires' }
];

function getSelectedCategories() {
	const categories = document.getElementsByClassName('Categories').item(0).children;

	const categoriesConcat = [];
	for (let category of categories) {
		categoriesConcat.push(category.classList.item(1));
	}

	return categoriesConcat.join(',');
}

async function searchEvents() {
	document.getElementsByClassName('Events').item(0).innerHTML = 'Searching...';

	const MyEvent = await import('./model/event.js')
		.then(result => result.default)
		.catch(console.error);

	let url = URL_BASE + 'events?limit=20';

	const categories = getSelectedCategories();

	if (categories.length > 0) url += '&category=' + categories;

	const startDate = document.getElementById('startDate').value;
	if (startDate) url += '&start=' + startDate;

	const endDate = document.getElementById('endDate').value;
	if (endDate) url += '&end=' + endDate;

	const select = document.getElementById('status');
	const status = select.options[select.selectedIndex].value;

	url += '&status=' + status;

	const events = await Promise.all((await (await fetch(url)).json()).events.map(ev => MyEvent.create(ev)));
	return events;
}

async function RenderEvents(events) {
	const container = document.getElementsByClassName('Events').item(0);

	if (events.length == 0) return (container.innerHTML = 'No results.');

	container.innerHTML = '';

	events.forEach(event => container.appendChild(event.getCard()));
}

function loadCategories() {
	const select = document.getElementById('categorySelect');

	CATEGORIES.forEach(val => {
		const element = document.createElement('option');
		element.classList.add(val.id);
		element.classList.add('Category');
		element.innerText = val.name;
		element.value = val.id;
		select.appendChild(element);
	});

	select.addEventListener('change', addCategory);
}

function removeCategory(category) {
	const el = document.getElementsByClassName(category).item(0);
	if (el) el.remove();

	const original = CATEGORIES.find(cat => cat.id === category);
	if (!original) return;

	const option = document.createElement('option');
	option.value = original.id;
	option.text = original.name;

	const select = document.getElementById('categorySelect');
	select.appendChild(option);

	const optionsArray = Array.from(select.options);
	optionsArray.sort((a, b) => a.text.localeCompare(b.text));

	select.innerHTML = '';
	optionsArray.forEach(opt => select.appendChild(opt));
}

async function addCategory() {
	const Category = await import('./model/category.js')
		.then(res => res.default)
		.catch(console.error);

	const select = document.getElementById('categorySelect');
	const item = select.options[select.selectedIndex];
	const category = new Category(item.text, item.value);

	document.getElementById('searchCategories').appendChild(category.getRemovableHTML(removeCategory));

	const optionToRemove = select.querySelector(`option[value="${item.value}"]`);
	if (optionToRemove) optionToRemove.remove();

	if (select.options.length > 0) select.value = select.options[0].value;
}

function loadParameters() {
	const category = new URLSearchParams(window.location.search).get('category');
	if (!category) return;

	const select = document.getElementById('categorySelect');
	const option = select.querySelector(`option[value="${category}"]`);
	if (option) {
		option.selected = true;
		addCategory();
	}

	searchEvents().then(RenderEvents);
}

document.getElementById('search').addEventListener('click', () => searchEvents().then(RenderEvents));

loadCategories();

loadParameters();
