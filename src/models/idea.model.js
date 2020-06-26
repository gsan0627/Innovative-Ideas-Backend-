const mongoose = require("mongoose");
const { Schema } = mongoose;

const IdeaSchema = new Schema({
  idea: { type: String, required: true },
  description: { type: String },
  upvotes: [{ type: Boolean }],
  downvotes: [{ type: Boolean }],
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    autopolulate: true,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
      required: true,
      autopolulate: true,
    },
  ],
});

IdeaSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("idea", IdeaSchema);
