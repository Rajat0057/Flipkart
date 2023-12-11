import { DefaultData } from './default.js'
import express from 'express';
import {Connection}  from "./database/db.js"
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import  Router  from './routes/routes.js';





const app = express()
dotenv.config()

app.use(cors())
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router)


const Port = 8000;
const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD

Connection();
DefaultData();

app.listen(Port,()=>{
    console.log("mains helo")
})

DefaultData;

// 46 mins tak loiya hai mongoose download krke dekhna