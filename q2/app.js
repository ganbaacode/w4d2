const express = require("express");
const app = express();
var bodyParser = require('body-parser')
const path = require("path");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'views')));

app.set("view engine", "ejs");


app.listen(3000);



app.get("/", (req, res) => {
    res.render("index");
})

app.post("/ball", (req, res) => {
    let ans = req.body.qt;
    // console.log(req.body.qt)
    res.status(200);
    res.end();
})