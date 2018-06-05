var Project = require('../models/project.model')

_this = this

exports.getProjects = async function(query, page, limit){
    var options = {
        page,
        limit
    }

    try {
        var projects = await Project.paginate(query, options)
        return projects;
    } catch (e) {
        throw Error('Error while paginating projects' + e)
    }
}

exports.createProject = async function(project) {
    var newProject = new Project({
        projectName: project.projectName 
    })

    try {
        var savedProject = await newProject.save()
        return savedProject;
    } catch (e) {
        throw Error('Error while creating project')
    }
}

exports.updateProject = async function(project) {
    var id = project.id
    try {
        var oldProject = await Project.findById(id);
    } catch (e) {
        throw Error('Error occurred while finding the project')
    }

    if (!oldProject) {
        return false;
    }

    oldProject.projectName = project.projectName

    try {
        var savedProject = await oldProject.save();
    } catch (e) {
        throw Error('Error occurred while updating the project')
    }
}

exports.deleteProject = async function(id) {
    try {
        var deleted = await Project.remove({_id: id})
        if (deleted.n === 0) {
            throw Error('Project could not be deleted')
        }
        return deleted
    } catch (e) {
        throw Error('Error occurred while deleting project ' + e)
    }
}