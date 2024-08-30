"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>C++</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Studies",
    id: "studies",
    content: (
      <div>
        <p className="mb-2">
          Soy un estudiante de Ciencias de la Computación en la UPC, Perú, con 20 años de edad. Mi formación académica y mi experiencia en el mundo de los videojuegos me han permitido desarrollar habilidades tanto en programación como en estrategias de juego.
        </p>
        <ul className="list-disc pl-4">
          <li>Estudiante de Ciencias de la Computación en la UPC</li>
          <li>20 años, de Perú</li>
          <li>Formación en desarrollo de software y programación avanzada</li>
          <li>Participación en proyectos de desarrollo de videojuegos</li>
          <li>Experiencia en el análisis y diseño de sistemas de software</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Logros",
    id: "logros",
    content: (
      <div>
        <ul className="list-disc pl-4">
          <li>Mas Gamers 2015 [CSGO] - Warfix</li>
          <li>Mas Gamers 2016 [Overwatch League] - TeamPeru</li>
          <li>Overwatch COPA 2018 [Overwatch] </li>
          <li>Mas Gamers 2018 [Fortnite] - TOP 5 | Dynamics</li>
          <li>Claro Gaming 2019 [Fortnite] - TOP 3 | Portal Gaming</li>
          <li>Mas Gamers 2019 [Fortnite] - TOP 4 | Portal Gaming</li>
          <li>Lima Games Week 2019 [Fortnite] | G-Pride</li>
          <li>Liga Pro Gaming 2020 [Fortnite] - TOP 1 | LPC</li>
          <li>LG ULTRAGEAR GAMING CUP VALORANT EDITION 2021 | Wolves Crew</li>
          <li>VCT LAS #1 CLOSED - TOP 6 | Wolves Crew</li>
          <li>Virtuals7 Cup | Ablaze Esports</li>
          <li>VCT LAS #2 CLOSED - TOP 8 | Ablaze Esports</li>
          <li>Lightspeed Cup - Edición CyC 2022 | Amazing E-Sports</li>
          <li>Qualifiers VNL-II 2022 | IconGaming</li>
          <li>VNL 2022-2: Last Chance Qualifier | IconGaming</li>
          <li>Red Bull Campus Clutch Peru 2022 | IconGaming | ZulerosNetos</li>
          <li>Bitel True Fighters 2022 [Valorant] - TOP 3 | TELETUBBIES</li>
          <li>Zowie x Aimlab - Peru AIMLAB Champion</li>
          <li>VNL 2023-1: Open Qualifier 1 - Top 4 | LoboArmy</li>
          <li>VNL 2023-1: Last Chance Qualifier - Top 5 | ElCartel</li>
          <li>VNL 2023-1: Last Chance Qualifier - Top 1 | Allianz Souls</li>
          <li>Zowie x Aimlab - Peru AIMLAB Twice Champion</li>
          <li>VNL 2023 Main Event | PrimeGEN</li>
          <li>Comicon Invited | PrimeGEN</li>
          <li>WINNER DM Movistargamersclub Champion</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Games",
    id: "games",
    content: (
      <div className>
        <ul className="space-y-2 text-gray-100">
          <li>
            <span className="font-semibold text-cyan-300">[2012]</span> Minecraft (UHC, Badlion)
          </li>
          <li>
            <span className="font-semibold text-cyan-300">[2013]</span> Zula 
          </li>
          <li>
            <span className="font-semibold text-cyan-300">[2014]</span> Call of Duty
          </li>
          <li>
            <span className="font-semibold text-cyan-300">[2015]</span> Counter Strike: Global Offensive
          </li>
          <li>
            <span className="font-semibold text-cyan-300">[2016]</span> Rainbow Six
          </li>
          <li>
            <span className="font-semibold text-cyan-300">[2017]</span> Overwatch
          </li>
          <li>
            <span className="font-semibold text-cyan-300">[2018 - 2020]</span> Fortnite
          </li>
          <li>
            <span className="font-semibold text-cyan-300">[2021 - 2024]</span> Valorant
          </li>
        </ul>
      </div>
    )
    
    
    
    ,
  },
  {
    title: "Teams",
    id: "teams",
    content: (
      <div className="p-2">
        <ul className="space-y-4 text-gray-100">
          <li className="flex flex-col space-y-2">
            <span className="font-semibold text-cyan-300">[R6]</span>
            <span className="text-lg">Team WildCats</span>
          </li>
          <li className="flex flex-col space-y-2">
            <span className="font-semibold text-cyan-300">[Fortnite]</span>
            <span className="text-lg">
              Portal Gaming • Razors • Dynamics • Seven Lan Center • FTG • G-Pride • WinWus • Wolves Crew • Blade • Cataclysm
            </span>
          </li>
          <li className="flex flex-col space-y-2">
            <span className="font-semibold text-cyan-300">[Overwatch]</span>
            <span className="text-lg">
              Virtus Legion • Sentence • iRost
            </span>
          </li>
          <li className="flex flex-col space-y-2">
            <span className="font-semibold text-cyan-300">[CS: GO]</span>
            <span className="text-lg">
              Warfix • Luccini Gaming
            </span>
          </li>
          <li className="flex flex-col space-y-2">
            <span className="font-semibold text-cyan-300">[Valorant]</span>
            <span className="text-lg">
              Delerium Esports • Red Raccons • Royal Dynasty • MindSync Esports • Synergy Esports • In Extremix • Teletubbies • Cataclysm • Wolves Crew • Ablaze Esports • UCV Esports • Icon8 Gaming • Amazing Family • Pyrez E-Sports • Promissus • Lobo Army • PrimeGen
            </span>
          </li>
        </ul>
      </div>
    )
    
    
    
    ,
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative" style={{ height: '500px', width: '100%' }}> {/* Fija la altura aquí */}
          <Image
            src="/images/about-image.png"
            alt="About Image"
            layout="fill" // Asegura que la imagen se ajuste al contenedor
            objectFit="cover" // Ajusta la imagen para cubrir el contenedor
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Me conocen como SebRVV y soy un jugador de Esports peruano con años de experiencia en el mundo de los videojuegos. He competido en una variedad de juegos, incluyendo CSGO, Fortnite, Overwatch, R6 y COD. Actualmente, estoy enfocado en Valorant. Durante mi formación, he tenido el privilegio de representar a varios equipos y de competir en torneos nacionales e internacionales. Mi estilo de juego se basa en la toma de decisiones rápidas y adaptables a las situaciones. Me destaco por mi desempeño individual y mi aim, con fuerte capacidad de impacto en cada ronda. Además soy programador y desarrollador de videojuegos.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("studies")}
              active={tab === "studies"}
            >
              {" "}
              Studies{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("logros")}
              active={tab === "logros"}
            >
              {" "}
              Logros{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("games")}
              active={tab === "games"}
            >
              {" "}
              Games{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("teams")}
              active={tab === "teams"}
            >
              {" "}
              Teams{" "}
            </TabButton>
          </div>
          <div className="mt-8 [&>ul]:overflow-y-auto [&>ul]:max-h-[250px] [&>div>ul]:overflow-y-auto [&>div>ul]:max-h-[250px] h-[250px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;