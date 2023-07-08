import {
  FaShip,
  FaHandshake,
  FaHome,
  FaFolderOpen,
  FaGear,
} from "react-icons/fa";
import { CiWheat } from "react-icons/ci";
// import { BsGear } from "react-icons/Bs";
// import { AiOutlineFundProjectionScreen } from "react-icons/Ai";
import { MdPhoneInTalk } from "react-icons/Md";
import { TbZoomInArea } from "react-icons/Tb";

export const services = [
  {
    id: 1,
    icon: <FaHandshake />,
    text: "Business Consulting",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum.",
  },
  {
    id: 2,
    icon: <CiWheat />,
    text: "Agribusiness Consulting",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum.",
  },
  {
    id: 3,
    url: "#services",
    icon: <FaShip />,
    text: "Commodity Export Advisory",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum.",
  },
];

export const Links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/services",
    text: "Services",
    icon: <FaGear />,
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/Contact",
    text: "Contact",
    icon: <MdPhoneInTalk />,
  },
  {
    id: 5,
    url: "/about",
    text: "about us",
    icon: <TbZoomInArea />,
  },
];
