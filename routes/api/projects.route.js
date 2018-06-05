var express = require('express');
var router = express.Router();
var ProjectController = require('../../controllers/projects.controller');

router.get('/', ProjectController.getProjects);
router.post('/', ProjectController.createProject);
router.put('/', ProjectController.updateProject);
router.delete('/:id', ProjectController.removeProject);

module.exports = router;