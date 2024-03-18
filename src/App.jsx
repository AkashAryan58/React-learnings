import { useState } from "react";
import FoodItems from "./fitem";
import FoodInput from "./foodinput";
import './index.css'
function App() {
   let [fooditem,SetFoodItem]=useState(["dal","chawal","dosa","sambar"]);
   
   
   let [textchange,UseTextChange]=useState("Type into the input box");
   function handleChange(event){
        if(event.nativeEvent.key=="Enter")
        {
          console.log("enter pressed");
           UseTextChange(event.target.value);
           console.log(fooditem);
           let healthyFood=[...fooditem,event.target.value];
           SetFoodItem(healthyFood);
           console.log(fooditem);
        }

    }
  return (
    <div className="container">
    <h1>Healthy foods</h1>
    <FoodInput handleChange={handleChange}></FoodInput>
    <p>{textchange}</p>
    <FoodItems key={fooditem} items={fooditem}></FoodItems>
    </div>
  );
}

export default App;
