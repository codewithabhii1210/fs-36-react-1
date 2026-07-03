import React from "react";

const Registration = () => {






    
  return (
    <form
      className="flex flex-col w-90 gap-4 rounded-xl bg-white border border-gray-500 p-4"
      action=""
    >
      <h1>Registration page</h1>

      <input
        className="p-2 border border-gray-300 rounded-xl"
        type="text"
        placeholder="Name"
      />
      <input
        className="p-2 border border-gray-300 rounded-xl"
        type="text"
        placeholder="Email"
      />
      <input
        className="p-2 border border-gray-300 rounded-xl"
        type="text"
        placeholder="Mobile"
      />
      <input
        className="p-2 border border-gray-300 rounded-xl"
        type="text"
        placeholder="Password"
      />
      <button className="bg-blue-500 p-2 rounded-xl text-white">Submit</button>
    </form>
  );
};

export default Registration;
