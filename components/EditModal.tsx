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

function EditModal(props: any) {
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

  const [patient, setPatient] = useState({
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
      phone: yup.string().required().min(9),
      petName: yup.string().required().min(2),
      petBirthDate: yup.string().required(),
      petType: yup.string().required().min(2),
    }),
    onSubmit: (values) => {
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
          {/*Modal Content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*Modal Header*/}
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
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <div className="input flex justify-center items-center">
                    <input
                      className="p-2 border-solid border-2 border-lightgrey rounded-md w-80 shadow-sm"
                      id="name"
                      type="text"
                      placeholder="Patient Name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.name && formik.errors.name ? (
                    <p className="text-error text-left pl-3 mt-1">
                      {" "}
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {formik.errors.name}
                    </p>
                  ) : null}

                  <div className="input flex justify-center items-center">
                    <input
                      className="p-2 mt-3 border-solid border-2 border-lightgrey rounded-md w-80 shadow-sm"
                      id="phone"
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.phone && formik.errors.phone ? (
                    <p className="text-error text-left pl-3 mt-1">
                      {" "}
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {formik.errors.phone}
                    </p>
                  ) : null}

                  <div className="input flex justify-center items-center">
                    <input
                      className="p-2 mt-3 border-solid border-2 border-lightgrey rounded-md w-80 shadow-sm"
                      id="phone"
                      type="text"
                      placeholder="Pet Name"
                      name="petName"
                      value={formik.values.petName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.petName && formik.errors.petName ? (
                    <p className="text-error text-left pl-3 mt-1">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {formik.errors.petName}
                    </p>
                  ) : null}

                  <div className="input flex justify-center items-center">
                    <label className="text-grey mt-2 mx-1">
                      Pet Birth-Date:{" "}
                    </label>
                    <input
                      className="p-2 mt-3 border-solid border-2 border-lightgrey rounded-md w-52 shadow-sm"
                      id="petBirthDate"
                      type="date"
                      placeholder="Pet Birthdate"
                      name="petBirthDate"
                      value={formik.values.petBirthDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.petBirthDate && formik.errors.petBirthDate ? (
                    <p className="text-error text-left pl-3 mt-1">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {formik.errors.petBirthDate}
                    </p>
                  ) : null}

                  <div className="input flex justify-center items-center">
                    <select
                      className="p-1.5 mt-3 mb-3 border-solid border-2 border-lightgrey rounded-md w-80 shadow-sm"
                      id="petType"
                      name="petType"
                      value={formik.values.petType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                      <option value="Parrot">Parrot</option>
                    </select>
                  </div>
                  {formik.touched.petType && formik.errors.petType ? (
                    <p className="text-error text-left pl-3 mt-1">
                      {" "}
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {formik.errors.petType}
                    </p>
                  ) : null}
                </div>
                {/*Modal Footer*/}
                <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-gray w-36 mx-1 hover:bg-gray_hover py-2 px-2 text-white rounded-full shadow"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                  >
                    <i className="fa-solid fa-xmark"></i> Close
                  </button>
                  <button
                    className="mx-2 bg-success w-36 hover:bg-success_hover py-2 px-2 text-white rounded-full shadow"
                    type="submit"
                  >
                    <i className="fa-regular fa-floppy-disk"></i> Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default EditModal;
