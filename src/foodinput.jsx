const FoodInput = ({handleChange}) =>{
    
    return(
    <input type="text" placeholder="enter food item" id="input"
    onKeyUp={handleChange}
    ></input>
    )

}
export default FoodInput;