import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import provincia from './routes/provincia.routes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/provincias', provincia);


export default app;