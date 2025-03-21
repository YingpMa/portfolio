import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import github_icon from "./github.svg";
import linkedin_icon from "./linkedin.svg";

export const skillsData = [
  {
    category: "Front-end",
    skills: [
      { icon: "/icons/html.svg", name: "HTML" },
      { icon: "/icons/css.svg", name: "CSS" },
      { icon: "/icons/sass.svg", name: "SASS" },
      { icon: "/icons/javascript.svg", name: "JavaScript" },
      { icon: "/icons/typescript.svg", name: "TypeScript" },
      { icon: "/icons/react.svg", name: "React" },
      { icon: "/icons/nextjs.svg", name: "Next.js" },
      { icon: "/icons/redux.svg", name: "Redux" },
      { icon: "/icons/tailwind.svg", name: "Tailwind CSS" },
      { icon: "/icons/shadcn.svg", name: "Shadcn UI" },
      { icon: "/icons/framer-motion.svg", name: "Framer Motion" },
      { icon: "/icons/threedotjs.svg", name: "Three.js" },
    ],
  },
  {
    category: "Back-end",
    skills: [
      { icon: "/icons/nodejs.svg", name: "Node.js" },
      { icon: "/icons/express.svg", name: "Express" },
      { icon: "/icons/flask.svg", name: "Flask" },
      { icon: "/icons/fastapi.svg", name: "FastAPI" },
      { icon: "/icons/mongodb.svg", name: "MongoDB" },
      { icon: "/icons/prisma.svg", name: "Prisma" },
      { icon: "/icons/python.svg", name: "Python" },
      { icon: "/icons/jest.svg", name: "Jest" },
      { icon: "/icons/postman.svg", name: "Postman" },
      { icon: "/icons/clerk.svg", name: "Clerk" },
      { icon: "icons/sqlite.svg", name: "SQLite" },
      { icon: "icons/sqlalchemy.svg", name: "SQLAlchemy" },
      { icon: "icons/postgresql.svg", name: "PostgreSQL" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { icon: "/icons/aws.svg", name: "AWS" },
      { icon: "/icons/vercel.svg", name: "Vercel" },
      { icon: "/icons/docker.svg", name: "Docker" },
      { icon: "/icons/render.svg", name: "Render" },
      { icon: "/icons/firebase.svg", name: "Firebase" },
      { icon: "/icons/googlecloud.svg", name: "Google Cloud" },
    ],
  },
  {
    category: "Tools & Misc",
    skills: [
      { icon: "/icons/git.svg", name: "Git" },
      { icon: "/icons/github.svg", name: "GitHub" },
      { icon: "/icons/webpack.svg", name: "Webpack" },
      { icon: "/icons/figma.svg", name: "Figma" },
      { icon: "/icons/vite.svg", name: "Vite" },
    ],
  },
];

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  linkedin_icon,
  github_icon,
};

export const workData = [
  {
    title: "Budget Tracker",
    description:
      "A sleek and powerful full-stack budget tracking application built with modern tools like Next.js, TypeScript, Prisma ORM, Tailwind CSS, and more.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "Clerk"],
    images: ["/budget-1.png", "/budget-2.png", "/budget-3.png"],
    darkImages: [
      "/budget-dark-1.png",
      "/budget-dark-2.png",
      "/budget-dark-3.png",
    ],
    link: "https://budget-tracker-yingping.vercel.app/", // Live Demo 链接
    github: "https://github.com/YingpMa/budget-tracker", // GitHub 仓库
  },
  {
    title: "Bestie Hub",
    description:
      "A full-stack web application that allows users to manage their friendships, built with Flask, React, and Chakra UI.",
    stack: ["Flask", "React", "Chakra UI", "SQLite", "SQLAlchemy"],
    images: ["/bestie-1.png", "/bestie-2.png"],
    darkImages: ["/bestie-dark-1.png", "/bestie-dark-2.png"],
    link: "https://bestie-hub-yingping.onrender.com/", // Live Demo 链接
    github: "https://github.com/YingpMa/bestie-hub", // GitHub 仓库
  },
  {
    title: "Notes",
    description:
      "A sleek full-stack notes app that lets users sign up, log in, create, edit, delete, search, and pin notes.",
    stack: [
      "React",
      "Tailwind CSS",
      "react-router-dom",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    images: [
      "/notes-1.png",
      "/notes-2.png",
      "/notes-3.png",
      "/notes-4.png",
      "/notes-5.png",
      "/notes-6.png",
    ],
    darkImages: [
      "/notes-dark-1.png",
      "/notes-dark-2.png",
      "/notes-dark-3.png",
      "/notes-dark-4.png",
      "/notes-dark-5.png",
      "/notes-dark-6.png",
    ],
    link: "https://notes-yingping.vercel.app/login", // Live Demo 链接
    github: "https://github.com/YingpMa/notes", // GitHub 仓库（请替换为实际仓库链接）
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];
