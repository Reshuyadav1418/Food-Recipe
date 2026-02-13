const mongoose=require('mongoose');
const recipeeSchema= new mongoose.Schema({
    dish:{
        type:String,
        required:true
    }
    
});
const Dish = mongoose.model('Dish',recipeeSchema);
module.exports=Dish;