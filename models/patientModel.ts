import { Schema, model, models } from "mongoose";

const patientSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  phone: {
    type: String,
    required: true,
    minlength: 9,
  },
  petName: {
    type: String,
    required: true,
    minlength: 2,
  },
  petBirthDate: {
    type: String,
    required: true,
  },
  petType: {
    type: String,
    required: true,
    minlength: 2,
  },
});

const Patient = models.patient || model("patient", patientSchema);

export default Patient;
