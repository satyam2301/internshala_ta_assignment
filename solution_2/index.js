const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const apiRoutes = require('./routes');

app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Site is up and running on PORT No. ${process.env.PORT}`);
});
