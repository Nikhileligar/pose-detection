import express from "express";
// import cors from 'cors';
import router from './routes/route.js'
import cors from 'cors';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

const PORT = 3001;


const app = express();
app.use(express.json())
app.use(cors());
app.use(cookieParser());

app.use(bodyParser.json());

app.use('/api',router);

app.listen(PORT, () => {
    console.log(`connected successfull and running on port ${PORT}`)
})