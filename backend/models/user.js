const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  googleId: String, // Google's unique identifier for the user
  displayName: String, // User's display name
  email: String, // User's email address
  // You can add more fields as needed for your application
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
