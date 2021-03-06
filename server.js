//Install express server
const express = require('express');
const path = require('path');
const appName = "mdb-angular-free"
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/mdb-angular-free'));

app.get('/*', function (req, res) {
  console.log(app.get('env'));
  res.sendFile(path.join(__dirname, '/dist/mdb-angular-free/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
