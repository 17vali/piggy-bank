const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
