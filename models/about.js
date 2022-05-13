var mongoose= require('mongoose');

var Schema= mongoose.Schema;

var aboutSchema= new Schema({
    name: {type:String, required:true},
    qualification:{type:String, required: true},
    education:{type:String, required:true},
    personalNote:{type: String}
});

module.exports= mongoose.model('about', aboutSchema);
