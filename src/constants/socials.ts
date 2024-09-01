import SocialType from "@/types/social_type";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const SOCIALS: SocialType[] = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/SxzOtaku",
    icon: FaFacebookF,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/tcbello16",
    icon: FaTwitter,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tcbello/",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    link: "https://github.com/tcbello",
    icon: FaGithub,
  },
  {
    name: "Gmail",
    link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hire.thombello@gmail.com&su=Someone+Got+In+Touch+With+You",
    icon: MdMail,
  },
];

export default SOCIALS;
