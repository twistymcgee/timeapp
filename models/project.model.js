var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var ProjectSchema = new mongoose.Schema({
    projectName: String    
})

ProjectSchema.plugin(mongoosePaginate)
const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project;