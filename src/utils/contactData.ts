import { RiComputerLine } from "react-icons/ri";
import { IProjects, ISkill, Iservices } from "../types/types";
import { BsCircleFill } from "react-icons/bs";
import menuProject from "../assets/projectImgs/menu.jpg";

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
    name: "BlueBill POS - Your Point-of-Sale Solution",
    desscription:
      "At BlueBill POS, we're dedicated to revolutionizing the way businesses manage their transactions. Our cutting-edge Point-of-Sale (POS) system is designed to streamline your operations, enhance customer experiences, and drive growth.",
    imagePath: "/src/assets/projectImgs/blueBillImgs/dashboard.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl:
      "",
    category: ["react"],
    keyTechs: ["React", "CSS", "React Icons", "Redux"],
  },
  {
    id: 2,
    name: "eHadaya Giftcard Gifting Services",
    desscription:
      "The Action Menubar with Dark Mode project is a dynamic user interface enhancement designed to provide a seamless and intuitive experience for users navigating through an application. This feature-rich menubar not only offers a comprehensive set of actions but also incorporates a modern and visually appealing dark mode theme.",
    imagePath: "/src/assets/projectImgs/menu1.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl:
      "https://github.com/sayyedsiddique/action_menu_with_dark_mode_react.git",
    category: ["react"],
    keyTechs: ["React", "CSS", "React Icons"],
  },
  {
    id: 3,
    name: "Zaps Reward - Start building your employee rewards",
    desscription:
      "The Action Menubar with Dark Mode project is a dynamic user interface enhancement designed to provide a seamless and intuitive experience for users navigating through an application. This feature-rich menubar not only offers a comprehensive set of actions but also incorporates a modern and visually appealing dark mode theme.",
    imagePath: "/src/assets/projectImgs/zapsImgs/zaps_dashboard.png",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl:
      "https://github.com/sayyedsiddique/action_menu_with_dark_mode_react.git",
    category: ["react"],
    keyTechs: ["React", "CSS", "React Icons"],
  },
  {
    id: 4,
    name: "Action menubar with dark mode",
    desscription:
      "The Action Menubar with Dark Mode project is a dynamic user interface enhancement designed to provide a seamless and intuitive experience for users navigating through an application. This feature-rich menubar not only offers a comprehensive set of actions but also incorporates a modern and visually appealing dark mode theme.",
    imagePath: "/src/assets/projectImgs/menu1.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl:
      "https://github.com/sayyedsiddique/action_menu_with_dark_mode_react.git",
    category: ["react"],
    keyTechs: ["React", "CSS", "React Icons"],
  },
  {
    id: 5,
    name: "Giftcard form design by pure CSS",
    desscription:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    imagePath: "/src/assets/projectImgs/giftcar_form.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl:
      "https://github.com/sayyedsiddique/Gifti_global_contact_form_using_html_css",
    category: ["css"],
    keyTechs: ["HTML", "CSS"],
  },
  {
    id: 6,
    name: "Full-Functionality Authentication System with Signup, Sign-in, Forgot Password, and OTP Verification",
    desscription:
      "The Full-Functionality Authentication System is a robust and secure solution designed to manage user access to an application or platform. This comprehensive system encompasses key features such as user registration (signup), secure login (sign-in), password recovery (forgot password), and an additional layer of security through OTP (One-Time Password) verification.",
    imagePath: "/src/assets/projectImgs/personalUsingLaptop.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl: "https://github.com/sayyedsiddique/All-Type-Forms",
    category: ["typescript", "react"],
    keyTechs: ["React", "vite", "Material UI"],
  },
  {
    id: 7,
    name: "React + Vite + Typescript Todo List App",
    desscription:
      "The React + Vite + TypeScript Todo List App is a modern, lightweight, and efficient task management application built using cutting-edge web technologies. This application provides users with a seamless and intuitive experience for organizing their tasks, ensuring productivity and efficiency in their daily routines.",
    imagePath: "/src/assets/projectImgs/react_stypescript_todo_app.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl:
      "https://github.com/sayyedsiddique/TypescriptTutorials/tree/512c914f1cefc0334d4ebb11ed5bb5b56ddee62a/TODO_List",
    category: ["react", "typescript", "vite"],
    keyTechs: ["React", "Typescript", "Vite"],
  },
  {
    id: 8,
    name: "Note App Using React + Vite + Typescript",
    desscription:
      "The React + Vite + TypeScript Note App is a modern and efficient note-taking application designed to help users capture, organize, and manage their ideas, and important information effortlessly.",
    imagePath: "/src/assets/projectImgs/react_typescript_note_app.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl:
      "https://github.com/sayyedsiddique/TypescriptTutorials/tree/main/NoteApp",
    category: ["react", "typescript", "vite"],
    keyTechs: ["React", "Typescript", "Vite"],
  },
  {
    id: 9,
    name: "Tic Tac Toe Game Using React + Vite + Typescript",
    desscription:
      "The React + Vite + TypeScript Tic Tac Toe Game is a classic and engaging two-player strategy game designed to provide hours of entertainment and challenge.",
    imagePath: "/src/assets/projectImgs/react_tictactoe_game.jpg",
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl: "https://github.com/sayyedsiddique/TypescriptTutorials/tree/main/TicTacToeGame",
    category: ["react", "typescript", "vite"],
    keyTechs: ["React", "Typescript", "Vite"],
  },
];
