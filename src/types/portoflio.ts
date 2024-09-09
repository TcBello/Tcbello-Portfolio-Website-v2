import { StaticImageData } from "next/image";

type PortfolioType = {
  name: string;
  image: string | StaticImageData;
  description?: string;
  technologies: string[];
  visitLink?: string;
  githubLink?: string;
  playstoreLink?: string;
  appstoreLink?: string;
};

export default PortfolioType;
