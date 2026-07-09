import React, { useState } from "react";

const CreateSchool = () => {
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [noOfRooms, setNoOfRooms] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default refresh behavior of the form submission
    console.log("Form is submitted successfully!");

    let school = {
      name: name,
      address: address,
      phone: phone,
      email: email,
      noOfRooms: noOfRooms,
    };
    console.log(school);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              value={address}
              type="text"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              value={phone}
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="noOfRooms">Number of Rooms</label>
            <input
              id="noOfRooms"
              value={noOfRooms}
              type="number"
              onChange={(e) => {
                setNoOfRooms(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateSchool;
