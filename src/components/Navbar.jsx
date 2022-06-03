import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import avatar from "../assets/avatar.png";
import bell from "../assets/bell.png";
export default function Navbar() {
  return (
    <Nav>
      <div className="user">
        <h2>Hello Kishan Sheth</h2>
        <span>Mar 20 2022</span>
      </div>
      <div className="search-container">
        <BsSearch />
        <input type="text" placeholder="search" />
      </div>
      <div className="profile">
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
  display: flex;
  justify-content: space-between;
  .user {
    span {
      color:#707EAE;
    }
  }
  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1rem;
    background-color: white;
    color: #AEB6CF;
    padding: 0 2rem;
    border-radius: 0.5rem;
    input {
      border: none;
      width: 20rem;
      font-size: 1.1rem;
      &::placeholder {
        color:#AEB6CF;
        text-transform: capitalize;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .profile {
    display: flex;
    align-items: center;
    gap: 1rem;
  
    .notification {      
      padding :1rem;
      background-color: white;
      border-radius: 0.5rem;
    }
  }
`;
