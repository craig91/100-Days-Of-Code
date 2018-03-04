const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static('./public'));

app.get('/*', (req, res) => 
    res.sendFile(path.join(__dirname,'./public/index.html'))
);

app.listen(process.env.PORT || 3000);