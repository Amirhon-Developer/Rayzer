import React, {useContext} from 'react'
import {Context} from '../../../Context'
import "../MiseProducts/Mise.css"
import { useCart } from "react-use-cart";


const Mise = () => {
  const { addItem, getItem, removeItem } = useCart();
   const  {array } = useContext(Context)
    const arrayFilter = array.filter((mise) => mise.category === "MICE"); 
  return (
    <div className="Grid-Country">
    {arrayFilter.map((el) => {
  return (
    <div id="mice" className="cardAll" key={el.id}>
      <div className="cardAllImg">
      <img src={el.image} alt="image" />
      </div>
      <div className="cardAll-body">
      <h3>{el.name}</h3>
      <p>{el.desc}</p>
       <div className="cardAllButtons">
       <p>{el.price} $</p>
      {!getItem(el._id) ? (
        <button className="buttonGreenEffect"  onClick={() => addItem({...el, id: el._id})}>BUY</button>
      ) : (
        <button className="buttonBlackEffect"  onClick={() => removeItem( el._id)}>
          Cancel
        </button>
      )}
       </div>
      </div>
    </div>
  );
})}
</div>
  );
}

export default Mise