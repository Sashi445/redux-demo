import { createContext, useReducer } from "react";

export const storeContext = createContext(null);

const initialState = {
  shopItems: [
    {
      id: 1,
      product: "Headphones",
    },
    {
      id: 2,
      product: "Mobile",
    },
    {
      id: 3,
      product: "Laptop",
    },
  ],

  cartItems: [],
};

function reducer(state, action) {
  if (action.type === "ADD") {
    const cartItems = [
      ...state.cartItems,
      state.shopItems.find((item) => item.id === action.payload.id),
    ];
    state = { ...state, cartItems };
    return state;
  }

  if (action.type === "REMOVE") {
    state = { ...state, cartItems: state.cartItems.filter((e) => e.id !== action.payload.id) };
    return state;
  }

  return state;
}

export const Store = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </storeContext.Provider>
  );
};
