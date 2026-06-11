import React from "react";

const Info = ({name, surname, ward}) => {
  return (
    <div>
      <h1>My Information</h1>
      <ul>
        <li>My Name is {name}</li>
        <li>My Surname is {surname}</li>
        <li>My Ward is {ward}</li>
      </ul>
    </div>
  );
};

export default Info;
