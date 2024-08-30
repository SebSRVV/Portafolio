"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  {
    prefix: " +",
    metric: "Earnings",
    value: "6200",
    postfix: "$",
  },
  {
    prefix: "~",
    metric: "Teams",
    value: "27",
  },
  {
    metric: "Awards",
    value: "38",
  },
  {
    metric: "Years",
    value: "10",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-10 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-screen-xl mx-auto bg-gray-900 rounded-lg p-8 flex flex-wrap items-center justify-around shadow-xl">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4"
          >
            <h2 className="text-cyan-400 text-6xl font-extrabold flex items-center">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-6xl font-extrabold ml-2"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 60,
                  tension: 120 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-gray-300 text-lg mt-2">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
