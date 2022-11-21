// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import useLocalStorage from './lib/components/LocalStorage/LocalStorage';

function App() {
  // const [name, setName] = useState('');
  // const [add, setAdd] = useLocalStorage("UserName", "null");
  // const [count, setCount] = useLocalStorage("Count", 0);

  // const addInLocal = () => {
  //   setAdd(name);
  // }
  return (
    <div className="App">
      {/*  */}
      {/* <p>Name: {
        add
      }</p>
      <input type="text" placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={addInLocal}
      >
        Add name
      </button> */}

      {/* // */}
      {/* <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() => setCount(count + 1)}
      >
        Count {count}
      </button>

      <button onClick={() => {
        setCount(0);
      }}>
        Reset Count
      </button> */}
    </div>
  );
}

export default App;
