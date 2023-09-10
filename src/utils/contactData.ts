import { RiComputerLine } from "react-icons/ri";
import { ISkill, Iservices } from "../types/types";
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
