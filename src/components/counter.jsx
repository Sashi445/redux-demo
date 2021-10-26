import React, {useState} from "react";


const Counter = () => {

    const initialState = {
        count : 0
    }

    const [countState, setCountState] = useState(initialState);

    const increaseCount = () => {
        setCountState(state => ({count : state.count + 2}))
    }

    const decreaseCount = () => {
        setCountState(state => ({count : state.count - 1}))
    }

    return ( <div>
        Counter Normal
        <br/>
        Count : {countState.count}
        <button onClick={() => increaseCount()} >+</button>
        <button onClick={() => decreaseCount()} >-</button>
    </div> );
}
 
export default Counter;