const express = require('express');
const app = express();
const aiRoute = require('./src/routes/aiRoute')
const env = require('dotenv').config()
const cors = require('cors')
PORT = process.env.PORT;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/',(req, res)=>{
    res.send("Server is running")
}) 
app.use('/ai',aiRoute)


app.listen(PORT, (req,res) => {
    console.log(`express server are running on ${PORT}`);
})