/* tslint:disable */
/* eslint-disable */

// ######################################## THIS FILE WAS GENERATED BY MONGOOSE-TSGEN ######################################## //

// NOTE: ANY CHANGES MADE WILL BE OVERWRITTEN ON SUBSEQUENT EXECUTIONS OF MONGOOSE-TSGEN.

import mongoose from "mongoose";

/**
 * Lean version of HomeDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `HomeDocument.toObject()`. To avoid conflicts with model names, use the type alias `HomeObject`.
 * ```
 * const homeObject = home.toObject();
 * ```
 */
export type HomeType = {
  homeId?: string;
  homeName?: string;
};

/**
 * Lean version of HomeDocument (type alias of `Home`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Home } from "../models"
 * import { HomeObject } from "../interfaces/mongoose.gen.ts"
 *
 * const homeObject: HomeObject = home.toObject();
 * ```
 */
export type HomeObjectType = HomeType;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type HomeQueryType = mongoose.Query<any, HomeDocumentType, HomeQueriesType> &
  HomeQueriesType;

/**
 * Mongoose Query helper types
 *
 * This type represents `HomeSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type HomeQueriesType = {};

export type HomeMethodsType = {};

export type HomeStaticsType = {};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Home = mongoose.model<HomeDocument, HomeModel>("Home", HomeSchema);
 * ```
 */
export type HomeModelType = mongoose.Model<HomeDocumentType, HomeQueriesType> & HomeStaticsType;

/**
 * Mongoose Schema type
 *
 * Assign this type to new Home schema instances:
 * ```
 * const HomeSchema: HomeSchema = new mongoose.Schema({ ... })
 * ```
 */
export type HomeSchemaType = mongoose.Schema<
  HomeDocumentType,
  HomeModelType,
  HomeMethodsType,
  HomeQueriesType
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Home = mongoose.model<HomeDocument, HomeModel>("Home", HomeSchema);
 * ```
 */
export type HomeDocumentType = mongoose.Document<never, HomeQueriesType> &
  HomeMethodsType & {
    homeId?: string;
    homeName?: string;
    status: string;
  };

/**
 * Lean version of DeviceHomeDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `DeviceDocument.toObject()`.
 * ```
 * const deviceObject = device.toObject();
 * ```
 */
export type DeviceHome = {
  homeId?: string;
  homeName?: string;
};

/**
 * Lean version of DeviceDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `DeviceDocument.toObject()`. To avoid conflicts with model names, use the type alias `DeviceObject`.
 * ```
 * const deviceObject = device.toObject();
 * ```
 */
export type DeviceType = {
  name?: string;
  _id: mongoose.Types.ObjectId;
  home?: DeviceHome;
};

/**
 * Lean version of DeviceDocument (type alias of `Device`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Device } from "../models"
 * import { DeviceObject } from "../interfaces/mongoose.gen.ts"
 *
 * const deviceObject: DeviceObject = device.toObject();
 * ```
 */
export type DeviceObjectType = DeviceType;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type DeviceQueryType = mongoose.Query<any, DeviceDocumentType, DeviceQueriesType> &
  DeviceQueriesType;

/**
 * Mongoose Query helper types
 *
 * This type represents `DeviceSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type DeviceQueriesType = {};

export type DeviceMethodsType = {
  test: (this: DeviceDocumentType, ...args: any[]) => any;
};

export type DeviceStaticsType = {
  test: (this: DeviceModelType, ...args: any[]) => any;
};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Device = mongoose.model<DeviceDocument, DeviceModel>("Device", DeviceSchema);
 * ```
 */
export type DeviceModelType = mongoose.Model<DeviceDocumentType, DeviceQueriesType> &
  DeviceStaticsType;

/**
 * Mongoose Schema type
 *
 * Assign this type to new Device schema instances:
 * ```
 * const DeviceSchema: DeviceSchema = new mongoose.Schema({ ... })
 * ```
 */
export type DeviceSchemaType = mongoose.Schema<
  DeviceDocumentType,
  DeviceModelType,
  DeviceMethodsType,
  DeviceQueriesType
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Device = mongoose.model<DeviceDocument, DeviceModel>("Device", DeviceSchema);
 * ```
 */
export type DeviceHomeDocumentType = mongoose.Document<mongoose.Types.ObjectId> & {
  homeId?: string;
  homeName?: string;
  status: any;
};

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Device = mongoose.model<DeviceDocument, DeviceModel>("Device", DeviceSchema);
 * ```
 */
export type DeviceDocumentType = mongoose.Document<mongoose.Types.ObjectId, DeviceQueriesType> &
  DeviceMethodsType & {
    name?: string;
    _id: mongoose.Types.ObjectId;
    home?: DeviceHomeDocumentType;
  };

/**
 * Lean version of Device2HomeDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `Device2Document.toObject()`.
 * ```
 * const device2Object = device2.toObject();
 * ```
 */
export type Device2Home = {
  homeId?: string;
  homeName?: string;
};

/**
 * Lean version of Device2Document
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `Device2Document.toObject()`. To avoid conflicts with model names, use the type alias `Device2Object`.
 * ```
 * const device2Object = device2.toObject();
 * ```
 */
export type Device2Type = {
  name?: string;
  _id: mongoose.Types.ObjectId;
  home?: Device2Home;
};

/**
 * Lean version of Device2Document (type alias of `Device2`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Device2 } from "../models"
 * import { Device2Object } from "../interfaces/mongoose.gen.ts"
 *
 * const device2Object: Device2Object = device2.toObject();
 * ```
 */
export type Device2ObjectType = Device2Type;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type Device2QueryType = mongoose.Query<any, Device2DocumentType, Device2QueriesType> &
  Device2QueriesType;

/**
 * Mongoose Query helper types
 *
 * This type represents `Device2Schema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type Device2QueriesType = {};

export type Device2MethodsType = {
  test: (this: Device2DocumentType, ...args: any[]) => any;
};

export type Device2StaticsType = {
  test: (this: Device2ModelType, ...args: any[]) => any;
};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Device2 = mongoose.model<Device2Document, Device2Model>("Device2", Device2Schema);
 * ```
 */
export type Device2ModelType = mongoose.Model<Device2DocumentType, Device2QueriesType> &
  Device2StaticsType;

/**
 * Mongoose Schema type
 *
 * Assign this type to new Device2 schema instances:
 * ```
 * const Device2Schema: Device2Schema = new mongoose.Schema({ ... })
 * ```
 */
export type Device2SchemaType = mongoose.Schema<
  Device2DocumentType,
  Device2ModelType,
  Device2MethodsType,
  Device2QueriesType
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Device2 = mongoose.model<Device2Document, Device2Model>("Device2", Device2Schema);
 * ```
 */
export type Device2HomeDocumentType = mongoose.Document<mongoose.Types.ObjectId> & {
  homeId?: string;
  homeName?: string;
  status: any;
};

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Device2 = mongoose.model<Device2Document, Device2Model>("Device2", Device2Schema);
 * ```
 */
export type Device2DocumentType = mongoose.Document<mongoose.Types.ObjectId, Device2QueriesType> &
  Device2MethodsType & {
    name?: string;
    _id: mongoose.Types.ObjectId;
    home?: Device2HomeDocumentType;
  };

/**
 * Lean version of Device3HomeDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `Device3Document.toObject()`.
 * ```
 * const device3Object = device3.toObject();
 * ```
 */
export type Device3Home = {
  homeId?: string;
  homeName?: string;
};

/**
 * Lean version of Device3Document
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `Device3Document.toObject()`. To avoid conflicts with model names, use the type alias `Device3Object`.
 * ```
 * const device3Object = device3.toObject();
 * ```
 */
export type Device3Type = {
  name?: string;
  _id: mongoose.Types.ObjectId;
  home?: Device3Home;
};

/**
 * Lean version of Device3Document (type alias of `Device3`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Device3 } from "../models"
 * import { Device3Object } from "../interfaces/mongoose.gen.ts"
 *
 * const device3Object: Device3Object = device3.toObject();
 * ```
 */
export type Device3ObjectType = Device3Type;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type Device3QueryType = mongoose.Query<any, Device3DocumentType, Device3QueriesType> &
  Device3QueriesType;

/**
 * Mongoose Query helper types
 *
 * This type represents `Device3Schema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type Device3QueriesType = {};

export type Device3MethodsType = {
  test: (this: Device3DocumentType, ...args: any[]) => any;
};

export type Device3StaticsType = {
  test: (this: Device3ModelType, ...args: any[]) => any;
};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Device3 = mongoose.model<Device3Document, Device3Model>("Device3", Device3Schema);
 * ```
 */
export type Device3ModelType = mongoose.Model<Device3DocumentType, Device3QueriesType> &
  Device3StaticsType;

/**
 * Mongoose Schema type
 *
 * Assign this type to new Device3 schema instances:
 * ```
 * const Device3Schema: Device3Schema = new mongoose.Schema({ ... })
 * ```
 */
export type Device3SchemaType = mongoose.Schema<
  Device3DocumentType,
  Device3ModelType,
  Device3MethodsType,
  Device3QueriesType
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Device3 = mongoose.model<Device3Document, Device3Model>("Device3", Device3Schema);
 * ```
 */
export type Device3HomeDocumentType = mongoose.Document<mongoose.Types.ObjectId> & {
  homeId?: string;
  homeName?: string;
  status: any;
};

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Device3 = mongoose.model<Device3Document, Device3Model>("Device3", Device3Schema);
 * ```
 */
export type Device3DocumentType = mongoose.Document<mongoose.Types.ObjectId, Device3QueriesType> &
  Device3MethodsType & {
    name?: string;
    _id: mongoose.Types.ObjectId;
    home?: Device3HomeDocumentType;
  };

/**
 * Lean version of Device4HomeDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `Device4Document.toObject()`.
 * ```
 * const device4Object = device4.toObject();
 * ```
 */
export type Device4Home = {
  homeId?: string;
  homeName?: string;
};

/**
 * Lean version of Device4Document
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `Device4Document.toObject()`. To avoid conflicts with model names, use the type alias `Device4Object`.
 * ```
 * const device4Object = device4.toObject();
 * ```
 */
export type Device4Type = {
  name?: string;
  _id: mongoose.Types.ObjectId;
  home?: Device4Home;
};

/**
 * Lean version of Device4Document (type alias of `Device4`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Device4 } from "../models"
 * import { Device4Object } from "../interfaces/mongoose.gen.ts"
 *
 * const device4Object: Device4Object = device4.toObject();
 * ```
 */
export type Device4ObjectType = Device4Type;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type Device4QueryType = mongoose.Query<any, Device4DocumentType, Device4QueriesType> &
  Device4QueriesType;

/**
 * Mongoose Query helper types
 *
 * This type represents `Device4Schema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type Device4QueriesType = {};

export type Device4MethodsType = {
  test: (this: Device4DocumentType, ...args: any[]) => any;
};

export type Device4StaticsType = {
  test: (this: Device4ModelType, ...args: any[]) => any;
};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Device4 = mongoose.model<Device4Document, Device4Model>("Device4", Device4Schema);
 * ```
 */
export type Device4ModelType = mongoose.Model<Device4DocumentType, Device4QueriesType> &
  Device4StaticsType;

/**
 * Mongoose Schema type
 *
 * Assign this type to new Device4 schema instances:
 * ```
 * const Device4Schema: Device4Schema = new mongoose.Schema({ ... })
 * ```
 */
export type Device4SchemaType = mongoose.Schema<
  Device4DocumentType,
  Device4ModelType,
  Device4MethodsType,
  Device4QueriesType
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Device4 = mongoose.model<Device4Document, Device4Model>("Device4", Device4Schema);
 * ```
 */
export type Device4HomeDocumentType = mongoose.Document<mongoose.Types.ObjectId> & {
  homeId?: string;
  homeName?: string;
  status: any;
};

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Device4 = mongoose.model<Device4Document, Device4Model>("Device4", Device4Schema);
 * ```
 */
export type Device4DocumentType = mongoose.Document<mongoose.Types.ObjectId, Device4QueriesType> &
  Device4MethodsType & {
    name?: string;
    _id: mongoose.Types.ObjectId;
    home?: Device4HomeDocumentType;
  };

/**
 * Lean version of DeviceDefaultHomeDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `DeviceDefaultDocument.toObject()`.
 * ```
 * const devicedefaultObject = devicedefault.toObject();
 * ```
 */
export type DeviceDefaultHome = {
  homeId?: string;
  homeName?: string;
};

/**
 * Lean version of DeviceDefaultDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `DeviceDefaultDocument.toObject()`. To avoid conflicts with model names, use the type alias `DeviceDefaultObject`.
 * ```
 * const devicedefaultObject = devicedefault.toObject();
 * ```
 */
export type DeviceDefaultType = {
  name?: string;
  _id: mongoose.Types.ObjectId;
  home?: DeviceDefaultHome;
};

/**
 * Lean version of DeviceDefaultDocument (type alias of `DeviceDefault`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { DeviceDefault } from "../models"
 * import { DeviceDefaultObject } from "../interfaces/mongoose.gen.ts"
 *
 * const devicedefaultObject: DeviceDefaultObject = devicedefault.toObject();
 * ```
 */
export type DeviceDefaultObjectType = DeviceDefaultType;

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type DeviceDefaultQueryType = mongoose.Query<
  any,
  DeviceDefaultDocumentType,
  DeviceDefaultQueriesType
> &
  DeviceDefaultQueriesType;

/**
 * Mongoose Query helper types
 *
 * This type represents `DeviceDefaultSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type DeviceDefaultQueriesType = {};

export type DeviceDefaultMethodsType = {
  test: (this: DeviceDefaultDocumentType) => string;
};

export type DeviceDefaultStaticsType = {
  test: (this: DeviceDefaultModelType) => string;
};

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const DeviceDefault = mongoose.model<DeviceDefaultDocument, DeviceDefaultModel>("DeviceDefault", DeviceDefaultSchema);
 * ```
 */
export type DeviceDefaultModelType = mongoose.Model<
  DeviceDefaultDocumentType,
  DeviceDefaultQueriesType
> &
  DeviceDefaultStaticsType;

/**
 * Mongoose Schema type
 *
 * Assign this type to new DeviceDefault schema instances:
 * ```
 * const DeviceDefaultSchema: DeviceDefaultSchema = new mongoose.Schema({ ... })
 * ```
 */
export type DeviceDefaultSchemaType = mongoose.Schema<
  DeviceDefaultDocumentType,
  DeviceDefaultModelType,
  DeviceDefaultMethodsType,
  DeviceDefaultQueriesType
>;

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const DeviceDefault = mongoose.model<DeviceDefaultDocument, DeviceDefaultModel>("DeviceDefault", DeviceDefaultSchema);
 * ```
 */
export type DeviceDefaultHomeDocumentType = mongoose.Document<mongoose.Types.ObjectId> & {
  homeId?: string;
  homeName?: string;
  status: any;
};

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const DeviceDefault = mongoose.model<DeviceDefaultDocument, DeviceDefaultModel>("DeviceDefault", DeviceDefaultSchema);
 * ```
 */
export type DeviceDefaultDocumentType = mongoose.Document<
  mongoose.Types.ObjectId,
  DeviceDefaultQueriesType
> &
  DeviceDefaultMethodsType & {
    name?: string;
    _id: mongoose.Types.ObjectId;
    home?: DeviceDefaultHomeDocumentType;
  };

/**
 * Check if a property on a document is populated:
 * ```
 * import { IsPopulated } from "../interfaces/mongoose.gen.ts"
 *
 * if (IsPopulated<UserDocument["bestFriend"]>) { ... }
 * ```
 */
export function IsPopulated<T>(doc: T | mongoose.Types.ObjectId): doc is T {
  return doc instanceof mongoose.Document;
}

/**
 * Helper type used by `PopulatedDocument`. Returns the parent property of a string
 * representing a nested property (i.e. `friend.user` -> `friend`)
 */
type ParentProperty<T> = T extends `${infer P}.${string}` ? P : never;

/**
 * Helper type used by `PopulatedDocument`. Returns the child property of a string
 * representing a nested property (i.e. `friend.user` -> `user`).
 */
type ChildProperty<T> = T extends `${string}.${infer C}` ? C : never;

/**
 * Helper type used by `PopulatedDocument`. Removes the `ObjectId` from the general union type generated
 * for ref documents (i.e. `mongoose.Types.ObjectId | UserDocument` -> `UserDocument`)
 */
type PopulatedProperty<Root, T extends keyof Root> = Omit<Root, T> & {
  [ref in T]: Root[T] extends mongoose.Types.Array<infer U>
    ? mongoose.Types.Array<Exclude<U, mongoose.Types.ObjectId>>
    : Exclude<Root[T], mongoose.Types.ObjectId>;
};

/**
 * Populate properties on a document type:
 * ```
 * import { PopulatedDocument } from "../interfaces/mongoose.gen.ts"
 *
 * function example(user: PopulatedDocument<UserDocument, "bestFriend">) {
 *   console.log(user.bestFriend._id) // typescript knows this is populated
 * }
 * ```
 */
export type PopulatedDocument<DocType, T> = T extends keyof DocType
  ? PopulatedProperty<DocType, T>
  : ParentProperty<T> extends keyof DocType
  ? Omit<DocType, ParentProperty<T>> & {
      [ref in ParentProperty<T>]: DocType[ParentProperty<T>] extends mongoose.Types.Array<infer U>
        ? mongoose.Types.Array<
            ChildProperty<T> extends keyof U
              ? PopulatedProperty<U, ChildProperty<T>>
              : PopulatedDocument<U, ChildProperty<T>>
          >
        : ChildProperty<T> extends keyof DocType[ParentProperty<T>]
        ? PopulatedProperty<DocType[ParentProperty<T>], ChildProperty<T>>
        : PopulatedDocument<DocType[ParentProperty<T>], ChildProperty<T>>;
    }
  : DocType;

/**
 * Helper types used by the populate overloads
 */
type Unarray<T> = T extends Array<infer U> ? U : T;
type Modify<T, R> = Omit<T, keyof R> & R;

/**
 * Augment mongoose with Query.populate overloads
 */
declare module "mongoose" {
  interface Query<ResultType, DocType, THelpers = {}> {
    populate<T extends string>(
      path: T,
      select?: string | any,
      model?: string | Model<any, THelpers>,
      match?: any
    ): Query<
      ResultType extends Array<DocType>
        ? Array<PopulatedDocument<Unarray<ResultType>, T>>
        : ResultType extends DocType
        ? PopulatedDocument<Unarray<ResultType>, T>
        : ResultType,
      DocType,
      THelpers
    > &
      THelpers;

    populate<T extends string>(
      options: Modify<PopulateOptions, { path: T }> | Array<PopulateOptions>
    ): Query<
      ResultType extends Array<DocType>
        ? Array<PopulatedDocument<Unarray<ResultType>, T>>
        : ResultType extends DocType
        ? PopulatedDocument<Unarray<ResultType>, T>
        : ResultType,
      DocType,
      THelpers
    > &
      THelpers;
  }
}
