// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IPatient } from "@/lib/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/db";
import Patient from "../../models/patientModel";
import joi from "joi";

interface PatientResult {
  pateints?: Array<IPatient> | IPatient;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PatientResult>
) {
  if (req.method === "POST") {
    return await create(req, res);
  }
  if (req.method === "GET") {
    return await read(req, res);
  }
}

// Patient Scehema
const patientSchema = joi.object({
  name: joi.string().required().min(2),
  phone: joi.string().required().min(9),
  petName: joi.string().required().min(2),
  petBirthDate: joi.string().required(),
  petType: joi.string().required().min(2),
});

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  // insert to database
  const patient: IPatient = {
    name: req.body.name,
    phone: req.body.phone,
    petName: req.body.petName,
    petBirthDate: req.body.petBirthDate,
    petType: req.body.petType,
  };

  try {
    await db();
    const { error } = patientSchema.validate(req.body);
    if (error) return res.status(400).json(error.message);

    const patients = await Patient.create([patient]);
    res.status(200).json({ patients });
  } catch (error) {
    res.status(400).json(error);
  }
};

const read = async (req: NextApiRequest, res: NextApiResponse) => {
  // load from database
  try {
    await db();
    let patient = await Patient.find();
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json(error);
  }
};
