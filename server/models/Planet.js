import mongoose from "mongoose";

const Schema = mongoose.Schema

export const PlanetSchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 40 },
  type: { type: String, required: true, minlength: 2, maxlength: 40 },
  size: { type: Number, minlength: 2, maxlength: 20 }
})