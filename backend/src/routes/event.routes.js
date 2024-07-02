import { Router } from "express";
import { cancelEvent, createEvent, getEventById, getEvents, updateEvent } from "../controllers/event.controller";

const router = Router();

router.get('/', (req, res) => getEvents(req, res));
router.get('/:id', (req, res) => getEventById(req, res));
router.post('/', (req, res) => createEvent(req, res));
router.put('/:id', (req, res) => updateEvent(req, res));
router.delete('/:id', (req, res) => cancelEvent(req, res));

export default router;