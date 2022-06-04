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
      <div className="cards gap-2 flex column">
        <div className="col--one">
          <Analytics />
        </div>
        <div className="col--two gap-2">
          <Overview />
          <Balances />
        </div>
        <div className="col--three gap-2">
          <Activities />
          <Team />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--body-bg);
  padding: 2rem;
  margin-left: 15vw;
  .cards {
    margin: 2rem 0;
    .col--two,
    .col--three {
      display: grid;
      grid-template-columns: 74% 25%;
    }
  }
`;
