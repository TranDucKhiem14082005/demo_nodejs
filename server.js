const express = require('express')
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.json());
const port = 5000

app.get('/khiem',(req,res) => {
  console.log("Client is calling API");
  res.json({
    name: "Tran Duc Khiem",
    age: 19,
    address: "Nha Trang"
  })
})  

app.post('/khiem',(req,res) => {
  const {email, password} = req.body;
  if(!email || !password) {
    return res.json({
      message: "Email or Password is not requied"
    });
  }
  if(Number(password) === 1234567) {
    return res.json({message: "login success"});
  }
  return res.json({message: "login fail"});
 
  
  console.log(email,password);
})  




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})