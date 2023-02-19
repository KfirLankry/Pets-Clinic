import React, { useState } from "react";
import { addNewPatient } from "../services/patientService";
import AddPatientBtn from "./AddPatientBtn";
import { useFormik } from "formik";
import * as yup from "yup";
import { errorMsg, successMsg } from "services/feedbackService";
import ModalBody from "./ModalBody";

function AddModal(props: {
  setIsChanged: (isChanged: boolean) => void;
  isChanged: boolean;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  today: Date;
  year: number;
  setShowModal: (showModal: boolean) => void;
}) {
  const [showModal, setShowModal] = useState<boolean>(false);

  // Pet BirthDate
  const day = `${
    props.today.getDate() < 10 ? "0" : ""
  }${props.today.getDate()}`;
  const month = `${props.today.getMonth() + 1 < 10 ? "0" : ""}${
    props.today.getMonth() + 1
  }`;
  const todayDate = `${props.year}/${month}/${day}`;

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      petName: "",
      petBirthDate: todayDate,
      petType: "",
    },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      phone: yup.string().required().min(9),
      petName: yup.string().required().min(2),
      petBirthDate: yup.string().required(),
      petType: yup.string().required().min(2),
    }),
    onSubmit: (values, { resetForm }) => {
      addNewPatient(values)
        .then((result) => {
          successMsg("Patient Added Successfully!");
          setShowModal(false);
          props.setIsChanged(!props.isChanged);
          props.setIsLoading(!props.isLoading);
          formik.resetForm();
        })
        .catch((err) => {
          errorMsg("Something went wrong... Please try agian!");
        });
    },
  });

  return (
    <>
      <AddPatientBtn setShowModal={setShowModal} />
      {showModal ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="main w-96 relative my-9 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-black text-white font-extrabold">
                  <h3 className="text-2xl">
                    <i className="fa-solid fa-plus"></i> New Patient
                  </h3>
                </div>
                {/*Modal Body*/}
                <div className="addForm mx-auto pt-3">
                  <ModalBody formik={formik} setShowModal={setShowModal} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default AddModal;
