import styled from "styled-components";

export default function StatusBadge({ status }) {
  return <Badge $status={status}>{status}</Badge>;
}

const Badge = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;

  color: white;

  background: ${(p) => {
    switch (p.$status) {
      case "LIVE":
        return "#dc2626"; // red
      case "UPCOMING":
        return "#2563eb"; // blue
      case "FINISHED":
        return "#6b7280"; // gray
      case "TBA":
        return "#f59e0b"; // amber
      default:
        return "#6b7280";
    }
  }};
`;
