import Category from './category.js';
import { addTag, isTag, removeTag } from './storage.js';

class Event {
	title;
	description;
	start;
	end;
	categories;
	geometry;
	id;
	sources;

	constructor(event) {
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

	toggleTag() {
		if (this.isTag) this.untag();
		else this.tag();
		return this.isTag;
	}

	tag() {
		addTag(this.id);
		this.isTag = true;
	}

	untag() {
		removeTag(this.id);
		this.isTag = false;
	}
}

export default Event;
