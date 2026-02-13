const express= require('express');
const router=express.Router();

const {getRecipe,addRecipe,deleteRecipe,editRecipe,getRecipes} =require('../controller/recipe.js');

router.get('/',getRecipes);
router.get('/:id',getRecipe);
router.post('/',addRecipe);
router.put('/:id',editRecipe);
router.delete('/:id',deleteRecipe);

  
    
    module.exports=router;