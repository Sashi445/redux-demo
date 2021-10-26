import Counter from "./components/counter";
import CounterRedux from "./components/counterRedux";
import Cart from "./components/cart";
import ShoppingList from "./components/shoppingList";
import "./App.css";
import { Store } from "./globalStore";

function App() {
  return (
    <div className="App">
      <Store>
        {/* <Counter /> */}
        {/* <hr /> */}
        {/* <CounterRedux /> */}
        <ShoppingList/>
        <hr/>
        <Cart/>
      </Store>
    </div>
  );
}

export default App;
