import { RiComputerLine } from "react-icons/ri";
import { DefaultLang, IProjects, ISkill, Iservices } from "../types/types";
import { BsCircleFill } from "react-icons/bs";


export const services: Iservices[] = [
  {
    title: "Frontend Developer",
    about:
      "I'm skilled at creating websites and applications that look good and are easy to use. I use the <b>React</b> , <b>HTML</b> , <b>CSS</b> , <b>Javascript</b> , <b>Typescript</b>.",
    Icon: RiComputerLine,
  },
  {
    title: "Back Development",
    about:
      "I'm good at creating the behind-the-scenes parts of a website. This includes making sure the server and database work together to support the front-end interface. I use <b>nodejs</b> and <b>expressjs</b>",
    Icon: RiComputerLine,
  },
  {
    title: "API Development",
    about:
      "I'm experienced in building the parts of a website that allow different parts to talk to each other. This ensures that everything works together smoothly.",
    Icon: RiComputerLine,
  },
  {
    title: "Typescript",
    about:
      "I have a good knowledge of <b>Typescript</b>. a powerful superset of JavaScript, enabling the development of more robust and scalable applications through static typing and advanced tooling support. ",
    Icon: RiComputerLine,
  },
  {
    title: "UI/UX Designer",
    about:
      "I specialize in designing websites and apps that not only look great but also make sense for users. I focus on creating designs that are user-friendly and visually appealing.",
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
    sliderImages: [
      { sliderImg: "/src/assets/projectImgs/blueBillImgs/dashboard.jpg" },
      {
        sliderImg: "/src/assets/projectImgs/blueBillImgs/storeDetailsPage.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/blueBillImgs/addProduct.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/blueBillImgs/productListPage.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/blueBillImgs/onlineOrder.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/blueBillImgs/orderDetailsPage.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/blueBillImgs/billPage.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/blueBillImgs/arabicMode.jpg",
      },
    ],
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl: "",
    category: ["react"],
    keyTechs: ["React", "CSS", "React Icons", "Redux"],
  },
  {
    id: 2,
    name: "eHadaya Giftcard Gifting Services",
    desscription:
      "The Action Menubar with Dark Mode project is a dynamic user interface enhancement designed to provide a seamless and intuitive experience for users navigating through an application. This feature-rich menubar not only offers a comprehensive set of actions but also incorporates a modern and visually appealing dark mode theme.",
    imagePath: "/src/assets/projectImgs/ehadayaImg/mainDashboard.jpg",
    sliderImages: [
      { sliderImg:"/src/assets/projectImgs/ehadayaImg/loginPage.jpg" },
      {
        sliderImg: "/src/assets/projectImgs/ehadayaImg/otpPage.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/ehadayaImg/giftcardDashboard.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/ehadayaImg/giftcartDistributionStepOne.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/ehadayaImg/giftcartDistributionStepTwo.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/ehadayaImg/giftcardDistributionThree.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/ehadayaImg/orderSuccess.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/ehadayaImg/orderDetails.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/ehadayaImg/reportDashboard.jpg",
      },
      
    ],
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl:
      "https://github.com/sayyedsiddique/action_menu_with_dark_mode_react.git",
    category: ["react"],
    keyTechs: ["React", "CSS", "React Icons", "Bootstrap", "Redux"],
  },
  {
    id: 3,
    name: "Zaps Reward - Start building your employee rewards",
    desscription:
      "The Action Menubar with Dark Mode project is a dynamic user interface enhancement designed to provide a seamless and intuitive experience for users navigating through an application. This feature-rich menubar not only offers a comprehensive set of actions but also incorporates a modern and visually appealing dark mode theme.",
    imagePath: "/src/assets/projectImgs/zapsImgs/dashboard.jpg",
    sliderImages: [
      { sliderImg: "/src/assets/projectImgs/zapsImgs/dashboard.jpg" },
      { sliderImg: "/src/assets/projectImgs/zapsImgs/coupanCreation.jpg" },
      { sliderImg: "/src/assets/projectImgs/zapsImgs/coupanList.jpg" },
      { sliderImg: "/src/assets/projectImgs/zapsImgs/coupanDistribution.jpg" },
      {
        sliderImg:
          "/src/assets/projectImgs/zapsImgs/coupanDistributionSecondStep.jpg",
      },
      {
        sliderImg:
          "/src/assets/projectImgs/zapsImgs/coupanDistributionThirdStep.jpg",
      },
      { sliderImg: "/src/assets/projectImgs/zapsImgs/orderList.jpg" },
      { sliderImg: "/src/assets/projectImgs/zapsImgs/reportDashboard.jpg" },
      { sliderImg: "/src/assets/projectImgs/zapsImgs/clientMapping.jpg" },
      { sliderImg: "/src/assets/projectImgs/zapsImgs/resoucepPermission.jpg" },
    ],
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl:
      "https://github.com/sayyedsiddique/action_menu_with_dark_mode_react.git",
    category: ["react"],
    keyTechs: ["React", "CSS", "React Icons", "Material UI", "React Query",],
  },
  {
    id: 4,
    name: "Action menubar with dark mode",
    desscription:
      "The Action Menubar with Dark Mode project is a dynamic user interface enhancement designed to provide a seamless and intuitive experience for users navigating through an application. This feature-rich menubar not only offers a comprehensive set of actions but also incorporates a modern and visually appealing dark mode theme.",
    imagePath: "/src/assets/projectImgs/menu1.jpg",
    sliderImages: [
      { sliderImg: "../../assets/projectImgs/blueBillImgs/dashboard.jpg" },
      {
        sliderImg: "../../assets/projectImgs/blueBillImgs/storeDetailsPage.jpg",
      },
    ],
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
    sliderImages: [
      { sliderImg: "../../assets/projectImgs/blueBillImgs/dashboard.jpg" },
      {
        sliderImg: "../../assets/projectImgs/blueBillImgs/storeDetailsPage.jpg",
      },
    ],
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
    imagePath: "/src/assets/projectImgs/loginSystem/signInPage.jpg",
    sliderImages: [
      { sliderImg: "/src/assets/projectImgs/loginSystem/signInPage.jpg" },
      {
        sliderImg: "/src/assets/projectImgs/loginSystem/verificationPage.jpg",
      },
      {
        sliderImg: "/src/assets/projectImgs/loginSystem/forgotPasswordPage.jpg",
      },
    ],
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
    sliderImages: [
      { sliderImg: "../../assets/projectImgs/blueBillImgs/dashboard.jpg" },
      {
        sliderImg: "../../assets/projectImgs/blueBillImgs/storeDetailsPage.jpg",
      },
    ],
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
    sliderImages: [
      { sliderImg: "../../assets/projectImgs/blueBillImgs/dashboard.jpg" },
      {
        sliderImg: "../../assets/projectImgs/blueBillImgs/storeDetailsPage.jpg",
      },
    ],
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
    sliderImages: [
      { sliderImg: "../../assets/projectImgs/blueBillImgs/dashboard.jpg" },
      {
        sliderImg: "../../assets/projectImgs/blueBillImgs/storeDetailsPage.jpg",
      },
    ],
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl:
      "https://github.com/sayyedsiddique/TypescriptTutorials/tree/main/TicTacToeGame",
    category: ["react", "typescript", "vite"],
    keyTechs: ["React", "Typescript", "Vite"],
  },
];


export const languagesData: DefaultLang[] = [
  { name: "English", langCode: "Eng" },
  { name: "English", langCode: "Hin" }
]