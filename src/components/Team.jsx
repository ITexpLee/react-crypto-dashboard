import React from "react";
import styled from "styled-components";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import { CardStyles } from "./CardStyles";

export default function Team() {
  const team = [
    {
      image: team1,
      type: "Total Admin",
      number: 6,
    },
    {
      image: team2,
      type: "Team Member",
      number: 12,
    },
  ];
  return (
    <Section className="flex column gap card-padding">
      <div className="title-container">
        <h2>Team</h2>
      </div>
      <div className="teams flex column gap">
        {team.map(({ image, number, type }) => {
          return (
            <div className="team flex a-center b-rad-1">
              <img src={image} alt="team" />
              <div className="info">
                <h3>{type}</h3>
                <h5>{number}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${CardStyles};
  .teams {
    .team {
      justify-content: flex-start;
      &:nth-of-type(1) {
        background-color: var(--subdue-primary-color);
      }
      &:nth-of-type(2) {
        background-color: var(--subdue-secondary-color);
      }
    }
  }
`;
