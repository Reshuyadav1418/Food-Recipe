import {  createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import './App.css';
import axios from 'axios';
import MainNavigation from "./components/MainNavigation.jsx";
const getAllRecipe=async()=>{
  let allRecipes=[];
  await axios.get('http://localhost:5000/recipe/').then(res=>{
    allRecipes=res.data;
  })
  return allRecipes;


}

const router= createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
   {path:"/",element:<Home/>,loader:getAllRecipe}

  ]}
  
])
function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;