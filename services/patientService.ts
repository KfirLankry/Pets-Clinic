import axios from "axios";
import { IPatient } from "../lib/interfaces";
import _ from "lodash";

const nextApi: string = process.env.nextApi || "";

// read all patients
export const getAllPatients = (): Promise<any> => {
  return axios.get(`${nextApi}api/patients`);
};

// read patient by id
export const getPatientById = (id: string): Promise<any> => {
  return axios.get(`${nextApi}api/${id}`);
};

// create new patients
export const addNewPatient = (newPatient: IPatient): Promise<any> => {
  return axios.post(`${nextApi}api/patients`, newPatient);
};

export const editPatient = (patient: IPatient): Promise<any> => {
  let body = _.omit(patient, ["_id"]);
  return axios.put(`${nextApi}api/${patient._id}`, body);
};

export const deletePatient = (patient: IPatient): Promise<any> => {
  return axios.delete(`${nextApi}api/${patient._id}`);
};
