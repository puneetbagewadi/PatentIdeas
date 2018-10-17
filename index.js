const express = require("express");
const exphbs  = require('express-handlebars');
const app = express();

//Set the port the server listens to
const port = process.env.PORT || 3000;

//Set the Template Engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Routes
app.get('/', (req, res) => {
    res.render("home");
});

app.get('/about', (req, res) => {
    res.render("about");
});


//Server listens to the port
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});      