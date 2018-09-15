var express =require("express");
var path = require("path");

var app = express();
var path = path.join(__dirname,"/../public");


app.use(express.static(path));
app.listen(3000,()=>{
	console.log("listening");
});