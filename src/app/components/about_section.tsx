import MagicFadeText from "@/components/magic_fade_text";
import SectionTitle from "@/components/section_title";
import { ABOUT_ME } from "@/constants/strings";

const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col mr-[5%] ml-[5%]">
      <SectionTitle title="About me" />
      <div className="mb-8" />
      <div className="flex flex-row gap-4">
        <div className="bg-app-color-blue-1 h-2 w-[31.25rem] rounded-full mt-4" />
        <MagicFadeText
          className="text-white text-2xl lg:text-3xl"
          direction="left"
          text={ABOUT_ME}
        />
      </div>
    </section>
  );
};

export default AboutSection;
