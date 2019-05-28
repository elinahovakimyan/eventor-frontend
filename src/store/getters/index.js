
export const getFoodInfo = (venueId, state) => {
  const matchingVenue = state.venue.venues.find(a => a.id === venueId);

  return matchingVenue ? matchingVenue.foodInfo : null;
};

export const getSelectedVenue = (state) => state.birthday.selectedServices.venue;
export const getSelectedCartoonHeroes = (state) => state.birthday.selectedServices.cartoonHeroes;
export const getSelectedGameShows = (state) => state.birthday.selectedServices.gameShows;
export const getSelectedDecorations = (state) => state.birthday.selectedServices.decorations;
