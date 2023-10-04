import { IconType } from "react-icons";

export interface Iservices {
  title: string;
  about: string;
  Icon: IconType;
}

// for resume
export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

// for projects
export interface IProjects {
  id: number,
  name: string;
  desscription: string;
  imagePath: any;
  deployedUrl: string;
  githubUrl: string;
  category: Category[];
  keyTechs: string[];
}


export type Category = "react" | "typescript" | "node" | "express" | "mongo" | "css" | "vite"