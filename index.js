const express = require('express');
const { dirname } = require('path');
const app = express()
const port = 3000
const path = require('path'); 
const expressLayouts = require('express-ejs-layouts')

app.get('/', (req, res) => res.render('index',{name:"Luke"}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')))
app.use(expressLayouts)
