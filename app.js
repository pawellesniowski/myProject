const express = require('express');
const hbs = require('hbs');
var port = process.env.PORT || 3002;
var year = new Date().getFullYear();
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getFullYear', ()=>{
    return new Date().getFullYear();
});

app.set('view engine', 'hbs');



app.get('/', (req, res)=>{
    res.render('index.hbs', {
        pageTitle: "Portfolio",
    });
});

app.get('/projects', (req, res)=>{
    res.render('projects.hbs', {
        pageTitle: "Portfolio",
    });
})

app.listen(port, ()=>{
    console.log(`listen on port ${port}`);
});