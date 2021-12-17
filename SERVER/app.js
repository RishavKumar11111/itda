const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const logger = require('morgan');
const sessionObject = {
    secret: 'Secret is always secret. Dont tell anyone.Because secret is secret.',
    resave: false,
    saveUninitialized: true
}
app.use(logger('dev'));
app.use(session(sessionObject));
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/client-side'));

app.use("/admin", require('./routes/adminRoute'));
app.use('/itda', require('./routes/itdaRoute'));
app.use('/auth', require('./routes/authRoute'));
app.get('*', (req, res) => res.status(200).send({
    message: 'Sorry, This URL is a private URL. Please change your URL to get benefits.',
  }));
const port = 9999;
app.listen(port, console.log(`ITDA server running on Port ${port}...\n${new Date().toString()}`));