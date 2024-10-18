"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { Briefcase, Award, Book, Target } from "lucide-react";

const skills = [
  { name: "React", icon: "logos:react", color: "#61DAFB" },
  { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E" },
  { name: "Node.js", icon: "logos:nodejs-icon", color: "#339933" },
  { name: "Git", icon: "logos:git-icon", color: "#F05032" },
  { name: "Docker", icon: "logos:docker-icon", color: "#2496ED" },
  { name: "PHP", icon: "logos:php", color: "#777BB4" },
  { name: "Next.js", icon: "logos:nextjs-icon", color: "#000000" },
  { name: "Express.js", icon: "logos:express", color: "#000000" },
  { name: "MongoDB", icon: "logos:mongodb-icon", color: "#47A248" },
  { name: "MySQL", icon: "logos:mysql", color: "#00758F" },
];

const experience = {
  year: "July 2024 - Present",
  role: "Full Stack Developer Intern",
  company: "Artn Institute of commerce & vocational studies",
  description:
    "Web Designing, Design template webpages and logos by using PS and Ai. Developed by using HTML5, CSS3, Tailwind, Vanilla Js, Oops Concept, jQuery, Ajax, API and also handle back-end by PHP and by using MySql, Mongodb Database handle large volume of data",
  icon: <Briefcase className="w-6 h-6 text-blue-400" />,
  // achievements: [
  //   "Implemented a new feature that increased user engagement by 30%",
  //   "Optimized database queries, reducing load times by 40%",
  //   "Led a team of 3 junior developers in a successful project delivery",
  // ],
  technologies: ["React", "Node.js", "PHP", "MongoDB", "MySQL"],
};

const additionalSections = [
  {
    title: "Education",
    icon: <Book className="w-6 h-6 text-green-400" />,
    content: "Bachelor of Computer Applications, IGNOU University, 2023-Present",
  },
  {
    title: "Diploma",
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    content: "Arth Certified FUll Stack Developer , 2023",
  },
  {
    title: "Projects",
    icon: <Target className="w-6 h-6 text-red-400" />,
    content:
      "Developed an open-source library for React components with over 1000 GitHub stars",
  },
];

const SkillIcon = ({ skill, index }:any) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [0, 1.1, 1],
        rotate: [0, 360, 0],
        transition: { duration: 0.5, delay: index * 0.1 },
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      whileHover={{ scale: 1.1, rotate: 360 }}
      className="flex items-center justify-center"
    >
      <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg flex items-center justify-center">
        <Icon icon={skill.icon} style={{ color: skill.color }} className="text-3xl" />
      </div>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute mt-20 text-xs text-white text-center"
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
};

const ExperienceCard = ({ experience }:any) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={controls}
      className="mb-6 p-6 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg transition-all duration-300 hover:bg-opacity-20"
    >
      <div className="flex items-center mb-4">
        {experience.icon}
        <span className="text-lg font-semibold text-blue-300 ml-2">
          {experience.year}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{experience.role}</h3>
      <h4 className="text-xl text-gray-300 mb-4">{experience.company}</h4>
      <p className="text-gray-400 mb-4">{experience.description}</p>
      <h5 className="text-lg font-semibold text-white mb-2">Technologies Used:</h5>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech: string, index: number) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-blue-300 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const AdditionalSection = ({ section, index }:any) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1, transition: { delay: index * 0.2 } });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      className="mb-6 p-4 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg transition-all duration-300 hover:bg-opacity-20"
    >
      <div className="flex items-center mb-2">
        {section.icon}
        <h3 className="text-lg font-semibold text-white ml-2">{section.title}</h3>
      </div>
      <p className="text-gray-400">{section.content}</p>
    </motion.div>
  );
};

const CircularSkills = ({ skills }:any) => {
  const [radius, setRadius] = useState(180)
  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 600 ? 150 : 180)
    }

    window.addEventListener('resize', updateRadius)
    updateRadius() // Set initial radius

    return () => window.removeEventListener('resize', updateRadius)
  }, [])
  // const radius = 180;
  const angleStep = (2 * Math.PI) / skills.length;

  return (
    <div className="relative w-[300px] h-[300px] flex items-center m-auto">
      {skills.map((skill:any, index:any) => {
        const angle = index * angleStep;
        const x = radius * Math.cos(angle) + 150;
        const y = radius * Math.sin(angle) + 150;

        return (
          <div
            key={skill.name}
            style={{
              position: "absolute",
              left: `${x}px`,
              top: `${y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <SkillIcon skill={skill} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export function EnhancedSkillsAndExperienceComponent() {
  return (
    <div className="min-h-screen py-16 flex items-center justify-center" style={{ backgroundColor: "#000319" }}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Skills & Experience
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <CircularSkills skills={skills} />
          </motion.div>
          <div className="flex-1">
            <ExperienceCard experience={experience} />
            {additionalSections.map((section, index) => (
              <AdditionalSection key={index} section={section} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
