import { Router } from 'express';
import EventsController from '../controllers/EventsController';

const eventRoute = Router();

eventRoute.get(
  '/events',
  EventsController.getAllEvents,
);

export default eventRoute;
