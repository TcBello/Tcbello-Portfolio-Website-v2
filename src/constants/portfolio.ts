import Portfolio from "@/types/portoflio";
import animehistoryImage from "@/assets/images/animehistory.png";
import nittivImage from "@/assets/images/nittiv.png";
import musicImage from "@/assets/images/music.png";

export const MOBILE_PORTFOLIO: Portfolio[] = [
  {
    name: "Anime History",
    description:
      "Anime History is a Mobile App that you can browse animes and add them as your watched anime or completed anime.",
    image: animehistoryImage,
    technologies: ["Flutter", "Node.js", "Express.js", "MongoDB", "Heroku"],
    githubLink: "https://github.com/TcBello/Anime-History",
  },
  {
    name: "Social Media",
    description:
      "A social media app for travelers that can easily explore & book top rated nature, wellness & outdoor destinations.",
    image: nittivImage,
    technologies: ["Flutter", "Firebase"],
  },
  {
    name: "Music App",
    description: "My customizable offline music player app",
    image: musicImage,
    technologies: ["Flutter"],
    githubLink: "https://github.com/TcBello/My-Music",
  },
];

export const WEB_PORTFOLIO: Portfolio[] = [
  {
    name: "Portfolio Website",
    description: "My portfolio website version 2",
    image:
      "https://raw.githubusercontent.com/TcBello/chatty/master/screenshots/chat_page_ss_2.png",
    technologies: ["Next.js"],
  },
  {
    name: "Chatty",
    description:
      "A simple chatting website that can find, meet, and get to know new people with the same preferences.",
    image:
      "https://raw.githubusercontent.com/TcBello/chatty/master/screenshots/chat_page_ss_2.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
    githubLink: "https://github.com/TcBello/chatty/tree/master",
    visitLink: "https://chatty-tcbello.vercel.app/",
  },
  {
    name: "CapMS",
    description: "Capstone Management System for Batangas State University",
    image:
      "https://raw.githubusercontent.com/TcBello/CapMS/master/screenshots/Screenshot1.png",
    technologies: ["React", "Firebase"],
    githubLink: "https://github.com/TcBello/CapMS",
    visitLink: "https://cap-ms.vercel.app/",
  },
  {
    name: "Movies",
    description: "Search any movies and know its informations",
    image:
      "https://raw.githubusercontent.com/TcBello/Movies/master/screenshots/ss_2.png",
    technologies: ["React", "OMDB API"],
    githubLink: "https://github.com/TcBello/Movies",
    visitLink: "https://tcbello-movies.vercel.app/",
  },
  {
    name: "Chatty",
    description:
      "A simple chatting website that can find, meet, and get to know new people with the same preferences.",
    image:
      "https://raw.githubusercontent.com/TcBello/chatty/master/screenshots/chat_page_ss_2.png",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
    githubLink: "https://github.com/TcBello/chatty/tree/master",
    visitLink: "https://chatty-tcbello.vercel.app/",
  },
];
