import { Router } from 'express';
import EventsController from '../controllers/EventsController';

const eventRoute = Router();

eventRoute.get(
  '/events',
  EventsController.getAllEvents,
);

eventRoute.post(
  '/events',
  EventsController.createEvent,
);

export default eventRoute;
