export const getMatchStatus = (game) => {
  // Explicit override (best practice for API control)
  if (game.status === "TBA") return "TBA";

  if (!game.date) return "TBA";

  const matchDate = new Date(game.date);
  if (isNaN(matchDate.getTime())) return "TBA";

  const now = new Date();

  // Simple LIVE window (30 minutes before + 30 minutes after kick-off)
  const liveStart = new Date(matchDate.getTime() - 0.5 * 60 * 60 * 1000);
  const liveEnd = new Date(matchDate.getTime() + 0.5 * 60 * 60 * 1000);

  if (now >= liveStart && now <= liveEnd) return "LIVE";
  if (now < matchDate) return "UPCOMING";
  if (now > liveEnd) return "FINISHED";

  return "UPCOMING";
};
