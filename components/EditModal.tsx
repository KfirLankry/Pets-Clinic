import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { IPatient } from "../lib/interfaces";
import { errorMsg, successMsg } from "services/feedbackService";
import {
  editPatient,
  getPatientById,
  deletePatient,
} from "../services/patientService";
import ModalBody from "./ModalBody";

function EditModal(props: {
  setShowModal: (showModal: boolean) => void;
  rowId: string;
  isChanged: boolean;
  setIsChanged: (isChanged: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}) {
  const handleDeletePatient = (patient: IPatient) => {
    confirm(`${patient.name} will be deleted permanently, are you sure?`);
    deletePatient(patient)
      .then(() => {
        successMsg("Patient Deleted Successfully!");
        props.setIsChanged(!props.isChanged);
        props.setIsLoading(!props.isLoading);
        props.setShowModal(false);
      })
      .catch((err) => {
        errorMsg("Something went wrong, Please try agian!");
      });
  };

  const [patient, setPatient] = useState<IPatient>({
    name: "",
    phone: "",
    petName: "",
    petBirthDate: "",
    petType: "",
  });

  React.useEffect(() => {
    getPatientById(props.rowId as string)
      .then((result) => {
        setPatient(result.data);
      })
      .catch((err) => {
        errorMsg("Something went wrong, Please try agian!");
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      name: patient.name,
      phone: patient.phone,
      petName: patient.petName,
      petBirthDate: patient.petBirthDate,
      petType: patient.petType,
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      phone: yup.string().required().min(9).max(10),
      petName: yup.string().required().min(2),
      petBirthDate: yup.string().required(),
      petType: yup.string().required().min(2),
    }),
    onSubmit: (values, onSubmitProps) => {
      onSubmitProps.setSubmitting(false);
      let patient_id: IPatient = { ...values, _id: props.rowId as string };
      editPatient(patient_id)
        .then((result) => {
          successMsg("Patient Edited Successfully!");
          props.setIsChanged(!props.isChanged);
          props.setIsLoading(!props.isLoading);
          props.setShowModal(false);
        })
        .catch((error) => {
          errorMsg("Something went wrong... Please try agian!");
        });
    },
  });

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="main w-96 relative my-9 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-black text-white font-extrabold">
              <h3 className="text-2xl">
                <i className="fa-regular fa-pen-to-square"></i> Edit Patient
              </h3>
              <div className="deleteBtn">
                <button
                  className="bg-error hover:bg-error_hover w-10 py-1.5 px-1.5 text-white rounded-full"
                  onClick={() => handleDeletePatient(patient)}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
            {/*Modal Body*/}
            <div className="addForm mx-auto pt-3">
              <ModalBody formik={formik} setShowModal={props.setShowModal} />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default EditModal;
