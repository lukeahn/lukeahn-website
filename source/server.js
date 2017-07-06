var express = require('express');
var app = express();




app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/info"))


app.listen(80);
console.log("sever running on port 80")
