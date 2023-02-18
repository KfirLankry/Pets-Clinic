import { IPatient } from "@/lib/interfaces";
import TableBody from "./TableBody";

const PetClinicTable = (props: {
  editRow: (editRow: string) => void;
  tableHeaders: string[];
  patients: IPatient[];
  search: string;
  searchPetName: string;
  select: string;
  year: number;
}) => {
  return (
    <table className="min-w-full leading-normal text-center sm:table-fixed mt-3 shadow-md">
      <thead className="bg-black text-white text-center">
        <tr>
          {props.tableHeaders.map((header: string, index: number) => {
            return (
              <th
                key={index}
                className="px-5 py-3 border-b-2 text-xs font-semibold uppercase tracking-wider"
              >
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.patients
          .filter((patient: IPatient) => {
            return props.search.toLowerCase() == "" ||
              props.search.toUpperCase() == ""
              ? patient
              : patient.name.toLowerCase().includes(props.search) ||
                  patient.name.toUpperCase().includes(props.search);
          })
          .filter((pet: IPatient) => {
            return props.searchPetName.toLowerCase() == "" ||
              props.searchPetName.toUpperCase() == ""
              ? pet
              : pet.petName.toLowerCase().includes(props.searchPetName) ||
                  pet.petName.toUpperCase().includes(props.searchPetName);
          })
          .filter((selected: IPatient) => {
            return props.select == undefined
              ? selected
              : selected.petType.includes(props.select);
          })
          .map((patient: IPatient) => {
            return (
              <tr key={patient._id} className="bg-white">
                <TableBody
                  patient={patient}
                  year={props.year}
                  editRow={props.editRow}
                />
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default PetClinicTable;
