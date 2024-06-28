import mongoose,{Schema} from "mongoose";

const ObjectId = Schema.ObjectId;

const appSchema = new Schema({
    user: { type: ObjectId, required: true },
    event: { type: ObjectId, required: true },
    eventName: { type: String, required: true },
    username: { type: String, required: true },
    ign: { type: String, required: false },
    server: { type: String, required: false },
    tos: { type: Boolean, required: false },
  },{ timestamps: true }
);

export const Application = mongoose.model("Application", appSchema);
