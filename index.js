const express = require('express');
const mongoose = require('mongoose')
const router = require('./router/route');
var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const port = 8080;

app.use('/',router)

mongoose.connect("mongodb+srv://AyushPanday:AyushPan123@cluster0.eixapeq.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("MongoDb is connected"))
.catch((error) => console.log(error))

app.listen(port , function(){
    console.log("Server is running on",port)
})