import React, {useReducer} from "react";

const initialState = {
    count : 0
}

// action (type === "increment", payload = {})

function reducer(state, action){

    if ( action.type === "increment" ) {

        state = {...state, count : state.count + 1};

        return state;

    }

    if (action.type === "decrement") {

        state = { ...state, count : state.count - 1 };

        return state;

    }

    return state;

}


const CounterRedux = () => {

    const [state, dispatch] = useReducer(reducer, initialState, () => {
        setTimeout(function(){
            console.log("Lazily loading")
        }, 100)
    });


    return (
        <>
        <div>Counter Redux</div>
        <div>
            count : {state.count}
            <button onClick={() => dispatch({type : "increment"})}>+</button>
            <button onClick={() => dispatch({type : "decrement"})}>-</button>
        </div>
        </>
     );
}
 
export default CounterRedux;