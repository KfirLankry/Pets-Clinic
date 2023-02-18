import React, { useState } from "react";
import AddPatientModal from "./AddModal";
import EditPatientModal from "./EditModal";
import { getAllPatients } from "../services/patientService";
import { NoTableData } from "./NoTableData";
import Spinner from "./Spinner";
import { errorMsg } from "services/feedbackService";
import PetClinicTable from "./PetClicincTable";
import FilterPet from "./FilterPet";
import { IPatient } from "@/lib/interfaces";

const MainPetClininc = () => {
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [searchPetName, setSearchPetName] = useState<string>("");
  const [select, setSelect] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedRowId, setSelectedRowId] = useState<string>("");
  const today = new Date();
  const year = today.getFullYear();
  const tableHeaders: string[] = [
    "Patient Name",
    "Phone",
    "Pet Name",
    "Pet Age",
    "Pet Type",
    "Actions",
  ];

  React.useEffect(() => {
    getAllPatients()
      .then((result) => {
        setPatients(result.data);
        setIsLoading(!isLoading);
      })
      .catch((err) => {
        errorMsg("Something went wrong... Please try agian!");
      });
  }, [isChanged]);

  const onEditRow = (rowId: string) => {
    setSelectedRowId(rowId);
    setShowModal(true);
  };

  return (
    <div>
      <div className="addAndSearch flex items-center justify-center">
        <AddPatientModal
          setIsChanged={setIsChanged}
          isChanged={isChanged}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          today={today}
          year={year}
          setShowModal={setShowModal}
        />
        <FilterPet
          setSearch={setSearch}
          setSearchPetName={setSearchPetName}
          setSelect={setSelect}
        />
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-4 overflow-x-auto w-full">
            <div className=" min-w-full rounded-lg w-36">
              {!patients.length && !isLoading ? (
                <NoTableData />
              ) : (
                <PetClinicTable
                  editRow={onEditRow}
                  tableHeaders={tableHeaders}
                  patients={patients}
                  search={search}
                  searchPetName={searchPetName}
                  select={select}
                  year={year}
                />
              )}
            </div>
            {showModal && (
              <EditPatientModal
                setShowModal={setShowModal}
                rowId={selectedRowId}
                isChanged={isChanged}
                setIsChanged={setIsChanged}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPetClininc;
