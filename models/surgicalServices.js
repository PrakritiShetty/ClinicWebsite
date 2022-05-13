var mongoose= require('mongoose');

var Schema= mongoose.Schema;

var surgicalServicesSchema= new Schema({
    title: {type:String, required:true},
    duration:{type:String, required: true},
    description:{type:String},
});

module.exports= mongoose.model('surgicalServices', surgicalServicesSchema);
