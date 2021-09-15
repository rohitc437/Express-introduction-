const express = require('express');

const app = express();
const users = require('./MOCK_DATA.json');

app.get('/',function(req, res){
    res.send("Wellcom To Home Page")
})

app.get("/users",function(req,res){
    res.send(users);
})
app.listen(2345,function(){
    console.log("Now we started our server")
})