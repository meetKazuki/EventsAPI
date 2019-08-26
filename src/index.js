import debug from 'debug';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../docs/events-doc.json';
import eventRoute from './routes/events.routes';

const app = express();
const DEBUG = debug('dev');
const PORT = process.env.PORT || 4500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', eventRoute);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Events',
  });
});

app.get('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    error: 'Resource does not exist',
  });
});

app.listen(PORT, () => DEBUG(`Server running on port ${PORT}`));

export default app;
