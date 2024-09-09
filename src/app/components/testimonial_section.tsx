import { Spacer } from "@nextui-org/spacer";
import TESTIMONIALS from "@/constants/testimonials";
import TestimonialCard from "./testimonial_card";
import MagicMarquee from "@/components/magic_marquee";
import SectionTitle from "@/components/section_title";

const TestimonialDots = () => {
  return (
    <div className="flex flex-row gap-16">
      <div className="size-5 lg:size-8 rounded-full bg-app-color-blue-1" />
      <div className="size-5 lg:size-8 rounded-full bg-app-color-blue-3" />
      <div className="size-5 lg:size-8 rounded-full bg-app-color-blue-4" />
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="flex flex-col ml-[5%] mr-[5%] items-center">
      <div className="self-start space-y-8">
        <TestimonialDots />
        <TestimonialDots />
      </div>

      <Spacer y={8} />

      <SectionTitle title="Testimonials" />

      <Spacer y={8} />

      <div className="w-full relative">
        <MagicMarquee
          pauseOnHover
          className="[--duration:40s] ml-auto mr-auto w-[99%]"
        >
          {TESTIMONIALS.map((testimonial, index) => {
            return (
              <TestimonialCard
                key={`Testimonial-${index}`}
                testimonial={testimonial}
              />
            );
          })}
        </MagicMarquee>
        <div className="bg-marquee-gradient absolute top-0 w-full h-full" />
      </div>

      <Spacer y={8} />

      <div className="self-end space-y-8">
        <TestimonialDots />
        <TestimonialDots />
      </div>
    </section>
  );
};

export default TestimonialSection;
