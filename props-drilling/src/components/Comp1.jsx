import React from "react";
import Comp2 from "./Comp2";

const Comp1 = ({ fn }) => {
  let getVal = (num) => {
    console.log(num);
    fn(num);
  };

  return (
    <div>
      <h1>this is component 1</h1>
      <Comp2 fn={getVal} />
    </div>
  );
};

export default Comp1;
