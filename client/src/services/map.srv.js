
export function createMarker(latLng, map) {
	return new google.maps.Marker({
		position: latLng,
		map: map
	});
}

export function getCurrentCenter(map) {
	let center = map.getCenter();

	return {
		lat: center.lat(),
		lng: center.lng()
	};
}

export function panMapToLatLng(latLng, map) {
	var latLng = new google.maps.LatLng(latLng.lat, latLng.lng);
    map.panTo(latLng);
}

// export function getMarkerOptionsForComponent(marker) {
// 	return {
// 		id: marker.get('id'),
// 		lat: marker.get('lat'),
// 		lng: marker.get('lng'),
// 		map: window.map,
// 		text: marker.get('title'),
// 		draggable: marker.get('draggable'),
// 		animation: marker.get('animation'),
// 		onClick: this._onMarkerClick,
// 		onDragEnd: this.props.markerDragEnd
// 	};
// }
