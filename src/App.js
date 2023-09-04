import logo from "./logo.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, selectCount } from "./store";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleAddButton = () => dispatch(increment());
  const handleSubButton = () => dispatch(decrement());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Current value: {count}</p>
        <div style={{flexDirection: 'row'}}>
        <button onClick={handleAddButton}>Add</button>
        <button onClick={handleSubButton}>Subtract</button>
        {/* Can also directly use in onClick */}
        <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
