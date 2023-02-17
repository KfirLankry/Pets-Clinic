import Image from "next/image";
import logo from "../public/logo.png";

const Title = () => {
  return (
    <div className="image mx-auto">
      <Image src={logo} alt="Logo"></Image>
    </div>
  );
};

export default Title;
