import React, { useState } from "react";

const App = () => {
  console.log("app rendering...");
  let [user, setUser] = useState();

  console.log(user);

  return (
    <div>
      <h1>Count - {user.name}</h1>
      <button onClick={() => {}}>change</button>
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
