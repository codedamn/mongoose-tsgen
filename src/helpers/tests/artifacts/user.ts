import mongoose, { Schema } from "mongoose";
import { UserSchemaType, UserDocumentType, UserObjectType, UserModelType } from "./user.gen";

// UserSchema type
const UserSchema: UserSchemaType = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    /** inline jsdoc */
    lastName: {
      type: String,
      required: true
    },
    /**
     * single line jsdoc
     */
    metadata: Schema.Types.Mixed,
    bestFriend: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    /**
     * multiline
     * jsdoc
     */
    friends: [
      {
        uid: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true
        },
        nickname: String
      }
    ],
    city: {
      coordinates: {
        type: [Number]
      },
      subdocWithoutDefault: {
        type: [
          {
            a: String
          }
        ],
        default: undefined
      }
    },
    tags: [String],
    alternateObjectId: mongoose.Types.ObjectId,
    socialMediaHandles: {
      type: Map,
      of: String
    },
    arrayOfMaps: [
      {
        type: Map,
        of: Number
      }
    ],
    mapOfArrays: {
      type: Map,
      of: [Number]
    },
    requiredIsFunction: {
      type: Number,
      required: function (this: UserDocumentType) {
        // This is irrelevant, we're just testing that setting `required: function() {...}` leaves the field "optional" in the generated typescript.
        return !!this.alternateObjectId;
      }
    },
    buffer: {
      type: Buffer,
      required: true
    },
    bufferString: "Buffer",
    bufferSchemaType: {
      type: Schema.Types.Buffer,
      default: null
    },
    decimal128: Schema.Types.Decimal128,
    otherDecimal128: mongoose.Types.Decimal128,
    numberString: "Number",
    stringString: "String",
    booleanString: "Boolean",
    dateString: "Date",
    otherNumberString: {
      type: "Number",
      required: true
    },
    otherStringString: {
      type: "String",
      required: true
    },
    enumWithNull: {
      type: String,
      enum: ["a", "b", "c", null]
    },
    enumWithoutNull: {
      type: String,
      enum: ["a", "b", "c"]
    },
    "special-character": {
      type: String
    }
  },
  {
    toObject: {
      virtuals: true
    }
  }
);

// NOTE: `this: UserDocument` is required for virtual properties to tell TS the type of `this` value using the "fake this" feature
// you will need to add these in after your first ever run of the CLI
UserSchema.virtual("name").get(function (this: UserDocumentType) {
  return `${this.firstName} ${this.lastName}`;
});

UserSchema.methods = {
  isMetadataString() {
    return this.metadata === "string";
  }
};

UserSchema.statics = {
  async getFriends(friendUids: UserDocumentType["_id"][]): Promise<UserObjectType[]> {
    return await this.aggregate([{ $match: { _id: { $in: friendUids } } }]);
  }
};

UserSchema.query = {
  populateFriends() {
    return this.populate("friends.uid", "firstName lastName");
  }
};

export const User: UserModelType = mongoose.model<UserDocumentType, UserModelType>(
  "User",
  UserSchema
);

export default User;
