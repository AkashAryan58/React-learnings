function Item({foodite, handleBuyButton}){
    return(
      <>
         <li className="list-group-item">
            {foodite}
             <button style={{marginLeft:40}} onClick={handleBuyButton}>Buy</button>
            </li>
           
      </>
        
    )
}
export default Item;