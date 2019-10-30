export default {
  setPlaces(state, res) {
    state.places = res.data.results.map((val) => ({
      lat: val.geometry.location.lat,
      lng: val.geometry.location.lng,
      name: val.name,
      photos: val.photos || null,
      place_id: val.place_id,
      rating: val.rating,
      vicinity: val.vicinity
    }));
  },
  setLocation(state, location) {
    state.location = location;
  }
}
