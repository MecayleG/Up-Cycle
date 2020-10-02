const express = require("express");
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');


const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://amirah:coder123@localhost:5432/upcycle_db';
const pool = new Pool({
    connectionString
});

const UpcycleFactory = require("./upcycle");
const factory = UpcycleFactory(pool);

let app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

app.get("/", async function (req, res) {
    res.render("index");
});
app.get("/about", async function(req, res) {
    res.render("about");
});
app.get("/contact", async function(req, res) {
    res.render("contact");
});

app.get("/drop-off-sites", async function(req, res) {
    var locations = await factory.getLocations();
    console.log(locations);
    res.render("map",{
        locations: locations
    });
});

app.get("/insights", async function(req, res) {
    res.render("insights");
});

app.get("/form", async function(req, res) {

    res.render('form', {
        material: await factory.getMaterials()
    });
});


app.post("/qtyForm", async function(req, res) {

    const displayTotal = await factory.totalValue(req.body);

    res.render('form', {
        material: await factory.getMaterials(),
        total: displayTotal
    });
});

let PORT = process.env.PORT || 4024;
app.listen(PORT, function() {
    console.log('App starting on port', PORT);
});
