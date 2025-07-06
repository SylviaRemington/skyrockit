const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema ({
  //properties of applications
  // ! stopping here with code-along and just going to watch so get through it - stopped at Skyrockit lecture 33:13 minutes in
  // ! Later, I'll come back to this and code-along for entire lesson after Project 2 is done
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//This is the application data on the user
applications: [applicationSchema], // embed applicationSchema here

const User = mongoose.model('User', userSchema);

module.exports = User;
