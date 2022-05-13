var mongoose= require('mongoose');

var Schema= mongoose.Schema;

var indexSchema= new Schema({
    address:{type:String, required:true},
    telephone:{type:String, required:true},
    email:{type:String, required:true},
    timings:{type:String, required:true},
    testimonialName:{type:String, required:true},
    testimonial:{ type:String, required:true}

});

module.exports= mongoose.model('index', indexSchema);
