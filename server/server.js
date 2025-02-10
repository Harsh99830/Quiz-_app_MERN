import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
const app = express();
// Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();
const port = process.env.PORT || 8080;


// Routes
app.get('/', (req, res) => {
    try{
        res.json("Get request")
    }catch(err){
        res.json(err);
    }
    });

app.listen(port, () => {
    console.log(`Server is connected to http://localhost:${port}`);
    }) 