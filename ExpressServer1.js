
///////////////////////////
// Fetch using Promises
///////////////////////////
const express = require ('express');
const fetch = require ('node-fetch');

var app = express();

// make routing case sensitive
app.enable('case sensitive routing');

app.get('/users', (req,res)=>{
    res.status(200);
    res.set('Content-Type', 'application/json');
   // res.send('Hi');

   // get the json data and send it back to the client
   fetch('http://jsonplaceholder.typicode.com/users/')
    .then(res => res.text())
    .then(body => {
       // console.log(body);
        res.send(body);
    })
    .then(()=>{
        res.end();
    });

} )


app.listen(8000, ()=>{console.log('The server is running...')});

