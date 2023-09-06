

import mongoose from "mongoose";

const Schema = mongoose.Schema

// NOTE: we will need to create a virtual on this schema in the future in order to allow the planets to have a label on them that says what galaxy they are from.

export const GalaxySchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 40 },
  type: { type: String, required: true, minlength: 1, maxlength: 30 }
})