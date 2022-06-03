import React from "react";
import styled from "styled-components";
import Activities from "./Activities";
import Analytics from "./Analytics";
import Balances from "./Balances";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Team from "./Team";

export default function Dashboard() {
  return (
    <Container>
      <Navbar />
      <div className="cards">
        <div className="col--one">
          <Analytics />
        </div>
        <div className="col--two">
          <Overview />
          <Balances />
        </div>
        <div className="col--three">
          <Activities />
          <Team />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #dcf2f8;
  padding: 2rem;
  margin-left: 15vw;
  .cards {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .col--two,
    .col--three {
      display: grid;
      grid-template-columns: 74% 25%;
      gap: 2rem;
    }
  }
`;
