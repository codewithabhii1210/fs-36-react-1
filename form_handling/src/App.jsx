import React, { useState } from "react";
import UserCard from "./components/UserCard";

const App = () => {
  const [formValues, setFormValues] = useState({});
  const [users, setUsers] = useState([]);
  console.log(users);

  const formSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formValues]);
    setFormValues({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Form handling</h1>

      <form
        onSubmit={formSubmit}
        style={{
          width: "400px",
          gap: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          onChange={(e) => {
            setFormValues({ ...formValues, name: e.target.value });
          }}
          value={formValues.name}
          style={{ padding: "5px" }}
          type="text"
          placeholder="Name"
        />
        <input
          value={formValues.email}
          onChange={(e) => {
            setFormValues({ ...formValues, email: e.target.value });
          }}
          style={{ padding: "5px" }}
          type="text"
          placeholder="Email"
        />
        <input
          value={formValues.mobile}
          onChange={(e) => {
            setFormValues({ ...formValues, mobile: e.target.value });
          }}
          style={{ padding: "5px" }}
          type="text"
          placeholder="Mobile"
        />
        <input
          value={formValues.password}
          onChange={(e) => {
            setFormValues({ ...formValues, password: e.target.value });
          }}
          style={{ padding: "5px" }}
          type="text"
          placeholder="Password"
        />
        <button>Submit</button>
      </form>

      <div style={{ display: "flex" }}>
        {users.map((elem) => {
          return <UserCard value={elem} />;
        })}
      </div>
    </div>
  );
};

export default App;
