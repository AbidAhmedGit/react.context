import "./styles.css";
import React from "react";

const CounterContext = React.createContext();

export default function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="App">
      <CounterContext.Provider value={{ counter: counter }}>
        <div> Parent </div>
        <ChildTwo />
      </CounterContext.Provider>
    </div>
  );
}

function ChildTwo() {
  const contextValue = React.useContext(CounterContext);
  console.log(contextValue);
  return (
    <div className="App">
      <div> Child2 </div>
      {contextValue.counter}
    </div>
  );
}
