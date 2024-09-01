import { StaticImageData } from "next/image";

type WorkExperience = {
  company: string;
  position: string;
  date: string;
  keywords: string[];
  location: string | null;
  image: StaticImageData;
};

export default WorkExperience;
