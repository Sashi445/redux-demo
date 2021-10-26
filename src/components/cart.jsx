import React, {useContext} from "react";
import { storeContext } from './../globalStore';

const Cart = (props) => {

    const {state, dispatch} = useContext(storeContext);

    const {cartItems} = state;


    if (cartItems.length == 0){
        return <div>
            <h3>Cart</h3>
            <p>Empty Cart</p>
        </div>
    }


    return <div>
        <h3>Cart</h3>
        {cartItems.map(item => (<div key={item.id} >{item.product}</div>))}
    </div>
}

export default Cart;