function genMap(event) {
	let lng, lat;

	if (event.geometry[0].type === 'Point') {
		[lng, lat] = event.geometry[0].coordinates;
	} else if (event.geometry[0].type === 'Polygon') {
		[lng, lat] = event.geometry[0].coordinates[0][0];
	} else {
		[lng, lat] = [0, 0];
	}

	const map = L.map('map').setView([lat, lng], 5);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; OpenStreetMap contributors'
	}).addTo(map);

	event.geometry.forEach(geo => {
		if (!geo) return;

		const { type, coordinates } = geo;

		if (type === 'Point') {
			L.marker([coordinates[1], coordinates[0]])
				.addTo(map)
				.bindPopup(geo.date?.toLocaleDateString() || '');
		} else if (type === 'Polygon') {
			const polygonCoordinates = coordinates[0].map(coord => [coord[1], coord[0]]);
			L.polygon(polygonCoordinates, { fillOpacity: 0.4 })
				.addTo(map)
				.bindPopup(geo.date?.toLocaleDateString() || '');
		}
	});
}

export default genMap;
