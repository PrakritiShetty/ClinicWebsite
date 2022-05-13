var mongoose= require('mongoose');

var Schema= mongoose.Schema;

var generalServicesSchema= new Schema({
    title: {type:String, required:true},
    duration:{type:String, required: true},
    description:{type:String},
});

module.exports= mongoose.model('generalServices', generalServicesSchema);
