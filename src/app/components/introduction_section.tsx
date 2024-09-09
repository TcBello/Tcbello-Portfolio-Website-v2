import { Spacer } from "@nextui-org/spacer";
import ResumeButton from "./resume_button";
import MagicBoxReveal from "../../components/magic_box_reveal";
import AppColor from "@/themes/app_color";
import { MyImageLargeScreen, MyImageSmallScreen } from "./my_image";
import MagicSparklesText from "@/components/magic_sparkle_text";
import { MY_NAME, SHORT_INTRODUCTION } from "@/constants/strings";

const IntroductionSection = () => {
  return (
    <section className="flex flex-col lg:flex-row mr-4 ml-4 min-h-[80vh] justify-center items-center lg:justify-around">
      {/* SMALL SCREEN MY PICTURE */}
      <MyImageSmallScreen />
      <Spacer y={8} className="lg:hidden" />
      {/* DETAILS */}
      <div className="text-2xl lg:text-3xl text-white space-y-9 lg:w-[40%]">
        <MagicBoxReveal boxColor={AppColor.blue1}>
          <p>
            I&apos;m{" "}
            <MagicSparklesText
              text={MY_NAME}
              className="text-app-color-blue-1 text-4xl lg:text-5xl font-aleo font-bold"
            />
          </p>
        </MagicBoxReveal>
        <MagicBoxReveal boxColor={AppColor.blue1}>
          <p>{SHORT_INTRODUCTION}</p>
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
