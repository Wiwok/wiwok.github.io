class Category {
	title;
	id;
	constructor(title, id) {
		this.title = title;
		this.id = id;
	}

	getRemovableHTML(onRemove) {
		const container = document.createElement('div');
		container.classList.add('Category');
		container.classList.add(this.id);

		const title = document.createElement('span');
		title.innerText = this.title;
		container.appendChild(title);

		const cross = document.createElement('div');
		cross.addEventListener('click', () => onRemove(this.id));
		cross.innerText = 'X';
		cross.className = 'removeCategory';

		container.appendChild(cross);

		return container;
	}

	getHTML() {
		return "<div class='Category " + this.id + "'>" + this.title + '</div>';
	}

	getLinkedHTML() {
		return (
			"<a href='/search.html?category=" + this.id + "' class='Category " + this.id + "'>" + this.title + '</a>'
		);
	}
}

export default Category;
