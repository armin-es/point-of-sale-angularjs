// Import modules
const express = require('express');
const path = require('path');

// Call express
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Redirect all routes to 'index.html'
app.get('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

// Listen for connections on the specified port
app.listen(3000, () => {
	console.log('Server listening on port 3000');
});