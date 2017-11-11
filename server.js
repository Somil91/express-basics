 const express = require('express');

 var app = express();
 
 app.use(express.static(__dirname+'/public'));
 
 app.get('/', (req, res)=> {
    //  res.send('<h1>Hello Express</h1>');
    res.send({
        name: 'Somil',
        likes:[ 'Bikng', 'Coding']
    });
 });

 app.get('/about', (req, res)=> {
     res.send('<h1>About Page</h1>');
 });

 app.get('/bad', (req, res)=> {
    res.send({
        error: 'Error handling the request'
    });
});


 app.listen(3000, ()=> {
     console.log('Server is up on port 3000')
 });