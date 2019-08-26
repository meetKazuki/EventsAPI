import eventsDB from '../database/events';

export default class EventsController {
  static getAllEvents(req, res) {
    return res.status(200).json({
      status: 'success',
      data: [...eventsDB],
    });
  }
}
