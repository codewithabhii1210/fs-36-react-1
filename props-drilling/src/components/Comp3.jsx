import React, { useState } from "react";
import Comp2 from "./Comp2";

const Comp3 = ({fn}) => {
  let [value, setValue] = useState(10);

  fn(value)

  return (
    <div>
      <h1>this is component 3</h1>
    </div>
  );
};

export default Comp3;
