/**
 * @file response.js
 * @description Utility functions for creating custom API responses.
 * @author HM Infas
 */

exports.customResponse = (success, message, payload = null) => {
  return {
    success,
    message,
    payload,
  };
};

exports.getAllTasksCustomResponse = (success, message, tasks = null) => {
  let payload = null;

  if (tasks) {
    payload = tasks.map((task) => ({
      date: new Date(task.updatedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
      }),
      metrics: {
        open_tasks: task.openTasks,
        inprogress_tasks: task.inprogressTasks,
        completed_tasks: task.completedTasks,
      },
    }));
  }
  return {
    success,
    message,
    payload,
  };
};

exports.getLatestTaskCustomResponse = (success, message, tasks = null) => {
  let payload = null;

  if (tasks) {
    payload = {
      open_tasks: tasks.openTasks,
      inprogress_tasks: tasks.inprogressTasks,
      completed_tasks: tasks.completedTasks,
    };
  }
  return {
    success,
    message,
    payload,
  };
};
