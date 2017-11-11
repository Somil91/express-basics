 const express = require('express');
 const hbs = require('hbs');
 const fs = require('fs');

 
 var app = express();
 hbs.registerPartials(__dirname + '/views/partials')
 app.set('view engine', 'hbs');
 

 app.use((req, res, next) => {
     var now = new Date().toString();
     var log = `${now}: ${req.method} ${req.url}` ;
     console.log(log);
     fs.appendFile('server.log', log + '\n');
     next();
 })

 // middleware.
//  app.use((req, res, next) => {
//      res.render('maintenance.hbs');
//  })

 app.use(express.static(__dirname+'/public'));

 hbs.registerHelper('getCurrentYear', () => {
     return new Date().getFullYear();
 })

 hbs.registerHelper('screamIt', (text) => {
     return text.toUpperCase();
 });
 
 app.get('/test', (req, res)=> {
    //  res.send('<h1>Hello Express</h1>');
    res.send({
        name: 'Somil',
        likes:[ 'Bikng', 'Coding']
    });
 });

 app.get('/', (req, res)=> {
     res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website',
     });
 });


 app.get('/about', (req, res)=> {
     res.render('about.hbs', {
         pageTitle: 'About Page',
     });
 });

 app.get('/maintenance', (req, res)=> {
     res.render('maintenance.hbs', {
         pageTitle: 'Maintenance Page',
     });
 });

 app.get('/bad', (req, res)=> {
    res.send({
        error: 'Error handling the request'
    });
});


 app.listen(3000, ()=> {
     console.log('Server is up on port 3000')
 });