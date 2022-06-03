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
import { CardStyles } from "./CardStyles";

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
    <Section className="flex column">
      <div className="title-container flex j-between">
        <div className="title">
          <h2>
            Market Overview
            <h6>7.2141,9975.75 (25%)</h6>
          </h2>
        </div>
        <div className="buttons flex j-center a-center">
          <button className="b-rad-1">All</button>
          <button className="b-rad-1">1M</button>
          <button className="b-rad-1">6M</button>
          <button className="b-rad-1">1Y</button>
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
  ${CardStyles};
  padding: 0;
  gap: 1rem;
  overflow: hidden;
  .title-container {
    padding: 1rem 2rem;
    .title {
      h2 {
        h6 {
          color: var(--primary-color);
        }
      }
    }
    .buttons {
      gap: 2rem;
      button {
        padding: 0.5rem 1rem;
        border: 0.1rem solid #aeb6cf;
        background-color: white;
        cursor: pointer;
        &:hover {
          color: white;
          background-color: var(--primary-color);
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
