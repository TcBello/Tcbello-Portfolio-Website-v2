import WorkExperience from "@/types/work_experience";
import enkartoLogo from "@/assets/images/enkarto.jpg";
import nittivLogo from "@/assets/images/nittiv.jpg";
import kaheroLogo from "@/assets/images/kahero.png";
import hipeLogo from "@/assets/images/hipe.png";

const WORK_EXPERIENCES: WorkExperience[] = [
  {
    company: "HiPE Japan Inc.",
    position: "Software Engineer",
    date: "July 2024 - Present",
    keywords: ["Laravel"],
    location: "Quezon City, Philippines",
    image: hipeLogo,
  },
  {
    company: "Enkarto",
    position: "Mobile Developer",
    date: "August 2023 - July 2024",
    keywords: ["Flutter", "Firebase", "Figma", "Agile"],
    location: "Remote",
    image: enkartoLogo,
  },
  {
    company: "Nittiv",
    position: "Flutter Developer",
    date: "August 2022 - August 2023",
    keywords: ["Flutter", "Firebase", "Figma", "Vercel", "Agile"],
    location: "Remote",
    image: nittivLogo,
  },
  {
    company: "KaHero",
    position: "Web Developer",
    date: "January 2023 - May 2023",
    keywords: ["React", "Firebase", "Figma"],
    location: "Remote",
    image: kaheroLogo,
  },
];

export default WORK_EXPERIENCES;
