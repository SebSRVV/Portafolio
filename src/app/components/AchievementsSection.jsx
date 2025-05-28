'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
});

const achievementsList = [
  { prefix: '+', metric: 'Earnings', value: '6200', postfix: '$' },
  { prefix: '~', metric: 'Teams', value: '27' },
  { metric: 'Awards', value: '38' },
  { metric: 'Years of Experience', value: '10' },
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="relative z-10 -mt-20 mb-10 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-md border border-gray-800 rounded-xl shadow-2xl py-10 px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {achievementsList.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 flex items-center">
                {achievement.prefix && <span className="mr-1">{achievement.prefix}</span>}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-5xl sm:text-6xl font-extrabold"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 40,
                    tension: 140 * (index + 1),
                  })}
                />
                {achievement.postfix && <span className="ml-1">{achievement.postfix}</span>}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 tracking-wide uppercase font-medium">
                {achievement.metric}
              </p>
              <div className="mt-2 w-8 h-[2px] bg-cyan-400 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
