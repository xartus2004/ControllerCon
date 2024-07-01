import { EventUser } from "../models/event-user.model.js";

const createEventUser = async (req, res) => {
  try {
    const userInfo= JSON.stringify()
    const EventUser = await EventUser.find(userInfo);

    res.status(200).json(EventUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

const getEventUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const eventUserInfo = await EventUser.findById(id);
    res.status(200).json(eventUserInfo);
    console.log(eventUserInfo);
  } catch {
    res.status(500).json({ message: "error.message" });
  }
}
const getEventUsersByEventId = async (req, res) => {
  try {
    const { id } = req.params;
    const eventUserInfo = await EventUser.find({event: id});
    res.status(200).json(eventUserInfo);
    console.log(eventUserInfo);
  } catch {
    res.status(500).json({ message: "error.message" });
  }
}
const getEventUsersByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const eventUserInfo = await EventUser.find({user: id});
    res.status(200).json(eventUserInfo);
    console.log(eventUserInfo);
  } catch {
    res.status(500).json({ message: "error.message" });
  }
}  

const deleteEventUser = async (req, res) => {
    try {
        const { id } = req.params;
        const eventUserInfo = await EventUser.findByIdAndDelete(id);
        res.status(200).json(eventUserInfo);
        console.log(eventUserInfo);
    } catch {
        res.status(500).json({ message: "error.message" });
    }
    }
const updateEventUser = async (req, res) => { 
    try {
        const { id } = req.params;
        const updatedEventUser = await EventUser.findByIdAndUpdate(id, req.body);
        res.status(200).json(updatedEventUser);
    } catch (error) {
        console.log("error.message");
        res.status(500).json({ message: "error.message" });
    }};

export {
  createEventUser,
  getEventUserById,
  getEventUsersByEventId,
  getEventUsersByUserId,
  deleteEventUser,
  updateEventUser
};