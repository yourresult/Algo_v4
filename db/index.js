const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Import Routes
const adminAuthRoute = require('./admin/routes/auth');
const adminPostRoute = require('./admin/routes/post');
const adminJobRoute = require('./admin/routes/job');
const pubPostRoute = require('./public/routes/post');
const pubJobRoute = require('./public/routes/job');
var cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true,
        // useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true  },
    () => console.log('Connected to DB!')
);

// Middleware
app.use(bodyParser.json());

// Admin Routes Middlewares
app.use('/api/admin', adminAuthRoute);
app.use('/api/admin', adminPostRoute);
app.use('/api/admin', adminJobRoute);

// Public Routes Middlewares
app.use('/api/post', pubPostRoute);
app.use('/job', pubJobRoute);

app.listen(4000, () => console.log("Server Up and running"));