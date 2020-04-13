const express = require('express');
const bodyParser = require('body-parser');
const users = require("./route/route");
const cors = require('cors');

const xml2js = require('xml2js');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/public', express.static('public'));

app.use(cors());

app.use(bodyParser.json());

app.use("/", users)

let port = 4000;

app.listen(port, () => {
     console.log('Server is up and running on port number '+ port);
});

