import Image from "next/image";
import notFound from "../public/notfound.png";

export const NotFound = () => {
  return (
    <div className="empty mt-5 mb-5">
      <p className="text-center mt-5 text-xl text-gray">
        <i className="fa-solid fa-circle-exclamation"></i> Couldn't find a name
        on the list...
      </p>
      <Image
        src={notFound}
        alt="NotFound"
        width={500}
        height={464}
        quality={100}
      ></Image>
    </div>
  );
};
