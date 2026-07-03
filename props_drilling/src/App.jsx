import React, { useState } from "react";
import Registration from "./components/Registration";
import Navbar from "./components/Navbar";

const App = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="h-screen gap-5 bg-gray-300 flex flex-col items-center">
      <Navbar />
      <Registration />

      <div className="bg-white text-2xl p-5 rounded flex flex-col gap-5">
        <h1>Count is {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="p-2 bg-blue-600 text-white rounded"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;
