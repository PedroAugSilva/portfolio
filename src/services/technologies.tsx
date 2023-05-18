import clsx from "clsx";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

interface ITechnologies {
  name: string;
  icon: JSX.Element;
}

const sizeIcons = 45;

export const technologies: ITechnologies[] = [
  {
    name: "React",
    icon: (
      <FaReact
        size={sizeIcons}
        className="transition-all duration-300 hover:shadow-gradient-md rounded-lg p-2 hover:scale-105 hover:text-indigo-500 cursor-pointer"
      />
    ),
  },
  {
    name: "NodeJs",
    icon: (
      <SiNodedotjs
        size={sizeIcons}
        className="transition-all duration-300 hover:shadow-gradient-md rounded-lg p-2 hover:scale-105 hover:text-lime-500 cursor-pointer"
      />
    ),
  },
  {
    name: "Tailwindcss",
    icon: (
      <SiTailwindcss
        size={sizeIcons}
        className="transition-all duration-300 hover:shadow-gradient-md rounded-lg p-2 hover:scale-105 hover:text-blue-500 cursor-pointer"
      />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <SiJavascript
        size={sizeIcons}
        className="transition-all duration-300 hover:shadow-gradient-md rounded-lg p-2 hover:scale-105 hover:text-yellow-400 cursor-pointer"
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript
        size={sizeIcons}
        className="transition-all duration-300 hover:shadow-gradient-md rounded-lg p-2 hover:scale-105 hover:text-blue-600 cursor-pointer"
      />
    ),
  },
  {
    name: "MySQL",
    icon: (
      <SiMysql
        size={sizeIcons}
        className="transition-all duration-300 hover:shadow-gradient-md rounded-lg p-1.5 hover:scale-105 cursor-pointer"
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <SiMongodb
        size={sizeIcons}
        className="transition-all duration-300 hover:shadow-gradient-md rounded-lg p-2 hover:scale-105 hover:text-green-500 cursor-pointer"
      />
    ),
  },
];
