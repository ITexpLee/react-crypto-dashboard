import React from "react";
import styled from "styled-components";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";

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
    <Section>
      <div className="title-container">
        <h2>Team</h2>
      </div>
      <div className="teams">
        {team.map(({ image, number, type }) => {
          return (
            <div className="team">
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
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .teams {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .team {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: 1rem;
      &:nth-of-type(1) {
        background-color: #773efd28;
      }
      &:nth-of-type(2) {
        background-color: #00dea328;
      }
    }
  }
`;
