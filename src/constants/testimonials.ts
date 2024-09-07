import TestimonialType from "@/types/testimonial_type";
import rachelImage from "@/assets/images/rachel.png";
import rogerImage from "@/assets/images/roger.png";
import miraImage from "@/assets/images/mira.png";

const TESTIMONIALS: TestimonialType[] = [
  {
    name: "Rachel Quizon",
    content:
      "Thom consistently demonstrated a high level of cooperation and professionalism, ensuring that our designs in Figma seamlessly translated into the POS system. His attention to detail was evident in both his coding skills and his commitment to maintaining clean and accurate code.",
    position: "UI/UX",
    company: "KaHero",
    image: rachelImage,
  },
  {
    name: "Roger Braun",
    content:
      "It was commendable that he understood intricacies of the project and took problem solving initiatives. Thom always went far beyond what was expected to ensure that the mobile AI chat app met not only but even exceeded our expectations.",
    position: "CPO",
    company: "Enkarto",
    image: rogerImage,
  },
  {
    name: "Julie Ann Mirabel",
    content:
      "Thom is someone who consistently tackles challenges head-on, showing resilience and determination in everything he does. His ability to remain composed in the face of obstacles is truly commendable, as he not only addresses issues directly but also actively seeks feedback to grow as a professional.",
    position: "Marketing Head",
    company: "Nittiv",
    image: miraImage,
  },
];

export default TESTIMONIALS;
