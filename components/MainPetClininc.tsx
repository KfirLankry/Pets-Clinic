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
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [filteredList, setFilteredList] = useState<IPatient[]>([]);
  const [tableIsRendered, setTableIsRendered] = useState<boolean>(true);

  const today = new Date();
  const year = today.getFullYear();

  const tableHeaders: string[] = [
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
        setFilteredList(result.data);
        setIsLoading(false);
      })
      .catch((err) => {
        errorMsg("Something went wrong... Please try agian!");
      });
  }, [isChanged]);

  const onEditRow = (rowId: string) => {
    setSelectedRowId(rowId);
    setShowModal(true);
  };

  // Search filter
  const filter = (e: { target: { value: string } }) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = patients.filter((p) => {
        return (
          p.name.toLowerCase().includes(keyword.toLowerCase()) ||
          p.petName.toLowerCase().includes(keyword.toLowerCase())
        );
      });
      setFilteredList(results);
    } else {
      setFilteredList(patients);
    }
    setName(keyword);
  };

  // Sort by Patients name
  const soryByName = () => {
    tableIsRendered
      ? filteredList.sort((a, b) => a.name.localeCompare(b.name))
      : filteredList.sort((a, b) => b.name.localeCompare(a.name));
    setTableIsRendered(!tableIsRendered);
  };

  const petTypes = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "parrot", label: "Parrot" },
  ];

  // Sort by PetType
  const onSort = (sortBy: any[]) => {
    const animals = sortBy.map((animal) => animal.label);
    if (!sortBy.length) {
      setFilteredList(patients);
      return;
    }
    const copyFilteredList = [...filteredList];

    const res = copyFilteredList.sort((a: any, b: any) => {
      const aIndex = animals.indexOf(a.petType);
      const bIndex = animals.indexOf(b.petType);

      if (aIndex === -1 && bIndex === -1) {
        return 0;
      } else if (aIndex === -1) {
        return 1;
      } else if (bIndex === -1) {
        return -1;
      } else {
        return aIndex - bIndex;
      }
    });

    setFilteredList(res);
  };

  return (
    <div>
      <div className="py-4 overflow-x-auto">
        <div className="min-w-full rounded-lg w-36">
          {!patients.length && !isLoading ? (
            <>
              <AddPatientModal
                setIsChanged={setIsChanged}
                isChanged={isChanged}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                today={today}
                year={year}
                setShowModal={setShowModal}
                isSubmit={isSubmit}
                setIsSubmit={setIsSubmit}
              />
              <div className="flex justify-center items-center">
                <NoTableData />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center">
                {!isLoading ? (
                  <FilterPet
                    setSearch={setSearch}
                    setSearchPetName={setSearchPetName}
                    setSelect={setSelect}
                    filter={filter}
                    sort={onSort}
                    pets={petTypes}
                  />
                ) : (
                  <Spinner />
                )}
              </div>

              <div className="flex justify-center items-center">
                {!isLoading ? (
                  <PetClinicTable
                    editRow={onEditRow}
                    tableHeaders={tableHeaders}
                    search={search}
                    searchPetName={searchPetName}
                    select={select}
                    year={year}
                    filteredList={filteredList}
                    soryByName={soryByName}
                    tableIsRendered={tableIsRendered}
                    setTableIsRendered={setTableIsRendered}
                  />
                ) : (
                  <Spinner />
                )}
              </div>
              {!isLoading ? (
                <AddPatientModal
                  setIsChanged={setIsChanged}
                  isChanged={isChanged}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  today={today}
                  year={year}
                  setShowModal={setShowModal}
                  isSubmit={isSubmit}
                  setIsSubmit={setIsSubmit}
                />
              ) : null}
            </>
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
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default MainPetClininc;
