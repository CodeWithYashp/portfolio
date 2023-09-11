import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";
import Work7 from "./assets/project-7.jpg";
import Work8 from "./assets/project-8.jpg";
import Work9 from "./assets/project-9.jpg";
import Work10 from "./assets/project-10.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav--icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav--icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav--icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav--icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Yash",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Sharma",
  },

  {
    id: 3,
    title: "Age : ",
    description: "21 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Pandey Niwas, Dausa, Rajasthan",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 9782527528",
  },

  {
    id: 8,
    title: "Email : ",
    description: "ypandey.5602@gmail.com",
  },

  {
    id: 9,
    title: "Langages : ",
    description: "English, Hindi",
  },
];

export const stats = [
  {
    id: 1,
    no: "5+",
    title: "Months Of Intern <br /> Experience",
  },

  {
    id: 2,
    no: "10+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "80+",
    title: "Designs Using <br /> Canva",
  },

  {
    id: 4,
    no: "200+",
    title: " Overall DSA Problems <br /> Solved",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "12/2021 - 04/2022",
    title: "Research Analyst <span> FURSAT </span>",
    desc: "Monitoring the progress of data collection. Managing a team of data collectors and data input assistants. Collating information and interpreting data for clients.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "12/2020 - 07/2023",
    title: "Graphics Designer <span> MITRA </span>",
    desc: "Designed Posters, Magazines and PPTs for Various Events. Led A Team Of Graphic Designers.",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020-24",
    title:
      "Engineering Degree <span> UIET, Panjab University, Chandigarh</span>",
    desc: "Electronics And Communication Engineering",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019",
    title:
      "Senior Secondary <span> Swami Vivekananda Sr. Sec. School, Dausa </span>",
    desc: "Class 12 (PCM)",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017",
    title: "Secondary <span> St. Mary's Convent School, Dausa </span>",
    desc: "Class 10",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "70",
  },

  {
    id: 3,
    title: "Css",
    percentage: "80",
  },

  {
    id: 4,
    title: "React",
    percentage: "60",
  },

  {
    id: 5,
    title: "Node",
    percentage: "70",
  },

  {
    id: 6,
    title: "Express",
    percentage: "80",
  },

  {
    id: 7,
    title: "DS Algo",
    percentage: "60",
  },

  {
    id: 8,
    title: "OOPS",
    percentage: "70",
  },
  {
    id: 9,
    title: "Mongo DB",
    percentage: "60",
  },
  {
    id: 10,
    title: "Bootstrap",
    percentage: "50",
  },
  {
    id: 11,
    title: "Canva",
    percentage: "80",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Javascript Project",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "To-Do List",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML CSS JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://yashtodo.vercel.app/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Facebook Clone",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Tailwind CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://facebookcloneyash.vercel.app/",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Frontend Project",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Text Utils",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React Js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://textutils-yash.vercel.app",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Microsoft Clone",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Tailwind CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://microsoftcloneyash.vercel.app/",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Frontend Project",
    details: [
      {
        title: "Project : ",
        desc: "Travel Journal",
      },
      {
        title: "Language : ",
        desc: "React JS",
      },
      {
        title: "Preview : ",
        desc: "https://yashtraveljournal.vercel.app/",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Frontend Project",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Notes App",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React Js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://yashnotes.vercel.app/",
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: "Backend Project",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Weather App",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Node Js, Express Js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://meteomateweather.vercel.app/",
      },
    ],
  },
  {
    id: 8,
    img: Work8,
    title: "Game",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Bubbles Game",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML CSS JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://bubbleburst.vercel.app/",
      },
    ],
  },
  {
    id: 9,
    img: Work9,
    title: "Music Player",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Spotify Clone",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML CSS JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://spotifycloneyash.vercel.app/",
      },
    ],
  },
  {
    id: 10,
    img: Work10,
    title: "MERN Project",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "ShopNest",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERN Stack",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://yash-ecommerceshopnest.vercel.app/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 2,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
