import MagicFadeText from "@/components/magic_fade_text";
import SectionTitle from "@/components/section_title";

const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col mr-[5%] ml-[5%]">
      <SectionTitle title="About me" />
      <div className="mb-8" />
      <div className="flex flex-row gap-4">
        <div className="bg-app-color-blue-1 h-2 w-[31.25rem] rounded-full mt-4" />
        <MagicFadeText
          className="text-white text-3xl"
          direction="left"
          text="An experienced software engineer skilled in designing and developing
          scalable applications with Flutter, NextJS, and MERN Stack. Strong
          analytical skills and a passion for innovation drive my ability to
          solve complex challenges effectively. I thrive in collaborative
          environments, bringing proactive leadership and a commitment to
          continuous learning to deliver high-quality solutions."
        />
      </div>
    </section>
  );
};

export default AboutSection;
