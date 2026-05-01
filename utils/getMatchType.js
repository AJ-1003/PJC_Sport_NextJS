const SOUTH_AFRICA_CITIES = ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Gqeberha"];

export const getMatchType = (game) => {
  if (!game?.city) return "AWAY";

  return SOUTH_AFRICA_CITIES.includes(game.city) ? "HOME" : "AWAY";
};
