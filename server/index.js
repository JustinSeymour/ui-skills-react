// Setup Dependencies and constants
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

// Spin up the server and listen on port 3000
app.listen(port);
app.use(express.json());

app.get('/test', (req, res) => {

   res.send({
      timestamp: Date.now(),
      code: 200,
      message: 'Succesfully responded the /test endpoint.',
      host: `${host}:${port}`
   });

});

// Create an endpoint to GET /skills, should return an object with skills and ratings:
// { node: 7, html: 6 }
app.get('/skills', (req, res) => {
    
})

console.log(`Node Express Same API listening on port ${port}`);