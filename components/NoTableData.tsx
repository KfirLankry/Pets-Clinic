import Image from "next/image";
import pet from "../public/pet.png";

export const NoTableData = () => {
  return (
    <div className="empty mt-5">
      <div className="image ">
        <Image
          src={pet}
          alt="Pet"
          width={700}
          height={564}
          quality={100}
        ></Image>
      </div>
    </div>
  );
};
