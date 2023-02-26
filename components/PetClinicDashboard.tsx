import Title from "./Title";
import MainPetClininc from "./MainPetClininc";
import Footer from "./Footer";

export const PetClinicDashboard = () => {
  return (
    <>
      <div className="grid grid-rows-auto-1fr gap-y-4 p-4 md:p-8 max-w-screen-lg mx-auto">
        <Title />
        <MainPetClininc />
      </div>
      <Footer />
    </>
  );
};
