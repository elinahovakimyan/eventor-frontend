export const getFoodInfo = (venueId, state) => state.venue.venues.find(a => a.id === venueId).foodInfo;
