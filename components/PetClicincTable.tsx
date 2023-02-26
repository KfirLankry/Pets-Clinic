import React from "react";
import { IPatient } from "@/lib/interfaces";
import { NotFound } from "./NotFound";
import TableBody from "./TableBody";

const PetClinicTable = (props: {
  editRow: (editRow: string) => void;
  soryByName: (soryByName: any) => void;
  setTableIsRendered: (tableIsRendered: boolean) => void;
  tableIsRendered: boolean;
  tableHeaders: string[];
  search: string;
  searchPetName: string;
  select: string;
  year: number;
  filteredList: IPatient[];
}) => {
  React.useEffect(() => {}, [props.tableIsRendered]);
  return (
    <>
      <div className="table">
        {props.filteredList.length ? (
          <table className="mb-5 w-full leading-normal text-center sm:table-fixed mt-3 shadow-md">
            <thead className="bg-black text-white text-center">
              <tr>
                <th className="px-5 py-3 border-b-2 text-xs font-semibold uppercase tracking-wider">
                  Patient Name{" "}
                  <i
                    className="fa-solid fa-sort hover:cursor-pointer"
                    onClick={props.soryByName}
                  ></i>{" "}
                </th>
                {props.tableHeaders.map((header: string, index: number) => {
                  return (
                    <th
                      key={index}
                      className="px-5 py-3 border-b-2 text-xs font-semibold uppercase tracking-wider"
                    >
                      {header}{" "}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {props.filteredList.map((patient: IPatient) => {
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
        ) : (
          <div className="flex justify-start">
            <NotFound />
          </div>
        )}
      </div>
    </>
  );
};

export default PetClinicTable;
