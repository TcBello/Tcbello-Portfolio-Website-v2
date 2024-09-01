import { StaticImageData } from "next/image";

type TestimonialType = {
  image: string | StaticImageData;
  name: string;
  position: string;
  company: string;
  content: string;
};

export default TestimonialType;
