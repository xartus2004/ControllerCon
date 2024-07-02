import { Router } from 'express';
import { createEventUser, deleteEventUser, getEventUserById, getEventUsersByEventId, getEventUsersByUserId, updateEventUser } from '../controllers/event-user.controller';

const router = Router();

router.post('/create', createEventUser);
router.get('/event/:id', getEventUsersByEventId);
router.get('/user/:id', getEventUsersByUserId);
router.get('/:id', getEventUserById);
router.delete('/:id', deleteEventUser);
router.put('/:id', updateEventUser);

export default router;