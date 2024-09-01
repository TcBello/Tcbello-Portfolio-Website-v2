import TestimonialType from "@/types/testimonial_type";
import { Spacer } from "@nextui-org/spacer";
import Image from "next/image";

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  return (
    <div className="bg-app-color-gray-1 flex flex-row rounded-lg max-w-screen-sm max-h-80 space-x-4">
      <div className="flex flex-col max-w-xs pt-4 pl-4 pb-4">
        <h6 className="text-xl font-bold">{testimonial.name}</h6>

        <div className="flex flex-row items-center space-x-2">
          <span className="h-1 w-4 bg-app-color-blue-1 rounded-full" />
          <h6 className="text-lg">{`${testimonial.position} @ ${testimonial.company}`}</h6>
        </div>

        <Spacer y={4} />

        <p>&quot;{testimonial.content}&quot;</p>
      </div>

      <div className="w-[223px] h-auto flex flex-col justify-center">
        <div className="w-[223px] h-[196px] bg-app-color-blue-1 rounded-tl-3xl rounded-bl-3xl relative mt-4">
          <Image
            src={testimonial.image}
            alt={"Rachel Image"}
            className="w-[157px] h-[250px] absolute bottom-0 left-1/2 right-1/2 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
