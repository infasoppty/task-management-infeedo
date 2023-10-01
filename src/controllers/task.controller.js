/**
 * @file task.controller.js
 * @description Controller for managing tasks.
 * @author HM Infas
 */

const { customResponse, getAllTasksCustomResponse, getLatestTaskCustomResponse } = require('../../utils/customResponse');
const Task = require('../models/task.model');

//Create task
exports.createTask = async(req, res) => {
  try {
    const { openTasks, inprogressTasks, completedTasks } = req.body;
    const task = await Task.create({
      data: {
        openTasks,
        inprogressTasks,
        completedTasks,
      },
    });
    const response = customResponse(true, 'Task created successfully', task)
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    const response = customResponse(false, 'Internal server error')
    res.status(500).json(response);
  }
}

//Update task by Id
//I did not use this, just for your reference
exports.updateTask = async(req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    const { openTasks, inprogressTasks, completedTasks } = req.body;
    
    const updatedTask = await Task.update({
      where: { id: taskId },
      data: {
        openTasks,
        inprogressTasks,
        completedTasks,
      },
    });
    
    //check if there is no task in given id
    if (!updatedTask) {
      const response = createResponse(false, 'Task not found');
      return res.status(404).json(response);
    }

    const response = customResponse(true, 'Task updated successfully', updatedTask);
    res.json(response);
  } catch (error) {
    console.error(error);
    const response = customResponse(false, 'Internal server error');
    res.status(500).json(response);
  }
}

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const { page, pageSize } = req.query;

    // Check if pagination parameters are provided
    if (page || pageSize) {
      // Check both page and pageSize are provided, use pagination
      if (!page || !pageSize) {
        const response = customResponse(false, 'Both "page" and "pageSize" query parameters are required');
        return res.status(400).json(response);
      }

      const validatedPageSize = parseInt(pageSize, 10);
      const offset = (page - 1) * validatedPageSize;

      const tasks = await Task.findMany({
        skip: offset,
        take: validatedPageSize,
        orderBy: {
          updatedAt: 'desc',
        },
      });

      const response = getAllTasksCustomResponse(true, 'Tasks retrieved successfully', tasks);
      res.json(response);
    } else {
      // If no pagination parameters are provided, get all tasks
      const tasks = await Task.findMany({
        orderBy: {
          updatedAt: 'desc',
        },
      });

      const response = getAllTasksCustomResponse(true, 'Tasks retrieved successfully', tasks);
      res.json(response);
    }
  } catch (error) {
    console.error(error);
    const response = customResponse(false, 'Internal server error');
    res.status(500).json(response);
  }
};


//Get latest update
exports.getLatestTask = async (req, res) => {
  try {
    const tasks = await Task.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });

    const latestTask = tasks[0];

    // Check if tasks were found
    if (!latestTask) {
      const response = customResponse(false, 'No task found');
      return res.status(404).json(response);
    }

    const response = getLatestTaskCustomResponse(true, 'Latest task update retrieved successfully', latestTask);
    res.json(response);
  } catch (error) {
    console.error(error);
    const response = customResponse(false, 'Internal server error');
    res.status(500).json(response);
  }
}