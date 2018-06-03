///////////////////////////
// Fetch using Asyn-Await
///////////////////////////

const express = require('express');
const fetch = require('node-fetch');
const { from } = require('rxjs');

var app = express();

// make routing case sensitive
app.enable('case sensitive routing');

app.get('/users', (req, res) => {

    res.status(200);
    res.set('Content-Type', 'application/json');
    fetchUsersAsJson(res);

})

async function fetchUsersAsJson(res){
    console.log("fetching users as json");
    var result = await fetch('http://jsonplaceholder.typicode.com/users/');
    console.log("users fethced");
    var resultText = await result.text();
    console.log("send users to the client");
    await res.send(resultText);
    console.log("end");
    await res.end();

}


app.listen(8000, () => { console.log('The server is running...') });

