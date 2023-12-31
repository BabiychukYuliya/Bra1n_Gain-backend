const express = require('express');
const router = express.Router();
const controller = require('../../controllers/tasks-controller');
const { validateBody, isValidId, authenticate } = require('../../middlewares');

const {
  schemaAddTask,
  schemaChangeCategoryTask,
} = require('../../schemas/tasks-schema');

// Get all tasks
router.get('/', authenticate, controller.getTasks);

// Get task by id
router.get('/:id', authenticate, isValidId, controller.getTaskById);

// Add task
router.post('/', authenticate, validateBody(schemaAddTask), controller.addTask);

// Change task
router.put(
  '/:id',
  authenticate,
  isValidId,
  validateBody(schemaAddTask),
  controller.changeTask
);

// Change task category
router.patch(
  '/:id/category',
  authenticate,
  isValidId,
  validateBody(schemaChangeCategoryTask),
  controller.changeTaskCategory
);

// Delete task
router.delete('/:id', authenticate, isValidId, controller.deleteTask);

module.exports = router;
