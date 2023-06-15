const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('../utils/createError')



 const register = async (req, res, next) => {
  try {
   // const salt = bcrypt.genSaltSync(10);
   // const hash = bcrypt.hashSync(req.body.password, salt);

   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Credentials", "true");
   res.setHeader("Access-Control-Max-Age", "1800");
   res.setHeader("Access-Control-Allow-Headers", "content-type");
   res.setHeader( "Access-Control-Allow-Methods", " POST, GET, OPTIONS" ); 
    const newUser = new User({
      ...req.body,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};
 const login = async (req, res, next) => {
  try {
    

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", " POST, GET, OPTIONS" ); 
    
    let data = req.body;
    let {email,password} = data;

    let userExist = await User.find({ email: email  })

    if (!userExist)
      return next(createError(404, "Not found!"));

    if (userExist.password != password) { return res.status(400).send({ status: false, message: "Please enter correct password" }) }

    // const token = jwt.sign(
    //   { id: userExist._id, isAdmin: userExist.isAdmin },
    //  "Secret-key"
    // );

    // res.setHeader("x-api-key", token);
    

    
    res.status(200).send("Login successful.")
  } catch (err) {
    next(err);
  }
};

module.exports = {register , login}