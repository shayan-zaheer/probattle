const mongoose = require("mongoose");

const ApiSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      code: {type: String, required: true},
      documentation: { type: String, required: true },
      language: { type: String, enum: ["javascript", "python", "java"], required: true },
      owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
      version: { type: String, default: "1.0.0" },
      status: { type: String, enum: ["pending", "approved", "declined"], default: "pending" },
      downloads: { type: Number, default: 0 },
      visibility: { type: String, enum: ["public", "private"], default: "public" },
      cost: { type: Number, default: 0 },
      upvotes: { type: Number, default: 0 },
      downvotes: { type: Number, default: 0 },
      authorizedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      upvotedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      downvotedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
    { timestamps: true }
  );
  

const API = mongoose.model("API", ApiSchema);

module.exports = API;