import { Application } from "../models/application.model.js";
import { EventUser } from "../models/event-user.model";

const createApplication = async (req, res) => {
  try {
    const Application = await Application.create(req.body);
    res.status(200).json(Application);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message});
  }
}
const getApplicationsByEventId = async (req, res) => {
  try {
    const { id } = req.params;
    const applicationInfo = await Application.find({event: id});
    res.status(200).json(applicationInfo);
    console.log(applicationInfo);
  } catch {
    res.status(500).json({ message: "error.message" });
  }
}

const getApplicationsByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const applicationInfo = await Application.find({user: id});
    res.status(200).json(applicationInfo);
    console.log(applicationInfo);
  } catch {
    res.status(500).json({ message: "error.message" });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const applicationInfo = await Application.findByIdAndDelete(id);
    res.status(200).json(applicationInfo);
    console.log(applicationInfo);
  } catch {
    res.status(500).json({ message: "error.message" });
  }
};

const acceptApplication = async (req, res) => {
  try{
    const applicationInfo = req.body;
    if (applicationInfo){
      const acceptedApplication = await EventUser.create(applicationInfo);
      if (acceptedApplication){
        const deletedApplication = await Application.findByIdAndDelete(applicationInfo._id);
        if (deletedApplication){
          res.status(200).json(acceptedApplication);
    }}}
  }catch(error){
    res.status(500).json({ message: error.message });
  }}

export {
  createApplication,
  getApplicationsByEventId,
  getApplicationsByUserId,
  deleteApplication,
  acceptApplication
};