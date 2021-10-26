import React, {useContext} from "react";
import { storeContext } from "../globalStore";


const ShoppingList = () => {

    const {state, dispatch} = useContext(storeContext); 

    const {shopItems} = state;

    const addProduct = (id) => {
        dispatch({type : "ADD", payload : {id : id}});
    }

    return ( <div>
        <h3>Shopping Items</h3>
        {shopItems.map(item => (<div key={item.id} >
            <span>{item.product}</span>
            <button onClick={() => addProduct(item.id)} >Add</button>
        </div>
        ))}
    </div> );
}
 
export default ShoppingList;