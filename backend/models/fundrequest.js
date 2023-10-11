const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
   applicants_names: { type: Array, required: true, maxLength: 100 },
  leader_name: { type: String, required: true, maxLength: 100 },
  email: { type: String, required: true, maxLength: 100 },
  contact_no: { type: String, required: true, maxLength: 100 },
  project_title: { type: String, required: true, maxLength: 100 },
  project_description: { type: String, required: true, maxLength: 100 },
  Project_expenses: {type: Buffer, required: true},
  goals: { type: String, required: true, maxLength: 100 },
  risks: { type: String, required: true, maxLength: 100 },
  project_type: { type: String, required: true, maxLength: 100 },
  starting_date: { type: String, required: true, maxLength: 100 },
  ending_date: { type: String, required: true, maxLength: 100 },
  agreement: { type: String, required: true, maxLength: 100 },
  lecturer_name: { type: String, required: true, maxLength: 100 },
  lecturer_email: { type: String, required: true, maxLength: 100 },
  
});

// Export model
module.exports = mongoose.model("Request", RequestSchema);