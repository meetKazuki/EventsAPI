import eventsDB from '../database/events';

export default class EventsController {
  static getAllEvents(req, res) {
    return res.status(200).json({
      status: 'success',
      data: [...eventsDB],
    });
  }

  static createEvent(req, res) {
    const {
      title, description, location, date,
    } = req.body;
    const id = eventsDB.length + 1;
    const newEvent = {
      id,
      title,
      description,
      location,
      date,
    };

    eventsDB.push(newEvent);
    return res.status(201).json({
      status: 'success',
      data: newEvent,
    });
  }
}
