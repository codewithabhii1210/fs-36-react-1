import React, { useState } from "react";
import Comp1 from "./components/Comp1";

const App = () => {
  let getVal = (num) => {
    console.log(num);
  };
  return (
    <div>
      <h1>Props drilling</h1>
      <Comp1 fn={getVal} />
    </div>
  );
};

export default App;
