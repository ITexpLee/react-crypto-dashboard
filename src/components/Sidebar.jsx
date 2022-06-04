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
    <Aside className="flex column j-between">
      <div className="brand flex a-center j-center gap">
        <img src={logo} alt="logo" />
        <span className="font-bold">JUST.</span>
      </div>
      <div className="links flex a-center j-center">
        <ul className="flex column gap">
          {data.map(({ name, icon }, index) => {
            return (
              <li
                className={`${
                  selected === index ? "selected" : ""
                } flex gap a-center`}
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
      <div className="privacy b-rad-1 flex a-center j-center column gap">
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
  width: 15vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  height: 100vh;
  background-color: var(--bg-color);
  padding: 2rem 1rem;
  .brand {
    span {
      font-size: 1.4rem;
    }
  }
  .links {
    ul {
      li {
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
      .selected {
        color: var(--primary-color);
      }
    }
  }
  .privacy {
    gap: 0.6rem;
    text-align: center;
    background-color: var(--primary-color);
    padding: 1rem;
    h3,
    h4 {
      color: white;
      letter-spacing: 0.03rem;
    }
  }
`;
