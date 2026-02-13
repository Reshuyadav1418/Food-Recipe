const Recipe= require('../models/recipe');


const getRecipes=async(req,res)=>{
    try{
        
        const data= await Recipe.find();
        console.log("here is the data");
        res.status(200).json(data);



    }catch(err){
        res.status(500).json({error:"Internal server error"});

    }

    
}
const getRecipe=async(req,res)=>{
    try{
       const id= req.params.id;
       const data= await Recipe.findById(id);
       res.status(200).json(data);
    }catch(err){
        res.status(500).json({error:"Internal server eroror"});

    }


}
const addRecipe=async(req,res)=>{
    try{
        const data= req.body;
        const newRecipe= new Recipe(data);
        const response= await newRecipe.save();
         res.status(200).json({
      success: true,
      message: "Recipe added successfully",
      data: response
    });
        console.log("data saved");
    }catch(err){
        res.status(500).json({error:"Internal server error"});

    }
    
}
const deleteRecipe=async(req,res)=>{
    try{
        const id= req.params.id;
        
        const data= await Recipe.findByIdAndDelete(id);
        res.status(200).json(data);



    }catch(err){
        res.status(500).json({error:"Internal server error"});

    }

   
}
const editRecipe=async(req,res)=>{
    try{
        const id= req.params.id;
        const updatedData= req.body;
        const response= await Recipe.findByIdAndUpdate(id,updatedData,{
             returnDocument: "after",
            runValidators:true
        });
    if (!response) {
      return res.status(404).json({ error: "Recipe not found" });
    }
        res.status(200).json(response);



    }catch(err){
        res.status(500).json({error:"Internal server error"});

    }
}
module.exports = {getRecipe,deleteRecipe,editRecipe,addRecipe,getRecipes};