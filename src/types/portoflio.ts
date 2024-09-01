import { StaticImageData } from "next/image";

type Portfolio = {
  name: string;
  image: string | StaticImageData;
  description?: string;
  technologies: string[];
  visitLink?: string;
  githubLink?: string;
  playstoreLink?: string;
  appstoreLink?: string;
};

export default Portfolio;
