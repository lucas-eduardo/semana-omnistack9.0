const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.URI_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);