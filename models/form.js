var mongoose= require('mongoose');

var Schema= mongoose.Schema;

var formSchema= new Schema({
    typeOfPatient:{type:String, required:true},
    treatment:{type:String},
    docAvailable:{type:String, required: true},
    calendar:{type:Date, required:true},
    paymentMode:{type:String, required:true},
    email:{type:String, required:true},
    mobile:{type:Number, required:true}

});

module.exports= mongoose.model('form', formSchema);
