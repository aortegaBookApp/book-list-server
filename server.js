'use strict';

// require('dotenv').config();

//APPLICATION DEPENDENCIES
const express = require('express');
const cors = require('cors');
const pg = require('pg');

//APPLICATION SETUP
const app = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

//DATABASE SETUP
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err)); //This will catch an error state


//API ENDPOINTS
app.get('/api/v1/books', (req, res) =>  res.send('Testing 1, 2, 3'));
//This app.get will need more once operational

app.get('*', (req, res) => res.redirect(CLIENT_URL));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
