// express initialization
const express = require('express');
const app = express();

// basic route
app.get('/', (req, res) => res.send('<h1>Hello world!</h1><br><p>derp derp derp derp derp</p>'));

// the port we want to listen for traffic on not sure why it was set to 8082
const port = process.env.PORT || 8082;

// set the server to 'listen' for traffic on the port we specified
app.listen(port, () => console.log(`Server running on port ${port}`));
