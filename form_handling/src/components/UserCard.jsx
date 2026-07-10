import React from "react";

const UserCard = ({value}) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Name - {value.name}</h1>
      <h2>Email - {value.email}</h2>
      <h3>mobile - {value.mobile}</h3>
      <h4>password - {value.password}</h4>
    </div>
  );
};

export default UserCard;
