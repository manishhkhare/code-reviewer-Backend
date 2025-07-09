const express = require('express');
const app = express();
const env = require('dotenv').config()
PORT = process.env.PORT;

app.listen(PORT, (req,res) => {
     console.log(`express server are running on ${PORT}`)
})