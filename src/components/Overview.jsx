import React from "react";
import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Overview() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <Section>
      <div className="title-container">
        <div className="title">
          <h2>
            Market Overview
            <h6>7.2141,9975.75 (25%)</h6>
          </h2>
        </div>
        <div className="buttons">
          <button>All</button>
          <button>1M</button>
          <button>6M</button>
          <button>1Y</button>
        </div>
      </div>
      <div className="content">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{}}>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  .title-container {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    .title {
      h2 {
        h6 {
          color: #00dea3;
        }
      }
    }
    .buttons {
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      button {
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        border: 0.1rem solid #aeb6cf;
        background-color: white;
        cursor: pointer;
        &:hover {
          color: white;
          background-color: #00dea3;
          border-color: white;
        }
      }
    }
  }
  .content {
    height: 14rem;
    width: 100%;
  }
`;
