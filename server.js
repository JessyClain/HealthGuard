const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path")
const app = express();
const PORT = process.env.PORT || 3001;
const morgan = require('morgan')

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
app.use(express.static(path.join(__dirname, 'client/build')));
process.env.NODE_ENV = 'production'
if (process.env.NODE_ENV === "production") {
}
// Add routes, both API and view
app.use(routes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reacthealthtracker");

// mongoose.connect(process.env.MONGODB_URI, (err) => {
// 	console.log(err || `Connected to MongoDB.`)
// })

app.use(morgan('dev'))

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
