const express = require('express');
const { generateResponce } = require('../servieces/ai.services');
const aiRoute = express.Router();

aiRoute.get('/response', async (req, res) => {
    const prompt = req.body;
    console.log(req.body)
    if (!prompt) {
        return res.status(400).send("prompt is required");
    }
     const response = await generateResponce("hello what's your name");
    res.send(response);
   
     
}); 
aiRoute.post('/review', async (req, res) => {
    const code = req.body.code;
    console.log("Request body:", code);
    if (!code) {
        return res.status(400).send("Code is required");
    }
     const response = await generateResponce(code);
    res.send(response);
   
    
}); 

module.exports =  aiRoute  