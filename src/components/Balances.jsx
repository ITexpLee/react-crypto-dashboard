import React from "react";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import cards from "../assets/cards.png";
import { CardStyles } from "./CardStyles";
export default function Balances() {
  return (
    <Section className="flex column gap card-padding">
      <div className="title-container flex a-center j-between">
        <h2>Balances</h2>
        <div className="plus">
          <FaPlus />
        </div>
      </div>
      <div className="content">
        <div className="info">
          <div className="subTitle">
            <span>$</span>
            <span>Dollar</span>
          </div>
          <h1>9784.79</h1>
        </div>
        <div className="image flex j-center a-center">
          <img src={cards} alt="cards" />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${CardStyles}
  .content {
    .image {
      img {
        height: 12rem;
      }
    }
  }
`;
