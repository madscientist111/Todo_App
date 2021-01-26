const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyp = require('body-parser');
const path = require('path');

// creating instance of Express
const app = express();

// Getting confidential/hidden values from config.env files
dotenv.config( { path : 'config.env'} );

// getting port value from env config file
const PORT = process.env.PORT || 3000;

// To see log requests
app.use(morgan('tiny'));

// parsing requests to body parser
app.use(bodyp.urlencoded({extended : true}));

// setting view engine
app.set("view engine", "ejs");
//app.set("views", path.resolve(__dirname,"views/ejs"));

// loading the assets needed
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


// What we want to see on the page
app.get('/',(req,res) => {
    res.render('index');
})

// setting our port for server
app.listen(PORT,()=>{
    console.log(`Server on ${PORT}`);
});