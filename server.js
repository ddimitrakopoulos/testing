const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// Serve the static HTML file
app.use(express.static(path.join(__dirname)));

// Basic route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Azure Web App!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
