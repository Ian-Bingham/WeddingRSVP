const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: String,
  isGoing: Boolean,
  foodAllergies: String,
  hasPlusOne: Boolean,
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;