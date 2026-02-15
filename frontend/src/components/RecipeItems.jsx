import React from 'react';
import { useLoaderData } from 'react-router-dom';
import food from '../assets/food.jpg';
import {BsStopwatchFill} from 'react-icons/bs';
import { FaHeart } from "react-icons/fa6";
const RecipeItems = () => {
    const allRecipes=useLoaderData();
    console.log(allRecipes);
  return (
    <div>
      <div className="card-container">
        {
          allRecipes?.map((item,index)=>{
            return(
              <div key={index} className='card'>
                <img src={food} width="120px" height="100px"></img>
                <div className="card-body">
                  <div className="title">{item.title}</div>
                  <div className="icons">
                    <div className="timer"><BsStopwatchFill/>30 min</div>
                    <FaHeart />
                  </div>
                </div>
                </div>
            )
          })
        }
      </div>


    </div>
   
  );
}


export default RecipeItems;
