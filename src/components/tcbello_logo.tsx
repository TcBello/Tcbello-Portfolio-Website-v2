import logo from "../assets/images/logo.png";
import Image from "next/image";

const TcbelloLogo = () => {
  return (
    <Image
      src={logo}
      alt={"Tcbello"}
      priority
      className="w-44 h-auto max-md:w-32"
    />
  );
};

export default TcbelloLogo;
