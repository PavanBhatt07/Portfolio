import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TIC from "@/public/TIC.png";
import Fake from "@/public/Fake.png";
import Canteen from "@/public/Canteen.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Android Development Internship",
    location: "Bangalore",
    description:
      "I have completed my internship at Prodigy InfoTech, where I worked in a support role in Android development.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Data Science Internship",
    location: "Bangalore",
    description:
      "I am currently pursuing another internship at Infotact Solution in the field of Machine Learning, gaining hands-on project experience.",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fake Profile Detection Using ML",
    description:
      "This was my final year project during my graduation. I worked as a frontend developer and also contributed to the backend. The project was built to detect fake profiles.",
    tags: ["Python", "HTML", "CSS", "Flask"],
    imageUrl: Fake,
  },
  {
    title: "Canteen Automation System",
    description:
      "Canteen Automation System is designed to reduce queues in canteen by allowing users to order food online. I built this website specifically for our college to improve the ordering experience.",
    tags: ["HTML", "CSS", "Boostrap", "Php"],
    imageUrl: Canteen,
  },
  {
    title: "TIC-TAC-TOE Application",
    description:
      "A simple Tic-Tac-Toe game that I built to enhance my knowledge of React and improve my frontend development skills.",
    tags: ["React","CSS", "Java Script"],
    imageUrl: TIC,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "React.js",
  "HTML",
  "CSS",
  "Boostrap",
  "JavaScript",
  "SQL",
  "Hibernate",
  "Spring Boot",
  "Git"
] as const;
