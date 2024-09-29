"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useInView } from "react-intersection-observer";

const data = [
  { name: "Presale", value: 50, color: "#3473FF" },
  { name: "Liquidity", value: 15, color: "#FFFFFF" },
  { name: "Team", value: 10, color: "#9BFFFF" },
  { name: "Marketing", value: 10, color: "#FFFFA6" },
  { name: "Development", value: 15, color: "#E1AAFF" },
];

const CustomLegend = ({ payload, activeIndex, setActiveIndex }) => {
  return (
    <ul className="flex flex-wrap justify-center items-center list-none p-0 m-0 gap-4">
      {payload.map((entry, index) => (
        <li
          key={`legend-${index}`}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          className={`flex items-center gap-2 cursor-pointer transition-opacity duration-300 ${
            activeIndex !== null && activeIndex !== index
              ? "opacity-30"
              : "opacity-100"
          }`}
        >
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></span>
          <span className="text-white font-poppins text-sm md:text-xl font-bold">
            {entry.value}
          </span>
        </li>
      ))}
    </ul>
  );
};

const TokenGraph = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleSections, setVisibleSections] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setVisibleSections((prev) => {
          if (prev < data.length) {
            return prev + 1;
          }
          clearInterval(timer);
          return prev;
        });
      }, 300);

      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <section id="tokenmics" ref={ref} className="relative bg-[#222330] py-6">
      <div className=" bg-bg-gradient1 absolute inset-0 bg-contain bg-no-repeat opacity-50 "></div>
      <div className="relative z-10 text-center py-3 px-4 md:px-14 text-white">
        <h2 className="font-poppins text-secondary font-bold text-[2rem] md:text-[3.625rem]">
          Tokenomics
        </h2>
      </div>
      <div className="relative z-10 w-full h-[300px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data.slice(0, visibleSections)}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="80%"
              startAngle={450}
              endAngle={90}
              isAnimationActive={true}
            >
              {data.slice(0, visibleSections).map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  opacity={
                    activeIndex === null || activeIndex === index ? 1 : 0.3
                  }
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="relative z-10 mt-4 px-4">
        <CustomLegend
          payload={data.slice(0, visibleSections).map((entry) => ({
            value: entry.name,
            color: entry.color,
          }))}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </section>
  );
};

export default TokenGraph;
