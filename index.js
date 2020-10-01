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


// Get Routes

app.get("/", async function (req, res) {
    res.render("index");
});
app.get("/about", async function (req, res) {
    res.render("about");
});
app.get("/contact", async function (req, res) {
    res.render("contact");
});

app.get("/drop-off-sites", async function (req, res) {
    res.render("map");
});

app.get("/insights", async function (req, res) {
    res.render("insights");

});

app.get("/table", async function (req, res) {
    const material = req.body.param;

    const displayQtyTotals = await factory.materialQty(material);

    const totalPaperQty = await factory.getPaperQty(req.body.PaperQty);
    const totalCardboardQty = await factory.getPaperQty(req.body.CardboardQty);
    const totalGlassQty = await factory.getPaperQty(req.body.GlassQty);
    const totalMetalQty = await factory.getPaperQty(req.body.MetalQty);
    const totalCansQty = await factory.getPaperQty(req.body.CansQty);

    res.render('table', {
        totalPaperQty,
        totalCardboardQty,
        totalGlassQty,
        totalMetalQty,
        totalCansQty
    });
});

app.get("/form", async function (req, res) {

    res.render('form', {
        material : await factory.getMaterials()
    });
});

// Post Routes

app.post("/qtyForm", async function (req, res) {

    factory.setQty({
        Paper: req.body.Paper,
        Cardboard: req.body.Cardboard,
        Glass: req.body.Glass,
        Metal: req.body.Metal,
        Cans: req.body.Cans
    });

    const qtyItem = req.body.Paper;
    const material = req.body.param;
    const displayTotal = await factory.totalValue(material);
    res.render('form', {
        total: displayTotal
    });
});

app.post("/materialForm", async function (req, res) {
    res.render('index', {});
});



let PORT = process.env.PORT || 4024;
app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});