import mongoose from "mongoose";
import { User2SchemaType, User2DocumentType, User2ModelType } from "./user2.gen";

const addressSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true
    }
  },
  { _id: false }
);

const User2Schema: User2SchemaType = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true
    },
    address: {
      type: addressSchema,
      // this test ensures the required property here is projected properly by `processChild` in `src/helpers/parser.ts`
      required: true
    },
    lastOnlineAt: Date
  },
  {
    timestamps: true
  }
);

export const User2 = mongoose.model<User2DocumentType, User2ModelType>("User2", User2Schema);
