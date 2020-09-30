const express = require("express");
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');


const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://amirah:coder123@localhost:5432/upcycle_db';
const pool = new Pool({
  connectionString
});

const Factory = require("./upcycle");
const factory = Factory(pool);

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
  res.render('index');
});

app.post("/qtyForm", async function (req, res) {

  factory.setQty({
    Paper: req.body.Paper,
    Cardboard: req.body.Cardboard,
    Glass: req.body.Glass,
    Metal: req.body.Metal,
    Cans: req.body.Cans
  });
  const displayTotal = await factory.totalValue();

  const qtyItem = req.body.Paper;
  res.render('/form', {
    total: displayTotal

  });
});

app.get("/drop-off-sites", async function (req, res) {
  res.render("map")
})

app.get("/insights", async function (req, res) {
  res.render("insights")

})

let PORT = process.env.PORT || 4024;
app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});