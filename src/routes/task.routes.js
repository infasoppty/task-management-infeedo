/**
 * @file task.routes.js
 * @description Express routes for managing tasks.
 * @author HM Infas
 */

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

// Create a new task
router.post('/', taskController.createTask);

// Update a task by ID
//I did not use this, just for your reference
router.put('/:id', taskController.updateTask);

// Get all tasks
router.get('/', taskController.getAllTasks);

// Get latest tasks update
router.get('/latest', taskController.getLatestTask);

module.exports = router;