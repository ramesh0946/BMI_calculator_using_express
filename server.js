const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req,res){
    // res.send("<h1>BMI calculator</h1>");
    res.sendFile(__dirname + "/bmiCalcultor.html");
});

app.post("/", function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight/(height*height);
    res.send("Your BMI is "+result);
});

app.listen(3000);
