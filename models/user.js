const mongoose = require('mongoose');

const Wander = new mongoose.Schema(
    {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String, 
      },
      password: {
        type: String,
      },
     
    },
    { timestamps: true }
  );
  
module.exports = mongoose.model("WanderStay", Wander);