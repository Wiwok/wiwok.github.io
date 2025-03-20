function isTag(id) {
	const tagged = JSON.parse(window.localStorage.getItem('tagged'));
	if (!tagged || !tagged.includes(id)) return false;
	return true;
}

class Event {
	title;
	description;
	start;
	end;
	categories;
	geometry;
	id;
	sources;

	constructor(event, Category) {
		this.title = event.title;
		this.start = new Date(event.geometry[0].date);
		this.end = event.closed ? new Date(event.closed) : null;
		this.id = event.id;
		this.description = event.description ?? '';
		this.isTag = isTag(event.id);

		this.geometry = [];

		event.geometry.forEach(element => {
			this.geometry.push({
				coordinates: element.coordinates,
				date: new Date(element.date),
				magnitudeUnit: element.magnitudeUnit,
				magnitudeValue: element.magnitudeValue,
				type: element.type
			});
		});

		this.categories = [];

		event.categories.forEach(element => {
			this.categories.push(new Category(element.title, element.id));
		});

		this.sources = [];

		event.sources.forEach(element => {
			this.sources.push({ id: element.id, url: element.url });
		});
	}

	static async create(event) {
		const Category = await import('./category.js')
			.then(res => res.default)
			.catch(console.error);

		return new Event(event, Category);
	}

	genMap() {
		let lng, lat;

		if (this.geometry[0].type === 'Point') {
			[lng, lat] = this.geometry[0].coordinates;
		} else if (this.geometry[0].type === 'Polygon') {
			[lng, lat] = this.geometry[0].coordinates[0][0];
		} else {
			[lng, lat] = [0, 0];
		}

		const map = L.map('map').setView([lat, lng], 5);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; OpenStreetMap contributors'
		}).addTo(map);

		this.geometry.forEach(geo => {
			if (!geo) return;

			const { type, coordinates } = geo;

			if (type === 'Point') {
				L.marker([coordinates[1], coordinates[0]])
					.addTo(map)
					.bindPopup(`<b>${this.title || 'Event'}</b><br>${geo.date?.toLocaleDateString() || ''}`);
			} else if (type === 'Polygon') {
				const polygonCoordinates = coordinates[0].map(coord => [coord[1], coord[0]]);
				L.polygon(polygonCoordinates, { fillOpacity: 0.4 })
					.addTo(map)
					.bindPopup(`<b>${this.title || 'Event'}</b><br>${geo.date?.toLocaleDateString() || ''}`);
			}
		});
	}

	getCard() {
		const container = document.createElement('a');

		container.classList.add('EventCard');
		container.href = '/event.html?id=' + this.id;

		container.innerHTML = `
		<div class='left'>
			<h3>${this.title}</h3>
			<div>${
				this.end
					? 'From ' + this.geometry[0].date.toLocaleDateString() + ' to ' + this.end.toLocaleDateString()
					: 'Since ' + this.geometry[0].date.toLocaleDateString()
			}</div>
		</div>
		<div>
			<div class="Categories">${this.categories.map(cat => cat.getHTML()).join('')}
			</div>
		</div>
    `;

		return container;
	}

	getPage() {
		const container = document.createElement('div');

		container.classList.add('Event');

		container.innerHTML = `
		<div>
			<h3>${this.title}</h3>
			<p>${this.description}</p>
			<div class="Categories">${this.categories.map(cat => cat.getLinkedHTML()).join('')}</div>
			<div><strong>Starting date:</strong> ${this.geometry[0].date.toLocaleDateString()}</div>
			<div><strong>End date:</strong> ${this.end ? this.end.toLocaleDateString() : 'In progress'}</div>
			<div class="Sources">
				${this.sources.map((val, i) => '<a target="_blank" href="' + val.url + '">Source ' + (i + 1) + '</a>').join('')}
			</div>
			<button class='TagButton' id='tag'>${this.isTag ? 'Untag' : 'Tag'}</button>
		</div>
		<div>
			<div id='map'></div>
		</div>
    `;

		return container;
	}

	setTag(isTag) {
		if (isTag) {
			this.isTag = true;
			document.getElementById('tag').innerText = 'Untag';
		} else {
			this.isTag = false;
			document.getElementById('tag').innerText = 'Tag';
		}
	}

	toggleTag() {
		if (this.isTag) this.untag();
		else this.tag();
	}

	tag() {
		let tagged = JSON.parse(window.localStorage.getItem('tagged'));
		if (!tagged) tagged = [];
		tagged.push(this.id);
		window.localStorage.setItem('tagged', JSON.stringify(tagged));
		this.setTag(true);
	}

	untag() {
		let tagged = JSON.parse(window.localStorage.getItem('tagged'));
		if (!tagged) tagged = [];
		tagged = tagged.filter(res => res != this.id);
		window.localStorage.setItem('tagged', JSON.stringify(tagged));
		this.setTag(false);
	}
}

export default Event;
