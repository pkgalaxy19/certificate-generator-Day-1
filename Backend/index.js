import express, { Router } from 'express';
//import './config.js';
import router from './routes.js';
import cors from 'cors';


const app = express();
app.use(express.json());

app.use(cors());
app.use(router); 

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});