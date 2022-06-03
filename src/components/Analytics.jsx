import React from "react";
import styled from "styled-components";
import { FaExchangeAlt } from "react-icons/fa";
import currency1 from "../assets/currency1.png";
import currency2 from "../assets/currency2.png";
import currency3 from "../assets/currency3.png";
import currency4 from "../assets/currency4.png";
import up from "../assets/up.png";
import down from "../assets/down.png";
import growthup from "../assets/growthup.png";
import growthdown from "../assets/growthdown.png";

export default function Analytics() {
  const cards = [
    {
      image: currency1,
      type: "BTC",
      amount: "9784.79",
      growth: "7.2",
      growthType: "up",
    },
    {
      image: currency2,
      type: "LTC",
      amount: "8741.19",
      growth: "5.2",
      growthType: "down",
    },
    {
      image: currency3,
      type: "ETM",
      amount: "4567.16",
      growth: "6.5",
      growthType: "up",
    },
    {
      image: currency4,
      type: "BNB",
      amount: "6547.79",
      growth: "9.5",
      growthType: "up",
    },
  ];
  return (
    <Section>
      {cards.map(({ image, type, amount, growth, growthType }) => {
        return (
          <div className="analytic-card" key={type}>
            <div className="image">
              <img src={image} alt={type} />
            </div>
            <div className="data">
              <div className="info">
                <div className="currency">
                  <span>{type}</span>
                  <FaExchangeAlt />
                  <span>USD</span>
                </div>
                <div className="amount">
                  <h2>{amount}</h2>
                </div>
              </div>
              <div className="chart">
                <img
                  src={growthType === "up" ? growthup : growthdown}
                  alt="chart"
                />
              </div>
            </div>
            <div className="growth">
              <img src={growthType === "up" ? up : down} alt="chart" />
              <span>{growth}</span>
            </div>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  .analytic-card {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1rem 2rem;
    border-radius: 1rem;
    width: 100%;
    .data {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      .info {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        .currency {
          display: flex;
          gap: 1rem;
        }
      }
    }
  }
`;
