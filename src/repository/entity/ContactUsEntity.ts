import mongoose from "mongoose";
import { Schema, model } from "mongoose";

interface ContactUsEntity extends Document{
  _id: string,
  name: string,
  companyName: string, 
  email: string,
  phoneNumber:string,
  description:string,
}

const contactUsSchema = new Schema<ContactUsEntity>({
  name:{
    type: String,
    minlength: 2,
    required: true
  },
  companyName:{
    type: String,
    minlength: 2,
    required: true
  },
  email:{
    type: String,
    minlength: 2,
    required: true
  },
  phoneNumber:{
    type: String,
    minlength: 2,
    required: true
  },
  description:{
    type: String,
    minlength: 2,
    required: true
  },

})

export default model<ContactUsEntity>("contactUs", contactUsSchema)