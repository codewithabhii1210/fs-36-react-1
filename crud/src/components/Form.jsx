import React, { useState } from "react";

const Form = () => {
  console.log("rendering...");
  let formSubmit = (e) => {
    e.preventDefault();
    console.log("name ->", name);
    console.log("email ->", email);
    console.log("mobile ->", mobile);
  };

  let [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobile, setMobile] = useState(null);



  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center">
      <form
        onSubmit={formSubmit}
        className="flex rounded-xl gap-4 flex-col w-[40%] bg-white p-5"
      >
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="p-2 border border-gray-500 rounded"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="p-2 border border-gray-500 rounded"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          className="p-2 border border-gray-500 rounded"
          type="text"
          placeholder="mobile"
        />
        <button className="p-2 rounded bg-blue-600 text-white">Submit</button>
      </form>
    </div>
  );
};

export default Form;
