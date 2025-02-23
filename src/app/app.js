const express = require('express')
const bodyParser = require("body-parser");
const app = express()


app.use(bodyParser.json());

app.get('/khiem',(req,res) => {
    console.log("Client is calling API");
    res.json({
      name: "Tran Duc Khiem",
      age: 19,
      address: "Nha Trang"
    })
})  

module.exports = app;