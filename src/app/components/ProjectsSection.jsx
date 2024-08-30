"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nvidia RTX 3080",
    description: "High-performance graphics card.",
    image: "/images/projects/1.png",
    tag: ["Specs"],
    gitUrl: "https://www.amazon.com/ASUS-GeForce-Graphics-DisplayPort-Bearings/dp/B08HH5WF97",
    previewUrl: "https://www.amazon.com/ASUS-GeForce-Graphics-DisplayPort-Bearings/dp/B08HH5WF97",
  },
  {
    id: 2,
    title: "990 Pro EVO 1TB SSD",
    description: "Fast and reliable SSD storage.",
    image: "/images/projects/2.png",
    tag: ["Specs"],
    gitUrl: "https://www.amazon.com/dp/B0BHJF2VRN?ref_=cm_sw_r_cp_ud_dp_WCXD1MBRS3HA1P8N0D89&skipTwisterOG=1s",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Intel i9 10900k",
    description: "High-speed processor for gaming and productivity.",
    image: "/images/projects/3.png",
    tag: ["Specs"],
    gitUrl: "https://www.amazon.com/Intel-i9-10900K-Desktop-Processor-Unlocked/dp/B086MHSTVD/ref=sr_1_3?refresh=1&sr=8-3",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "ROG Maximus XIII Hero",
    description: "Intel LGA 1200 socket.",
    image: "/images/projects/4.png",
    tag: ["Specs"],
    gitUrl: "https://www.amazon.com/ROG-XIII-Intel11th-Motherboard-Thunderbolt/dp/B08T6BHQC8/ref=sr_1_1?sr=8-1",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Case Rog Helios",
    description: "Stylish and functional case for PC build.",
    image: "/images/projects/5.png",
    tag: ["Specs"],
    gitUrl: "https://www.amazon.com/ASUS-Tempered-Aluminium-Radiator-Support/dp/B07RS9CM53/ref=sr_1_2?sr=8-2",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Mouse Logitech Superlight",
    description: "Lightweight and high-precision gaming mouse.",
    image: "/images/projects/6.png",
    tag: ["Gear"],
    gitUrl: "https://www.amazon.com/Logitech-SUPERLIGHT-Ultra-Lightweight-Programmable-Compatible/dp/B087LXCTFJ/ref=sr_1_3?sr=8-3",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Micro HyperX Quadcast",
    description: "High-quality microphone for clear audio.",
    image: "/images/projects/7.png",
    tag: ["Gear"],
    gitUrl: "https://www.amazon.com/HyperX-QuadCast-Condenser-Microphone-Anti-Vibration/dp/B08G8WH435/ref=sr_1_1_sspa?s=electronics&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Headphones Logitech LightSpeed V2",
    description: "Comfortable headphones with excellent sound quality.",
    image: "/images/projects/8.png",
    tag: ["Gear"],
    gitUrl: "https://www.amazon.com/Logitech-PRO-X-2-LIGHTSPEED-Wireless-Gaming-Headset/dp/B0B3F8V4JG/ref=sr_1_1?s=electronics&sr=1-1",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Teclado Wooting 60 HE+",
    description: "Mechanical keyboard with customizable switches.",
    image: "/images/projects/9.png",
    tag: ["Gear"],
    gitUrl: "https://wooting.io/wooting-60he",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Mousepad Zowie G-SR",
    description: "Durable mousepad for accurate mouse movements (Control).",
    image: "/images/projects/10.png",
    tag: ["Gear"],
    gitUrl: "https://www.amazon.com/Benq-Gaming-Mouse-Pad-Zowie/dp/B01LAGKSXG/ref=sr_1_8?s=electronics&sr=1-8",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Valorant",
    description: "DPI: 400\nSens: 0.14\nADS: 0.82",
    image: "/images/projects/11.png",
    tag: ["Settings"],
    gitUrl: "https://tracker.gg/valorant/profile/riot/seb%23rvv/overview?season=4539cac3-47ae-90e5-3d01-b3812ca3274e",
    previewUrl: "/",
  },
  {
  id: 12,
  title: "Overwatch",
  description: "DPI: 1600\nSens: 3.20\nADS: 0.90",
  image: "/images/projects/12.png",
  tag: ["Settings"],
  gitUrl: "https://tracker.gg/overwatch/profile/battlenet/Seb%2312992/overview",
  previewUrl: "/",
},
{
  id: 13,
  title: "CSGO",
  description: "DPI: 400 / 500hz \nSens: 2.40\n",
  image: "/images/projects/13.png",
  tag: ["Settings"],
  gitUrl: "https://steamcommunity.com/id/SebRVV",
  previewUrl: "/",
},
{
  id: 13,
  title: "Fortnite",
  description: "DPI: 400 \nSens: 4.32\nADS: 0.33",
  image: "/images/projects/14.png",
  tag: ["Settings"],
  gitUrl: "https://fortnite-esports.fandom.com/wiki/SebRVV",
  previewUrl: "/",
},
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = tag === "All" ? projectsData : projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Gear & Setup
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Specs"
          isSelected={tag === "Specs"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Gear"
          isSelected={tag === "Gear"}
        />
                <ProjectTag
          onClick={handleTagChange}
          name="Settings"
          isSelected={tag === "Settings"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
