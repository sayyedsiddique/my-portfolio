
import { FaLaptopCode } from "react-icons/fa6";
import { AiOutlineCloudServer } from "react-icons/ai";
import { AiOutlineApi } from "react-icons/ai";
import { TbBrandTypescript } from "react-icons/tb";
import { SiDesignernews } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { DefaultLang, IProjects, ISkill, Iservices } from "../types/types";
import { BsCircleFill } from "react-icons/bs";
import BbDashboarImg from "../../public/images/projectImgs/blueBillImgs/dashboard.jpg";
import BbStoreDetailsPage from "../../public/images/projectImgs/blueBillImgs/storeDetailsPage.jpg";
import BbAddProduct from "../../public/images/projectImgs/blueBillImgs/addProduct.jpg";
import BbProductListPage from "../../public/images/projectImgs/blueBillImgs/productListPage.jpg";
import BbOnlineOrder from "../../public/images/projectImgs/blueBillImgs/onlineOrder.jpg";
import BbOrderDetailsPage from "../../public/images/projectImgs/blueBillImgs/orderDetailsPage.jpg";
import BbBillPage from "../../public/images/projectImgs/blueBillImgs/billPage.jpg";
import BbArabicMode from "../../public/images/projectImgs/blueBillImgs/arabicMode.jpg";

// eHadaya project images
import EhadayaMainDashboard from "../../public/images/projectImgs/ehadayaImg/mainDashboard.jpg";
import EhadayaOtpPage from "/public/images/projectImgs/ehadayaImg/otpPage.jpg";
import EhadayaGiftcardDashboard from "/public/images/projectImgs/ehadayaImg/giftcardDashboard.jpg";
import EhadayaGiftcartDistributionStepOne from "/public/images/projectImgs/ehadayaImg/giftcartDistributionStepOne.jpg";
import EhadayaGiftcartDistributionStepTwo from "/public/images/projectImgs/ehadayaImg/giftcartDistributionStepTwo.jpg";
import EhadayaGiftcardDistributionThree from "/public/images/projectImgs/ehadayaImg/giftcardDistributionThree.jpg";
import EhadayaOrderSuccess from "/public/images/projectImgs/ehadayaImg/orderSuccess.jpg";
import EhadayaOrderDetails from "/public/images/projectImgs/ehadayaImg/orderDetails.jpg";
import EhadayaReportDashboard from "/public/images/projectImgs/ehadayaImg/reportDashboard.jpg";

import zapsDashboard from "/public/images/projectImgs/zapsImgs/dashboard.jpg";
import zapsCoupanCreation from "/public/images/projectImgs/zapsImgs/coupanCreation.jpg";
import zapsCoupanList from "/public/images/projectImgs/zapsImgs/coupanList.jpg";
import zapsCoupanDistribution from "/public/images/projectImgs/zapsImgs/coupanDistribution.jpg";
import zapsCoupanDistributionSecondStep from "/public/images/projectImgs/zapsImgs/coupanDistributionSecondStep.jpg";
import zapsCoupanDistributionThirdStep from "/public/images/projectImgs/zapsImgs/coupanDistributionThirdStep.jpg";
import zapsOrderList from "/public/images/projectImgs/zapsImgs/orderList.jpg";
import zapsReportDashboard from "/public/images/projectImgs/zapsImgs/reportDashboard.jpg";
import zapsClientMapping from "/public/images/projectImgs/zapsImgs/clientMapping.jpg";
import zapsResoucepPermission from "/public/images/projectImgs/zapsImgs/resoucepPermission.jpg";

import DarkModeMenuImg from "/public/images/projectImgs/menu1.jpg";

import GiftcardFormImg from "/public/images/projectImgs/giftcar_form.jpg";
import signInPageImg from "/public/images/projectImgs/loginSystem/signInPage.jpg";
import verificationPageImg from "/public/images/projectImgs/loginSystem/verificationPage.jpg";
import forgotPasswordPageImg from "/public/images/projectImgs/loginSystem/forgotPasswordPage.jpg";

import TodoAppImg from "/public/images/projectImgs/react_stypescript_todo_app.jpg";
import NoteAppImg from "/public/images/projectImgs/react_typescript_note_app.jpg";
import NotTicToeGameImg from "/public/images/projectImgs/react_tictactoe_game.jpg";

export const services: Iservices[] = [
  {
    title: "Frontend Developer",
    about:
      "I'm skilled at creating websites and applications that look good and are easy to use. I use the <b>React</b> , <b>HTML</b> , <b>CSS</b> , <b>Javascript</b> , <b>Typescript</b>.",
    Icon: FaLaptopCode,
  },
  {
    title: "Back Development",
    about:
      "I'm good at creating the behind-the-scenes parts of a website. This includes making sure the server and database work together to support the front-end interface. I use <b>nodejs</b> and <b>expressjs</b>",
    Icon: AiOutlineCloudServer,
  },
  {
    title: "API Development",
    about:
      "I'm experienced in building the parts of a website that allow different parts to talk to each other. This ensures that everything works together smoothly.",
    Icon: AiOutlineApi,
  },
  {
    title: "Typescript",
    about:
      "I have a good knowledge of <b>Typescript</b>. a powerful superset of JavaScript, enabling the development of more robust and scalable applications through static typing and advanced tooling support.",
    Icon: TbBrandTypescript,
  },
  {
    title: "UI/UX Designer",
    about:
      "I specialize in designing websites and apps that not only look great but also make sense for users. I focus on creating designs that are user-friendly and visually appealing.",
    Icon: SiDesignernews,
  },
  {
    title: "Electron",
    about:
      "Building a Point of Sale (POS) Application with Electron.js and SQLite",
    Icon: IoLogoElectron,
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
    imagePath: `${BbDashboarImg}`,
    sliderImages: [
      { sliderImg: `${BbDashboarImg}` },
      {
        sliderImg: `${BbStoreDetailsPage}`,
      },
      {
        sliderImg: `${BbAddProduct}`,
      },
      {
        sliderImg: `${BbProductListPage}`,
      },
      {
        sliderImg: `${BbOnlineOrder}`,
      },
      {
        sliderImg: `${BbOrderDetailsPage}`,
      },
      {
        sliderImg: `${BbBillPage}`,
      },
      {
        sliderImg: `${BbArabicMode}`,
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
    imagePath: `${EhadayaMainDashboard}`,
    sliderImages: [
      { sliderImg: `${EhadayaMainDashboard}` },
      {
        sliderImg: `${EhadayaOtpPage}`,
      },
      {
        sliderImg: `${EhadayaGiftcardDashboard}`,
      },
      {
        sliderImg: `${EhadayaGiftcartDistributionStepOne}`,
      },
      {
        sliderImg: `${EhadayaGiftcartDistributionStepTwo}`,
      },
      {
        sliderImg: `${EhadayaGiftcardDistributionThree}`,
      },
      {
        sliderImg: `${EhadayaOrderSuccess}`,
      },
      {
        sliderImg: `${EhadayaOrderDetails}`,
      },
      {
        sliderImg: `${EhadayaReportDashboard}`,
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
    imagePath: `${zapsDashboard}`,
    sliderImages: [
      { sliderImg: `${zapsDashboard}` },
      { sliderImg: `${zapsCoupanCreation}` },
      { sliderImg: `${zapsCoupanList}` },
      { sliderImg: `${zapsCoupanDistribution}` },
      {
        sliderImg: `${zapsCoupanDistributionSecondStep}`,
      },
      {
        sliderImg: `${zapsCoupanDistributionThirdStep}`,
      },
      { sliderImg: `${zapsOrderList}` },
      { sliderImg: `${zapsReportDashboard}` },
      { sliderImg: `${zapsClientMapping}` },
      { sliderImg: `${zapsResoucepPermission}` },
    ],
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl:
      "https://github.com/sayyedsiddique/action_menu_with_dark_mode_react.git",
    category: ["react"],
    keyTechs: ["React", "CSS", "React Icons", "Material UI", "React Query"],
  },
  {
    id: 4,
    name: "Action menubar with dark mode",
    desscription:
      "The Action Menubar with Dark Mode project is a dynamic user interface enhancement designed to provide a seamless and intuitive experience for users navigating through an application. This feature-rich menubar not only offers a comprehensive set of actions but also incorporates a modern and visually appealing dark mode theme.",
    imagePath: `${DarkModeMenuImg}`,
    sliderImages: [{ sliderImg: `${DarkModeMenuImg}` }],
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
    imagePath: `${GiftcardFormImg}`,
    sliderImages: [{ sliderImg: `${GiftcardFormImg}` }],
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl:
      "https://github.com/sayyedsiddique/Gifti_global_contact_form_using_html_css",
    category: ["css"],
    keyTechs: ["HTML", "CSS"],
  },
  {
    id: 6,
    name: "Authentication System with Signup, Sign-in, Forgot Password, and OTP Verification",
    desscription:
      "The Full-Functionality Authentication System is a robust and secure solution designed to manage user access to an application or platform. This comprehensive system encompasses key features such as user registration (signup), secure login (sign-in), password recovery (forgot password), and an additional layer of security through OTP (One-Time Password) verification.",
    imagePath: `${signInPageImg}`,
    sliderImages: [
      { sliderImg: `${signInPageImg}` },
      {
        sliderImg: `${verificationPageImg}`,
      },
      {
        sliderImg: `${forgotPasswordPageImg}`,
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
    imagePath: `${TodoAppImg}`,
    sliderImages: [{ sliderImg: `${TodoAppImg}` }],
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
    imagePath: `${NoteAppImg}`,
    sliderImages: [{ sliderImg: `${NoteAppImg}` }],
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
    imagePath: `${NotTicToeGameImg}`,
    sliderImages: [{ sliderImg: `${NotTicToeGameImg}` }],
    deployedUrl: "https://github.com/sayyedsiddique",
    githubUrl:
      "https://github.com/sayyedsiddique/TypescriptTutorials/tree/main/TicTacToeGame",
    category: ["react", "typescript", "vite"],
    keyTechs: ["React", "Typescript", "Vite"],
  },
];

export const languagesData: DefaultLang[] = [
  { name: "English", langCode: "Eng" },
  { name: "English", langCode: "Hin" },
];
