import { Spacer } from "@nextui-org/spacer";
import AboutSection from "./components/about_section";
import IntroductionSection from "./components/introduction_section";
import SkillSection from "./components/skill_section";
import PortfolioSection from "./components/portfolio_section";
import ExperienceSection from "./components/experience_section";
import TestimonialSection from "./components/testimonial_section";
import ContactSection from "./components/contact_section";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const spacingHeight = 16;

export default function Home() {
  return (
    <main className="bg-app-color-dark-1 min-h-screen text-white">
      <IntroductionSection />
      <Spacer y={spacingHeight} />
      <AboutSection />
      <Spacer y={spacingHeight} />
      <SkillSection />
      <Spacer y={spacingHeight} />
      <PortfolioSection />
      <Spacer y={spacingHeight} />
      <ExperienceSection />
      <Spacer y={spacingHeight} />
      <TestimonialSection />
      <Spacer y={spacingHeight} />
      <ContactSection />
      <Spacer y={spacingHeight} />
      <ToastContainer />
    </main>
  );
}
