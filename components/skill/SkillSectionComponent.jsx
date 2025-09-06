import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaDocker,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiAdobephotoshop,
  SiRedux,
} from "react-icons/si";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "#F7DF1E",
    textColor: "#000",
  },
  { name: "React", icon: <FaReact />, color: "#61DAFB", textColor: "#000" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, color: "#000000" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4479A1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "NPM", icon: <FaNpm />, color: "#CB3837" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
];

const SkillSectionComponent = () => {
  return (
    <div className="mx-auto px-10 py-10 ">
      <h1 className="text-4xl font-bold text-amber-500 text-center">Skill</h1>
      <div className="border-[1px] border-slate-400 w-20 mx-auto my-2"></div>

      <div className="flex flex-col gap-4 text-center justify-center">
        <h3>
          Berikut adalah beberapa teknologi dan tools yang menjadi andalan saya
          untuk mengubah ide menjadi produk digital yang fungsional dan menarik
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 px-4">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              style={{
                backgroundColor: skill.color,
                color: skill.textColor || "#FFFFFF",
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md font-medium text-sm md:text-base shadow-md"
            >
              <span className="text-xl">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSectionComponent;
