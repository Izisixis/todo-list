import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Для обработки JSON-тела запросов

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
