import Image from "next/image";
import pet from "../public/pet.png";

export const NoTableData = () => {
  return (
    <div className="empty mt-10">
      <p className="text-center text-2xl font-medium mb-5">
        Patients List is Empty...
      </p>
      <div className="image flex items-center justify-center">
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
