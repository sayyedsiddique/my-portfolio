import { RiComputerLine } from "react-icons/ri";
import { IProjects, ISkill, Iservices } from "../types/types";
import { BsCircleFill } from "react-icons/bs";

export const services: Iservices[] = [
  {
    title: "Frontend Developer",
    about:
      "when an unknown printer took a <b>galley</b> of type and scrambled it to make a type specimen book...",
    Icon: RiComputerLine,
  },
  {
    title: "Back Development",
    about:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    Icon: RiComputerLine,
  },
  {
    title: "API Development",
    about:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    Icon: RiComputerLine,
  },
  {
    title: "Competitive Coding",
    about:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    Icon: RiComputerLine,
  },
  {
    title: "UI/UX Designer",
    about:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    Icon: RiComputerLine,
  },
  {
    title: "Whatever",
    about:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    Icon: RiComputerLine,
  },
];

export const languages: ISkill[] = [
  { name: "HTML", level: "70%", Icon: BsCircleFill },
  { name: "CSS", level: "60%", Icon: BsCircleFill },
  { name: "Javascript", level: "60%", Icon: BsCircleFill },
  { name: "React", level: "70%", Icon: BsCircleFill },
  { name: "Typescript", level: "50%", Icon: BsCircleFill },
];

export const tools: ISkill[] = [
  { name: "Figma", level: "30%", Icon: BsCircleFill },
  { name: "Git", level: "60%", Icon: BsCircleFill },
  { name: "Photoshop", level: "40%", Icon: BsCircleFill },
  { name: "Framer", level: "30%", Icon: BsCircleFill },
  { name: "NPM", level: "70%", Icon: BsCircleFill },
];

export const projects: IProjects[] = [
  {
    id: 1,
    name: "COVID Tracker",
    desscription:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    imagePath: "https://i.postimg.cc/C1H4Q3hv/myphoto.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl: "https://github.com/sayyedsiddique",
    category: ["react"],
    keyTechs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 2,
    name: "CSV File Reader",
    desscription:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    imagePath: "https://i.postimg.cc/C1H4Q3hv/myphoto.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl: "https://github.com/sayyedsiddique",
    category: ["mongo"],
    keyTechs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 3,
    name: "TODO App",
    desscription:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    imagePath: "https://i.postimg.cc/C1H4Q3hv/myphoto.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl: "https://github.com/sayyedsiddique",
    category: ["typescript"],
    keyTechs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 4,
    name: "Amazon Clone",
    desscription:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    imagePath: "https://i.postimg.cc/C1H4Q3hv/myphoto.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl: "https://github.com/sayyedsiddique",
    category: ["react"],
    keyTechs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 5,
    name: "Zaps Marketing",
    desscription:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    imagePath: "https://i.postimg.cc/C1H4Q3hv/myphoto.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl: "https://github.com/sayyedsiddique",
    category: ["typescript"],
    keyTechs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 6,
    name: "eHadaya",
    desscription:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    imagePath: "https://i.postimg.cc/C1H4Q3hv/myphoto.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl: "https://github.com/sayyedsiddique",
    category: ["react"],
    keyTechs: ["React", "Chart.js", "Material UI"],
  },
];
