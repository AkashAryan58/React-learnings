import Item from "./item";
function FoodItems({items}){

 return(
 <ul className="list-group">
  {    items.map((item)=>(
      <>
      <Item key ={item} foodite={item} handleBuyButton={ ()=>{
     console.log(`${item} baught`)}}
   ></Item>
      </>
    ))
  }
 </ul>
 )
}
export default FoodItems;