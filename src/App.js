import React from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Sidebar />
      <Dashboard />
    </Container>
  );
}

const Container = styled.div``;
