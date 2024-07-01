import { User } from "../models/user.model.js";

const getUserFromDiscord = async (req, res) => {
 try{
  let username = req.body.username;
  let id = req.body.id;
  	let user = await User.exists({ discordId: id })
    if (user!==null) {
      res.send(user);
    } else {
      const newUser = new User({
        discordId: id,
        username: username,
      });
      await newUser.save();

      // Send the new user in the response
      res.send(newUser);
    }}
    catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }

};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

export { 
  getUserFromDiscord,
  updateUser,
  getUser 
};