import { Event } from "../models/event.model.js";

const createEvent = async (req, res) => {
    try {
      const Event = await Event.create(req.body);
  
      res.status(200).json(Event);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  };

const getEvents = async (req, res) => {
    try {
      const eventInfo = await Event.find({});
      res.status(200).json(eventInfo);
      console.log(eventInfo);
    } catch {
      res.status(500).json({ message: "error.message" });
    }
  };

const getEventById = async (req, res) => {
    try {
      const { id } = req.params;
      const eventInfo = await Event.findById(id);
      res.status(200).json(eventInfo);
      console.log(eventInfo);
    } catch {
      res.status(500).json({ message: "error.message" });
    }
  };

const cancelEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const eventInfo = await Event.findByIdAndDelete(id);
    res.status(200).json(eventInfo);
    console.log(eventInfo);
  } catch {
    res.status(500).json({ message: "error.message" });
  }
};
const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedEvent);}
  catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }};
  
export {
  createEvent,
  getEvents,
  getEventById,
  cancelEvent,
  updateEvent
};