"use client";
import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
const data = [
  { name: "Presale", value: 50, color: "#3473FF" },
  { name: "Liquidity", value: 15, color: "#FFFFFF" },
  { name: "Team", value: 10, color: "#9BFFFF" },
  { name: "Marketing", value: 10, color: "#FFFFA6" },
  { name: "Development", value: 15, color: "#E1AAFF" },
];

const CustomLegend = ({ payload, onHover, onLeave }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {payload.map((entry, index) => (
        <li
          key={`legend-${index}`}
          onMouseEnter={() => onHover(index)}
          onMouseLeave={onLeave}
          style={{ cursor: "pointer", color: entry.color, marginBottom: "5px" }}
        >
          <span style={{ color: entry.color }}>● </span>
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

const CustomLegendList = ({ payload, onHover, onLeave }) => {
  return (
    <ul className="flex justify-center items-center list-none p-0 m-0 gap-4">
      {payload.map((entry, index) => (
        <li
          key={`legend-${index}`}
          // onMouseEnter={() => onHover(index)}
          // onMouseLeave={onLeave}
          className="flex items-center gap-2 cursor-pointer"
        >
          {/* Color circle */}
          <span
            className={`inline-block w-3 h-3 rounded-full`}
            style={{ backgroundColor: entry.color }}
          ></span>
          {/* Legend text */}
          <span className="text-white font-poppins text-xl font-bold">
            {entry.value}
          </span>
        </li>
      ))}
    </ul>
  );
};
const TokenGraph = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  return (
    <section className="  bg-[#222330] py-6   ">
      <div className="text-center py-3 px-14 text-white">
        <h2 className="font-poppins text-secondary font-bold text-[3.625rem]">
          Tokenomics
        </h2>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70} // Increased inner radius
            outerRadius={150} // Increased outer radius for a bigger pie
            startAngle={450} // Rotates the pie to inverse 90 degrees
            endAngle={90} // Completes the pie rotation in the reverse direction
            fill="#8884d8"
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                // Apply scaling if the current cell is active
                transform={`scale(${activeIndex === index ? 1.1 : 1})`}
              />
            ))}
          </Pie>
          <Tooltip />
          {/* Custom Legend */}
          <CustomLegend
            payload={data.map((entry) => ({
              value: entry.name,
              color: entry.color,
            }))}
            onHover={handleMouseEnter}
            onLeave={handleMouseLeave}
          />
        </PieChart>
      </ResponsiveContainer>

      <CustomLegendList
        payload={data.map((entry) => ({
          value: entry.name,
          color: entry.color,
        }))}
        onHover={handleMouseEnter}
        onLeave={handleMouseLeave}
      />
    </section>
  );
};
export default TokenGraph;
