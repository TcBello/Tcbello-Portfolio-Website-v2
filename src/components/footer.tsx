import { Spacer } from "@nextui-org/react";
import TcbelloLogo from "./tcbello_logo";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-app-color-dark-2 p-4 relative flex flex-row max-md:flex-col justify-center items-center min-h-24 max-md:space-y-24">
      <div className="absolute left-4 top-4">
        <TcbelloLogo />
      </div>
      <p className="text-lg lg:text-xl text-white">
        © {date.getFullYear()} Tcbello. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
