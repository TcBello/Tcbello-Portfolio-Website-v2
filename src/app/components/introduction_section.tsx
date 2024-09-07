import Image from "next/image";
import { Spacer } from "@nextui-org/react";
import ResumeButton from "./resume_button";
import MagicBoxReveal from "../../components/magic_box_reveal";
import AppColor from "@/themes/app_color";
import { MyImageLargeScreen, MyImageSmallScreen } from "./my_image";
import MagicSparklesText from "@/components/magic_sparkle_text";

const IntroductionSection = () => {
  return (
    <section className="flex flex-col lg:flex-row mr-4 ml-4 min-h-[80vh] justify-center items-center lg:justify-around">
      {/* SMALL SCREEN MY PICTURE */}
      <MyImageSmallScreen />
      <Spacer y={8} className="lg:hidden" />
      {/* DETAILS */}
      <div className="text-2xl lg:text-3xl text-white space-y-9 lg:w-1/3">
        <MagicBoxReveal boxColor={AppColor.blue1}>
          <p>
            I&apos;m{" "}
            <MagicSparklesText
              text="Thom Carlo Bello"
              className="text-app-color-blue-1 text-4xl lg:text-5xl font-aleo font-bold"
            />
          </p>
        </MagicBoxReveal>
        <MagicBoxReveal boxColor={AppColor.blue1}>
          <p>
            An experienced developer crafting dynamic applications with React
            and Flutter for seamless user experiences.
          </p>
        </MagicBoxReveal>
        <MagicBoxReveal boxColor={AppColor.blue1}>
          <ResumeButton />
        </MagicBoxReveal>
      </div>

      {/* LARGE SCREEN MY PICTURE */}
      <MyImageLargeScreen />
    </section>
  );
};

export default IntroductionSection;
