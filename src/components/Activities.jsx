import React from "react";
import styled from "styled-components";
import currency1 from "../assets/currency1.png";
import currency2 from "../assets/currency2.png";
import currency3 from "../assets/currency3.png";

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
    <Section>
      <div className="title-container">
        <h2>Recent Activities</h2>
      </div>
      <div className="content">
        {data.map(({ image, name, time, amount, status }, index) => {
          return (
            <div className="activity" key={index}>
              <img src={image} alt="activity" />
              <p>{name}</p>
              <p>{time}</p>
              <p>{amount}</p>
              <p
                className={`${
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
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .content {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    .activity {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      align-items: center;
      p {
        color: #707eae;
        font-weight: bold;
      }
      .pending {
        color: #868cff;
      }
      .completed {
        color: #00dea3;
      }
    }
  }
`;
