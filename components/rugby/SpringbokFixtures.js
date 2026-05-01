// components/SpringbokFixtures.js

import styled from "styled-components";
import { getMatchStatus } from "../../utils/getMatchStatus";
import StatusBadge from "../badge/statusBadge";
import { getMatchType } from "../../utils/getMatchType";

export default function SpringbokFixtures({ games }) {
  const formatDate = (dateString) => {
    if (!dateString) {
      return {
        day: "TBA",
        date: "TBA",
        time: "TBA",
      };
    }

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return {
        day: "TBA",
        date: "TBA",
        time: "TBA",
      };
    }

    return {
      day: date.toLocaleDateString("en-ZA", { weekday: "short" }),
      date: date.toLocaleDateString("en-ZA", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      time: date.toLocaleTimeString("en-ZA", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  };

  const renderCard = (game) => {
    const { day, date, time } = formatDate(game.date);
    const status = getMatchStatus(game);
    const isNext = game.id === nextGameId;

    return (
      <Card key={game.id} $status={status} highlight={isNext}>
        <TopRow>
          <DateBlock>
            <Day>{day}</Day>
            <DateText>{date}</DateText>
          </DateBlock>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
            <StatusBadge status={status} />

            <TimeBlock>
              <Time>{time}</Time>
              {time !== "TBA" && <Kickoff>Kick-off</Kickoff>}
            </TimeBlock>
          </div>
        </TopRow>

        <Matchup>
          <Team>🇿🇦 Springboks</Team>
          <VS>VS</VS>
          <Team right>{game.opponent}</Team>
        </Matchup>

        <Divider />

        <Venue>
          <p>
            <strong>Stadium:</strong> {game.stadium}
          </p>
          <p>
            <strong>Location:</strong> {game.city}
          </p>
        </Venue>
      </Card>
    );
  };

  if (!games || games.length === 0) {
    return <Empty>No fixtures available</Empty>;
  }

  const sortedGames = [...games].sort((a, b) => new Date(a.date) - new Date(b.date));

  const homeGames = sortedGames.filter((g) => getMatchType(g) === "HOME");

  const awayGames = sortedGames.filter((g) => getMatchType(g) === "AWAY");

  const now = new Date();
  const nextGameId = sortedGames.find((g) => new Date(g.date) > now)?.id;

  return (
    <Container>
      <Title>Springbok Fixtures – Nations Championship</Title>

      <SectionTitle>🏠 Home Matches</SectionTitle>
      <Grid>{homeGames.map((game) => renderCard(game))}</Grid>

      <SectionTitle>✈️ Away Matches</SectionTitle>
      <Grid>{awayGames.map((game) => renderCard(game))}</Grid>
    </Container>
  );
}

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0 10px;
  color: #374151;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #166534;
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid ${(p) => (p.highlight ? "#16a34a" : "#e5e7eb")};
  box-shadow: ${(p) => (p.highlight ? "0 10px 25px rgba(22, 163, 74, 0.2)" : "0 4px 10px rgba(0,0,0,0.05)")};
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }

  border: ${(p) => {
    switch (p.$status) {
      case "LIVE":
        return "1px solid #dc2626";
      case "UPCOMING":
        return "1px solid #2563eb";
      case "TBA":
        return "1px solid #f59e0b";
      default:
        return "1px solid #e5e7eb";
    }
  }};
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const DateBlock = styled.div``;

const Day = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: #6b7280;
`;

const DateText = styled.div`
  font-size: 14px;
  color: #374151;
`;

const TimeBlock = styled.div`
  text-align: right;
`;

const Time = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #166534;
`;

const Kickoff = styled.div`
  font-size: 12px;
  color: #9ca3af;
`;

const Matchup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`;

const Team = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #1f2937;
  text-align: ${(p) => (p.right ? "right" : "left")};
`;

const VS = styled.div`
  font-size: 12px;
  color: #9ca3af;
  font-weight: 600;
`;

const Divider = styled.div`
  height: 1px;
  background: #f3f4f6;
  margin: 16px 0;
`;

const Venue = styled.div`
  font-size: 14px;
  color: #374151;

  p {
    margin: 4px 0;
  }
`;

const Empty = styled.div`
  text-align: center;
  color: #9ca3af;
  padding: 40px;
`;
