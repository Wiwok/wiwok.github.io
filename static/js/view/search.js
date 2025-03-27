import Category from '../model/category.js';
import { genCategoryRemovableHTML } from './category.js';

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

function getSelect() {
	return document.getElementById('categorySelect');
}

function setSearchTitle(title) {
	document.getElementsByClassName('Events').item(0).innerHTML = title;
}

function getStartDate() {
	return document.getElementById('startDate').value;
}

function getEndDate() {
	return document.getElementById('endDate').value;
}

function getStatus() {
	const select = document.getElementById('status');
	return select.options[select.selectedIndex].value;
}

function getSelectedCategories() {
	const categories = document.getElementsByClassName('Categories').item(0).children;

	const categoriesConcat = [];
	for (let category of categories) {
		categoriesConcat.push(category.classList.item(1));
	}

	return categoriesConcat.join(',');
}

function loadCategories(search) {
	const select = getSelect();
	CATEGORIES.forEach(val => {
		const element = document.createElement('option');
		element.classList.add(val.id);
		element.classList.add('Category');
		element.innerText = val.name;
		element.value = val.id;
		select.appendChild(element);
	});

	select.addEventListener('change', addCategory);
	document.getElementById('search').addEventListener('click', search);
}

function addCategory() {
	const select = getSelect();
	const item = select.options[select.selectedIndex];
	const category = new Category(item.text, item.value);

	document.getElementById('searchCategories').appendChild(genCategoryRemovableHTML(category, removeCategory));

	select.querySelector(`option[value="${item.value}"]`)?.remove();

	if (select.options.length > 0) select.value = select.options[0].value;
}

function removeCategory(category) {
	const select = getSelect();
	const el = document.getElementsByClassName(category).item(0);
	if (el) el.remove();

	const original = CATEGORIES.find(cat => cat.id === category);
	if (!original) return;

	const option = document.createElement('option');
	option.value = original.id;
	option.text = original.name;

	select.appendChild(option);

	const optionsArray = Array.from(select.options);
	optionsArray.sort((a, b) => a.text.localeCompare(b.text));

	select.innerHTML = '';
	optionsArray.forEach(opt => select.appendChild(opt));
}

function getOption(category) {
	return getSelect().querySelector(`option[value="${category}"]`);
}

export {
	addCategory,
	getEndDate,
	getOption,
	setSearchTitle,
	getSelect,
	getSelectedCategories,
	getStartDate,
	getStatus,
	loadCategories
};
