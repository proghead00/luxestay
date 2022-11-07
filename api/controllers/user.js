import User from "../models/User.js";

// don't need createUser since we already have register

export const deleteUser = async (req, res, next) => {
  // update User
  const newUser = new User(req.body);
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  // update User
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      new: true, // returns the new updated version of our document
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// get all users list
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
