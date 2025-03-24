function addTag(id) {
	let tagged = JSON.parse(window.localStorage.getItem('tagged'));
	if (!tagged) tagged = [];
	tagged.push(id);
	window.localStorage.setItem('tagged', JSON.stringify(tagged));
}

function removeTag(id) {
	let tagged = JSON.parse(window.localStorage.getItem('tagged'));
	if (!tagged) tagged = [];
	tagged = tagged.filter(res => res != id);
	window.localStorage.setItem('tagged', JSON.stringify(tagged));
}

function isTag(id) {
	const tagged = JSON.parse(window.localStorage.getItem('tagged'));
	if (!tagged || !tagged.includes(id)) return false;
	return true;
}

function getTagged() {
	return JSON.parse(window.localStorage.getItem('tagged')) ?? [];
}

export { addTag, getTagged, isTag, removeTag };
