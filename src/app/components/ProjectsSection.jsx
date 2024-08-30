"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nvidia RTX 3080TI",
    description: "High-performance graphics card.",
    image: "/images/projects/1.png",
    tag: ["Specs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "990 Pro EVO 1TB SSD",
    description: "Fast and reliable SSD storage.",
    image: "/images/projects/2.png",
    tag: ["Specs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Intel i9 10900k",
    description: "High-speed processor for gaming and productivity.",
    image: "/images/projects/3.png",
    tag: ["Specs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "32 GB RAM",
    description: "High-capacity RAM for smooth performance.",
    image: "/images/projects/4.png",
    tag: ["Specs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Case Rog Helios",
    description: "Stylish and functional case for PC build.",
    image: "/images/projects/5.png",
    tag: ["Specs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Mouse Logitech Superlight",
    description: "Lightweight and high-precision gaming mouse.",
    image: "/images/projects/6.png",
    tag: ["Gear"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Micro HyperX Quadcast",
    description: "High-quality microphone for clear audio.",
    image: "/images/projects/6.png",
    tag: ["Gear"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Headphones Logitech LightSpeed V2",
    description: "Comfortable headphones with excellent sound quality.",
    image: "/images/projects/6.png",
    tag: ["Gear"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Teclado Wooting 60 HE",
    description: "Mechanical keyboard with customizable switches.",
    image: "/images/projects/6.png",
    tag: ["Gear"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Mousepad Zowie GS-R",
    description: "Durable mousepad for accurate mouse movements.",
    image: "/images/projects/6.png",
    tag: ["Gear"],
    gitUrl: "/",
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
