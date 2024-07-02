import { Router } from "express";
import { acceptApplication, createApplication, deleteApplication, getApplicationsByEventId, getApplicationsByUserId } from "../controllers/application.controller";

const router = Router();

router.post('/create', createApplication);
router.get('/event/:id', getApplicationsByEventId);
router.get('/user/:id', getApplicationsByUserId);
router.delete('/delete/:id', deleteApplication);
router.post('/accept', acceptApplication);