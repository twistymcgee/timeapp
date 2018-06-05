var ProjectService = require('../services/project.service')

_this = this

exports.getProjects = async function(req, res, next) {
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10;

    try {
        var projects = await ProjectService.getProjects({}, page, limit);
        return res.status(200).json({status: 200, data: projects, message: 'Successfully fetched projects'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createProject = async function(req, res, next) {
    var project = {
        projectName: req.body.projectName
    };

    try {
        var createdProject = await ProjectService.createProject(project);
        return res.status(201).json({status: 201, data: createdProject, message: 'Successfully created project'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.updateProject = async function(req, res, next) {
    if (!req.body._id) {
        return res.status(400).json({status: 400, message: 'Id must be provided'});
    }

    var id = req.body._id;

    var project = {
        id,
        projectName: req.body.projectName
    };

    try {
        var updatedProject = await ProjectService.updateProject(project);
        return res.status(200).json({status: 200, data: updatedProject, message: 'Successfully updated project'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.removeProject = async function(req, res, next) {
    var id = req.params.id;

    try {
        var deleted = await ProjectService.deleteProject(id);
        return res.status(204).json({status: 204, message: 'Successfully deleted project'});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}