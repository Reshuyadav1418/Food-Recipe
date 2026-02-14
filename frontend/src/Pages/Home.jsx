import React from 'react';
import food from '../assets/food.jpg';
import RecipeItems from '../components/RecipeItems';
const Home = () => {
  return (
    <div>
      
     <section className='home'>
      <div className="left">
        <h1>Food Recipe</h1>
        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae beatae sunt aliquid earum corrupti accusantium illum exercitationem, voluptas officiis? Voluptatum quod temporibus enim earum ab soluta excepturi laborum blanditiis nam vitae id maiores asperiores ullam eius sequi ea, ducimus quaerat, similique animi. Alias porro, quaerat dignissimos illo obcaecati saepe eum veritatis harum nisi pariatur facilis minus atque vel quidem! Officiis rem praesentium, soluta nulla incidunt dolorum animi assumenda at qui excepturi fuga dolorem voluptatum earum perferendis consequatur eligendi adipisci? Rem, in. Sunt voluptatum fuga porro voluptates exercitationem at, accusamus sit cum temporibus explicabo ratione, expedita provident maiores recusandae a repudiandae!</h5>
        <button>Share your rescipe</button>
      </div>
      <div className="right">
        <img src={food} width="320px" height="300px"></img>
      </div>
     </section>
   <div className="bg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,128L18.5,160C36.9,192,74,256,111,288C147.7,320,185,320,222,298.7C258.5,277,295,235,332,181.3C369.2,128,406,64,443,69.3C480,75,517,149,554,202.7C590.8,256,628,288,665,293.3C701.5,299,738,277,775,277.3C812.3,277,849,299,886,272C923.1,245,960,171,997,133.3C1033.8,96,1071,96,1108,96C1144.6,96,1182,96,1218,90.7C1255.4,85,1292,75,1329,85.3C1366.2,96,1403,128,1422,144L1440,160L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg></div>
   <div className="recipe">
<RecipeItems/>
   </div>
   
 
    </div>
   
  );
}

export default Home;
