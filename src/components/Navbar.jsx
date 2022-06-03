import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import avatar from "../assets/avatar.png";
import bell from "../assets/bell.png";
export default function Navbar() {
  return (
    <Nav className="flex j-between">
      <div className="user">
        <h2>Hello Kishan Sheth</h2>
        <span>Mar 20 2022</span>
      </div>
      <div className="search-container flex a-center j-center gap b-rad-1">
        <BsSearch />
        <input type="text" placeholder="search" />
      </div>
      <div className="profile flex a-center gap">
        <div className="notification">
          <img src={bell} alt="Bell" />
        </div>
        <h4>Kishan Sheth</h4>
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  .user {
    span {
      color: #707eae;
    }
  }
  .search-container {
    background-color: white;
    color: #aeb6cf;
    padding: 0 2rem;
    input {
      border: none;
      width: 20rem;
      font-size: 1.1rem;
      &::placeholder {
        color: #aeb6cf;
        text-transform: capitalize;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .profile {
    .notification {
      padding: 1rem;
      background-color: white;
      border-radius: 0.5rem;
    }
  }
`;
