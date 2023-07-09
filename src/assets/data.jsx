import {
  FaShip,
  FaHandshake,
  FaHome,
  FaFolderOpen,
  FaPhoneVolume,
  FaSearchPlus,
} from "react-icons/fa";
import { CiWheat } from "react-icons/ci";
import { BsFillGearFill } from "react-icons/bs";
// import { BsGear } from "react-icons/Bs";
// import { AiOutlineFundProjectionScreen } from "react-icons/Ai";
// import { MdPhoneInTalk } from "react-icons/Md";
// import { TbZoomInArea } from "react-icons/Tb";

export const services = [
  {
    id: 1,
    icon: <FaHandshake />,
    text: "Business Consulting",
    desc: "Our team of professionals provide advisory help to companies  and organizations to achieve their goals and streamline operations in  area of their businesses.",
  },
  {
    id: 2,
    icon: <CiWheat />,
    text: "Agribusiness Consulting",
    desc: "Our team  give business, technical advice and support to farmers,food processing companies and exporters.",
  },
  {
    id: 3,
    url: "#services",
    icon: <FaShip />,
    text: "Commodity Export Advisory",
    desc: "We export and provide advisory support and value adding services to commodity exporters.",
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
    icon: <BsFillGearFill />,
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
    icon: <FaPhoneVolume />,
  },
  {
    id: 5,
    url: "/about",
    text: "about us",
    icon: <FaSearchPlus />,
  },
];
