import React from "react";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import cards from "../assets/cards.png";
export default function Balances() {
  return (
    <Section>
      <div className="title-container">
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
        <div className="image">
          <img src={cards} alt="cards" />
        </div>
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
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .plus {
    }
  }
  .content {
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 12rem;
      }
    }
  }
`;
