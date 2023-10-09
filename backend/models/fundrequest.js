const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  leaders_name: { type: String, required: true, maxLength: 100 },
  other_name: { type: String, required: true, maxLength: 100 },
  email: { type: String, required: true, maxLength: 100 },
  contact_no: { type: String, required: true, maxLength: 100 },
});

// Export model
module.exports = mongoose.model("Request", RequestSchema);