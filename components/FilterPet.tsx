import { IPatient } from "@/lib/interfaces";
import Select from "react-select";

const FilterPet = (props: {
  setSearch: (setSearch: string) => void;
  setSearchPetName: (setSearchPetName: string) => void;
  setSelect: (setSelect: string) => void;
  filter: (setSelect: any) => void;
  pets: object[];
  sort: (sort: any) => void;
}) => {
  return (
    <>
      <input
        className="p-1.5 mx-1 border-solid border-2 border-lightgrey rounded-md  w-4/12"
        type="search"
        placeholder="Patient Name..."
        onChange={props.filter}
      />
      <input
        className="p-1.5 border-solid border-2 border-lightgrey rounded-md  w-4/12"
        type="search"
        placeholder="Pet Name..."
        onChange={props.filter}
      />
      <Select
        isMulti
        options={props.pets}
        className="basic-multi-select mx-1 border-solid border-lightgrey  w-4/12"
        classNamePrefix="select"
        placeholder="Sort..."
        onChange={props.sort}
      />
    </>
  );
};

export default FilterPet;
