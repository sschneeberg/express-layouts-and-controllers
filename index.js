const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('faves/hates app');
})



app.listen(8000, () => console.log('start'));