import React from "react";
import styled from "styled-components";
import currency1 from "../assets/currency1.png";
import currency2 from "../assets/currency2.png";
import currency3 from "../assets/currency3.png";
import { CardStyles } from "./CardStyles";

export default function Activities() {
  const data = [
    {
      image: currency1,
      name: "Bitcoin",
      time: "10:45:16 AM",
      amount: "+1545,00",
      status: "Completed",
    },
    {
      image: currency2,
      name: "Ethereum",
      time: "9:15:31 AM",
      amount: "+5649,00",
      status: "Pending",
    },
    {
      image: currency3,
      name: "LTC",
      time: "09:01:12 AM",
      amount: "+4547,00",
      status: "Completed",
    },
  ];
  return (
    <Section className="flex column gap">
      <div className="title-container">
        <h2>Recent Activities</h2>
      </div>
      <div className="content flex column gap">
        {data.map(({ image, name, time, amount, status }, index) => {
          return (
            <div className="activity a-center" key={index}>
              <img src={image} alt="activity" />
              <p className="font-bold">{name}</p>
              <p className="font-bold">{time}</p>
              <p className="font-bold">{amount}</p>
              <p
                className={`font-bold ${
                  status === "Completed" ? "completed" : "pending"
                }`}
              >
                {status}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${CardStyles};
  .content {
    .activity {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      p {
        color: var(--primary-text);
      }
      .pending {
        color: var(--secondary-color);
      }
      .completed {
        color: var(--primary-color);
      }
    }
  }
`;
