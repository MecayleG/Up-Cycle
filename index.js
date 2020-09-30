const express = require("express");
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');


const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://amirah:coder123@localhost:5432/upcycle_db';
const pool = new Pool({
    connectionString
});

const Factory = require("./registration");
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
    res.render('index', {
    });
  });

app.post("/qtyForm", async function (req, res) {

     factory.setQty({
       Paper: req.body.Paper,
       Cardboard: req.body.Cardboard,
       Glass: req.body.Glass,
       Metal: req.body.Metal,
       Cans: req.body.Cans
     });

    const qtyItem = req.body.Paper;

/*    if(qtyItem){
      await factory.materialQty(qtyItem);
    }
*/
    res.redirect('/form');
  });


app.post("/materialForm", async function (req, res) {

    res.render('index', {

    });
  });

app.get("/total", async function (req, res) {
    const displayTotal = await factory.totalValue();
    res.render('/form', {
    total: displayTotal
    });
  });

app.get("/form", async function (req, res) {

    res.render('form', {
    });
  });


let PORT = process.env.PORT || 4024;
app.listen(PORT, function() {
    console.log('App starting on port', PORT);
});
