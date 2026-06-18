import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaPython,
    FaGitAlt,
    FaGithub,
  } from "react-icons/fa";
  
  import {
    SiJavascript,
    SiTailwindcss,
    SiReact,
    SiDjango,
    SiFlask,
    SiMongodb,
    SiMysql,
    SiVercel,
    SiFigma,
    SiCplusplus,
  } from "react-icons/si";
  
  export const skillsData = [
    {
      title: "Frontend Skills",
      skills: [
        {
          name: "HTML5",
          icon: FaHtml5,
          color: "#E34F26",
        },
        {
          name: "CSS3",
          icon: FaCss3Alt,
          color: "#1572B6",
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "#F7DF1E",
        },
        {
          name: "React.js",
          icon: FaReact,
          color: "#61DAFB",
        },
        {
          name: "React Native",
          icon: FaReact,
          color: "#61DAFB",
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#06B6D4",
        },
      ],
    },
  
    {
      title: "Backend Skills",
      skills: [
        {
          name: "Python",
          icon: FaPython,
          color: "#3776AB",
        },
        {
          name: "SQL",
          icon: SiMysql,
          color: "#00758F",
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "#47A248",
        },
        {
          name: "Flask",
          icon: SiFlask,
          color: "#FFFFFF",
        },
        {
          name: "Django",
          icon: SiDjango,
          color: "#44B78B",
        },
      ],
    },
  
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", icon: SiCplusplus, color: "#00599C", },
        { name: "Python", icon: FaPython, color: "#3776AB", },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", },
        { name: "SQL", icon: SiMysql, color: "#00758F", },
      ],
    },
  
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032", },
        { name: "GitHub", icon: FaGithub, color: "#FFFFFF", },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF", },
        { name: "Figma", icon: SiFigma, color: "#F24E1E", },
      ],
    },
  ];