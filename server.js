/**
 * @file server.js
 * @description Node.js server entry point for managing tasks API.
 * @author HM Infas
 */

const express = require('express');
const app = express();
const taskRoutes = require('./src/routes/task.routes');

app.use(express.json());

//API routes
app.use('/api/task', taskRoutes);

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});