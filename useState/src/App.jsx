import React, { useState } from "react";

const App = () => {
  console.log("app rendering...");
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button
        onClick={() => {
          setCount(count + 3);
          setCount(count + 2);
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          console.log("lol");
        }}
      >
        lol
      </button>
    </div>
  );
};

export default App;
