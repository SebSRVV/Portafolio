"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Calcular edad actual
const getCurrentAge = (birthDateStr) => {
  const birthDate = new Date(birthDateStr);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const currentAge = getCurrentAge("2003-12-12");

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc list-inside space-y-1 text-gray-300">
        <li>Python</li>
        <li>C++</li>
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Studies",
    id: "studies",
    content: (
      <div className="space-y-2 text-gray-300">
        <p>
          Soy un estudiante de Ciencias de la Computación en la UPC, Perú. Mi
          formación académica, combinada con mi experiencia competitiva, me ha
          permitido dominar tanto la programación como las estrategias de juego.
        </p>
        <ul className="list-disc list-inside">
          <li>Universidad Peruana de Ciencias Aplicadas (UPC)</li>
          <li>{currentAge} años, nacido en Perú</li>
          <li>Formación avanzada en desarrollo de software</li>
          <li>Participación en proyectos de videojuegos</li>
          <li>Análisis y diseño de sistemas</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Logros",
    id: "logros",
    content: (
      <div className="text-gray-300 space-y-6 pr-2">
        <div>
          <h4 className="text-cyan-400 font-bold text-lg mb-1">CSGO / Overwatch</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Mas Gamers 2015 [CSGO] - Warfix</li>
            <li>Mas Gamers 2016 [Overwatch League] - TeamPeru</li>
            <li>Overwatch COPA 2018</li>
          </ul>
        </div>
        <div>
          <h4 className="text-cyan-400 font-bold text-lg mb-1">Fortnite</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Mas Gamers 2018 - TOP 5 | Dynamics</li>
            <li>Claro Gaming 2019 - TOP 3 | Portal Gaming</li>
            <li>Mas Gamers 2019 - TOP 4 | Portal Gaming</li>
            <li>Lima Games Week 2019 | G-Pride</li>
            <li>Liga Pro Gaming 2020 - TOP 1 | LPC</li>
          </ul>
        </div>
        <div>
          <h4 className="text-cyan-400 font-bold text-lg mb-1">Valorant</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>LG Ultragear Cup 2021 | Wolves Crew</li>
            <li>VCT LAS #1 Closed - TOP 6 | Wolves Crew</li>
            <li>Virtuals7 Cup | Ablaze Esports</li>
            <li>VCT LAS #2 Closed - TOP 8 | Ablaze Esports</li>
            <li>Lightspeed Cup 2022 | Amazing E-Sports</li>
            <li>Qualifiers VNL-II 2022 | IconGaming</li>
            <li>Last Chance Qualifier VNL 2022 | IconGaming</li>
            <li>Red Bull Campus Clutch 2022 | IconGaming / ZulerosNetos</li>
            <li>Bitel True Fighters 2022 - TOP 3 | Teletubbies</li>
            <li>Zowie x Aimlab - Perú AIMLAB Champion</li>
            <li>VNL 2023-1: Open Q1 - Top 4 | LoboArmy</li>
            <li>VNL 2023-1: LCQ - Top 5 | ElCartel</li>
            <li>VNL 2023-1: LCQ - Top 1 | Allianz Souls</li>
            <li>Zowie x Aimlab - Twice Champion</li>
            <li>VNL 2023 Main Event | PrimeGEN</li>
            <li>Comicon Invited | PrimeGEN</li>
            <li>DM Movistar Gamers Club Champion</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Games",
    id: "games",
    content: (
      <ul className="space-y-2 text-gray-100 pr-2">
        <li><span className="font-semibold text-cyan-300">2012</span> — Minecraft (UHC, Badlion)</li>
        <li><span className="font-semibold text-cyan-300">2013</span> — Zula</li>
        <li><span className="font-semibold text-cyan-300">2014</span> — Call of Duty</li>
        <li><span className="font-semibold text-cyan-300">2015</span> — CSGO</li>
        <li><span className="font-semibold text-cyan-300">2016</span> — Rainbow Six Siege</li>
        <li><span className="font-semibold text-cyan-300">2017</span> — Overwatch</li>
        <li><span className="font-semibold text-cyan-300">2018 - 2020</span> — Fortnite</li>
        <li><span className="font-semibold text-cyan-300">2021 - 2024</span> — Valorant</li>
      </ul>
    ),
  },
  {
    title: "Teams",
    id: "teams",
    content: (
      <div className="text-gray-100 space-y-6 pr-2">
        <div>
          <h4 className="text-cyan-300 font-bold text-lg">Rainbow Six</h4>
          <p>Team WildCats</p>
        </div>
        <div>
          <h4 className="text-cyan-300 font-bold text-lg">Overwatch</h4>
          <p>Virtus Legion • Sentence • iRost</p>
        </div>
        <div>
          <h4 className="text-cyan-300 font-bold text-lg">CSGO</h4>
          <p>Warfix • Luccini Gaming</p>
        </div>
        <div>
          <h4 className="text-cyan-300 font-bold text-lg">Fortnite</h4>
          <p>Portal Gaming • Razors • Dynamics • FTG • G-Pride • Wolves Crew • WinWus • Blade • Seven Lan • Cataclysm</p>
        </div>
        <div>
          <h4 className="text-cyan-300 font-bold text-lg">Valorant</h4>
          <p>Delerium • Royal Dynasty • Teletubbies • Wolves Crew • Ablaze • UCV • Icon8 • Amazing • Pyrez • Promissus • Lobo Army • PrimeGEN</p>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white bg-gradient-to-b from-black via-gray-900 to-black py-20 px-12 xl:px-16 mt-40">
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
        {/* Imagen */}
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-800">
          <Image
            src="/images/about-image.png"
            alt="SebRVV - About Image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Soy <strong className="text-cyan-400">SebRVV</strong>, jugador profesional de Esports y desarrollador de videojuegos. He competido en CSGO, Overwatch, Fortnite y actualmente en Valorant. Me especializo en <strong>alto rendimiento competitivo</strong> y <strong>desarrollo de videojuegos</strong>, uniendo técnica, disciplina y creatividad.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-8 flex flex-wrap gap-3">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          {/* Contenido dinámico */}
          <div className="relative mt-6 border-t border-gray-700 pt-4 text-gray-200 transition-opacity duration-300">
            <div className="max-h-[260px] min-h-[260px] overflow-y-auto">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
