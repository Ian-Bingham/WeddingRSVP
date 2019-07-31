const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: String,
  isGoing: Boolean,
  hasPlusOne: Boolean,
  plusOneGoing: Boolean,
  numChildren: Number,
  foodAllergies: String,
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;