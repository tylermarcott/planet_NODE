import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { GalaxySchema } from "../models/Galaxy.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);


  //NOTE: make sure you add your schema to this list in dbContext!!
  Galaxy = mongoose.model('Galaxy', GalaxySchema)
}

export const dbContext = new DbContext()
