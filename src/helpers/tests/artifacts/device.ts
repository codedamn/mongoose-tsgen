import mongoose, { Schema, model } from "mongoose";
import {
  DeviceDocumentType,
  DeviceModelType,
  DeviceSchemaType,
  HomeDocumentType,
  HomeModelType,
  HomeSchemaType
} from "./device.gen";

const homeSchema: HomeSchemaType = new Schema(
  {
    homeId: String,
    homeName: String
  },
  {
    _id: false
  }
);

homeSchema.virtual("status").get(function (this: HomeDocumentType): string {
  return "available";
});

export const home = mongoose.model<HomeDocumentType, HomeModelType>("Home", homeSchema);

const DeviceSchema: DeviceSchemaType = new Schema({
  name: String,
  home: home.schema
});

DeviceSchema.methods = {
  test() {
    return "hi";
  }
};

DeviceSchema.statics = {
  test() {
    return "hi";
  }
};

// multiple versions of mongoose model init

export const device = mongoose.model<DeviceDocumentType, DeviceModelType>("Device", DeviceSchema);
export const device2 = mongoose.model("Device2", DeviceSchema);
export const device3 = mongoose.model<DeviceDocumentType, DeviceModelType>("Device3", DeviceSchema);
export const device4 = model("Device4", DeviceSchema);
export default mongoose.model<DeviceDocumentType, DeviceModelType>("DeviceDefault", DeviceSchema);
