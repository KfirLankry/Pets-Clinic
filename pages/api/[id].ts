import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/db";
import Patient from "../../models/patientModel";
import joi from "joi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return await read(req, res);
  }
  if (req.method === "DELETE") {
    return await del(req, res);
  }
  if (req.method === "PUT") {
    return await put(req, res);
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

const read = async (req: NextApiRequest, res: NextApiResponse) => {
  // load from database
  try {
    await db();
    const { id } = req.query;

    let patient = await Patient.findOne({ _id: id });
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json(error);
  }
};

const put = async (req: NextApiRequest, res: NextApiResponse) => {
  // edit from database
  try {
    await db();
    const { id } = req.query;

    const { error } = patientSchema.validate(req.body);
    if (error) return res.status(400).json(error.message);

    let patient = await Patient.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json(error);
  }
};

const del = async (req: NextApiRequest, res: NextApiResponse) => {
  // delete from database
  try {
    await db();
    const { id } = req.query;
    await Patient.findByIdAndDelete(id);
    res.status(200).json("Patient removed successfully!");
  } catch (error) {
    res.status(400).json(error);
  }
};
