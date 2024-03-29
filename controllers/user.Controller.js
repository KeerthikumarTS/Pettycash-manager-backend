const userModel = require("../models/user.Model");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).send({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error,
    });
  }
};

const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController };
