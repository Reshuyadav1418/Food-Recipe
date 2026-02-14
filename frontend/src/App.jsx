import {  createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import './App.css';
// import About from "./Pages/About";
// import Services from "./Pages/Services";
const router= createBrowserRouter([
  {path:"/",element:<Home/>}
])
function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;