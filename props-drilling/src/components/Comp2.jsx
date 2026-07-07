import React from "react";
import Comp3 from "./Comp3";

const Comp2 = ({ fn }) => {
  let getVal = (num) => {
    console.log(num);
    fn(num);
  };

  return (
    <div>
      <h1>this is component 2</h1>
      <Comp3 fn={getVal} />
    </div>
  );
};

export default Comp2;
