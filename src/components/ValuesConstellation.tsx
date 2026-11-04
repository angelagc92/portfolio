"use client";

import { useState } from "react";

const values = [
  {
    number: "01",
    name: "Curiosity",
    description:
      "Following the impulse to dig deeper, ask questions and figure out the whys and the hows.",
    x: 115,
    y: 115,
  },
  {
    number: "02",
    name: "Freedom",
    description:
      "Doing things on my own terms, thinking independently and exploring paths beyond established expectations.",
    x: 310,
    y: 55,
  },
  {
    number: "03",
    name: "Creativity",
    description:
      "Translating ideas, visual instincts and different influences into something tangible. Finding new ways to express and create.",
    x: 570,
    y: 125,
  },
  {
    number: "04",
    name: "Meaning",
    description:
      "Finding purpose in what I do and valuing the intention behind the things I create.",
    x: 475,
    y: 285,
  },
  {
    number: "05",
    name: "Openness",
    description:
      "Keeping an open mind, welcoming different perspectives and staying receptive to experiences and ideas I haven't encountered before.",
    x: 230,
    y: 290,
  },
  {
    number: "06",
    name: "Authenticity",
    description:
      "Staying true to myself, expressing who I am and making choices that reflect what I genuinely value.",
    x: 80,
    y: 270,
  },
];

const connections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [0, 4],
  [1, 4],
];

export default function ValuesConstellation() {
  const [activeValue, setActiveValue] = useState(0);

  const selected = values[activeValue];

  return (
    <section className="values-section">
      <div className="values-heading">
        <span className="eyebrow">PERSONAL VALUES</span>
        <h2>What drives me</h2>
      </div>

      <div className="constellation-wrap">
        <svg
          className="constellation"
          viewBox="0 0 650 350"
          role="group"
          aria-label="Interactive constellation representing six personal values"
        >
          <defs>
            <radialGradient id="star-glow">
              <stop offset="0%" stopColor="#d4c5f2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#b9a5df" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background stars */}
          {[
            [35, 55],
            [190, 35],
            [390, 100],
            [620, 45],
            [340, 190],
            [610, 235],
            [140, 210],
            [370, 330],
            [540, 35],
            [25, 180],
          ].map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 3 === 0 ? 1.5 : 1}
              className="constellation-dust"
            />
          ))}

          {/* Connecting lines */}
          {connections.map(([from, to], i) => (
            <line
              key={i}
              x1={values[from].x}
              y1={values[from].y}
              x2={values[to].x}
              y2={values[to].y}
              className="constellation-line"
            />
          ))}

          {/* Stars */}
          {values.map((value, index) => {
            const isActive = activeValue === index;

            return (
              <g
                key={value.number}
                className={`constellation-node ${
                  isActive ? "active" : ""
                }`}
                role="button"
                tabIndex={0}
                aria-label={`${value.name}: show description`}
                aria-pressed={isActive}
                onClick={() => setActiveValue(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveValue(index);
                  }
                }}
              >
                <circle
                  cx={value.x}
                  cy={value.y}
                  r="29"
                  className="star-hit-area"
                />

                <circle
                  cx={value.x}
                  cy={value.y}
                  r={isActive ? 25 : 17}
                  className="star-glow"
                />

                <path
                  d={`M ${value.x} ${value.y - 9}
                      L ${value.x + 2} ${value.y - 2}
                      L ${value.x + 9} ${value.y}
                      L ${value.x + 2} ${value.y + 2}
                      L ${value.x} ${value.y + 9}
                      L ${value.x - 2} ${value.y + 2}
                      L ${value.x - 9} ${value.y}
                      L ${value.x - 2} ${value.y - 2} Z`}
                  className="star-shape"
                />

                <text
                  x={value.x + 17}
                  y={value.y - 17}
                  className="star-number"
                >
                  {value.number}
                </text>

                {isActive && (
                  <text
                    x={value.x}
                    y={value.y + 43}
                    textAnchor="middle"
                    className="star-label"
                  >
                    {value.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="value-detail" aria-live="polite">
        <span className="value-detail-number">{selected.number}</span>
        <div>
          <h3>{selected.name}</h3>
          <p>{selected.description}</p>
        </div>
      </div>

      <p className="constellation-hint">
        SELECT A STAR TO EXPLORE
      </p>
    </section>
  );
}
