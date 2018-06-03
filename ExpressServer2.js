///////////////////////////
// Fetch using Observalbles
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
    // res.send('Hi');

    // get the json data and send it back to the client
    const fetchPromise = fetch('http://jsonplaceholder.typicode.com/users/')
     .then(res => res.text());
    from(fetchPromise)
        .subscribe(
            result => {
                 res.send(result);
                 res.end();
                 },
            err => { console.log(err); }
        )

})


app.listen(8000, () => { console.log('The server is running...') });

