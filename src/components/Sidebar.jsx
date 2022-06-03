import React, { useState } from "react";
import styled from "styled-components";
import security from "../assets/security.png";
import logo from "../assets/logo.png";
import { MdSpaceDashboard } from "react-icons/md";
import { BsCurrencyExchange, BsFillCalendarFill } from "react-icons/bs";
import { ImLibrary } from "react-icons/im";
import { FaWallet } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  const data = [
    {
      name: "Dashboard",
      icon: <MdSpaceDashboard />,
    },
    {
      name: "Exchange",
      icon: <BsCurrencyExchange />,
    },
    {
      name: "Library",
      icon: <ImLibrary />,
    },
    {
      name: "Schedules",
      icon: <BsFillCalendarFill />,
    },
    {
      name: "Payouts",
      icon: <FaWallet />,
    },
    {
      name: "Settings",
      icon: <IoSettings />,
    },
  ];
  return (
    <Aside>
      <div className="brand">
        <img src={logo} alt="logo" />
        <span>JUST.</span>
      </div>
      <div className="links">
        <ul>
          {data.map(({ name, icon }, index) => {
            return (
              <li
                className={`${selected === index ? "selected" : ""}`}
                onClick={() => setSelected(index)}
                key={name + icon}
              >
                <span>{icon}</span>
                <span>{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="privacy b-rad-1">
        <img src={security} alt="Security" />
        <h3>Keep you safe!</h3>
        <h5>Update your security password, keep your account safe!</h5>
        <h4>Update Privacy</h4>
      </div>
    </Aside>
  );
}

const Aside = styled.aside`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  /* width: 99%; */
  width: 15vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  height: 100vh;
  background-color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    span {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        display: flex;
        gap: 1rem;
        font-size: 1.2rem;
        align-items: center;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          color: #00dea3;
        }
      }
      .selected {
        color: #00dea3;
      }
    }
  }
  .privacy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #00dea3;
    padding: 1rem;
    gap: 0.6rem;
    h3,
    h4 {
      color: white;
      letter-spacing: 0.03rem;
    }
  }
`;
