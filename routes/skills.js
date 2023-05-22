const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');

// Display all skills
router.get('/', skillsController.index);

// Display the form for entering a new skill
router.get('/new', skillsController.newSkill);

// Create a new skill
router.post('/', skillsController.create);

// Display a specific skill
router.get('/:id', skillsController.show);

// Delete a specific skill
router.delete('/:id', skillsController.deleteSkill);

module.exports = router;
