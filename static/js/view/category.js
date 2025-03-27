function genCategoryRemovableHTML(category, onRemove) {
	const container = document.createElement('div');
	container.classList.add('Category');
	container.classList.add(category.id);

	const title = document.createElement('span');
	title.innerText = category.title;
	container.appendChild(title);

	const cross = document.createElement('button');
	cross.addEventListener('click', () => onRemove(category.id));
	cross.innerHTML = 'X';
	cross.className = 'removeCategory';

	container.appendChild(cross);

	return container;
}

function genCategoryHTML(category) {
	return "<div class='Category " + category.id + "'>" + category.title + '</div>';
}

function genCategoryLinkedHTML(category) {
	return (
		"<a href='/search.html?category=" +
		category.id +
		"' class='Category " +
		category.id +
		"'>" +
		category.title +
		'</a>'
	);
}

export { genCategoryHTML, genCategoryLinkedHTML, genCategoryRemovableHTML };
