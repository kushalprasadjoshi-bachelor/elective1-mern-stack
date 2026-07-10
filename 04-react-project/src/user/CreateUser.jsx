import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateUser = () => {
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default refresh behavior of the form submission
    console.log("Form is submitted successfully!");

    let user = {
      name: name,
      address: address,
      email: email,
      password: password,
      phone: phone,
    };
    console.log(user);

    try {
      let result = await axios({
        url: "http://localhost:8000/user",
        method: "POST",
        data: user,
      });
      console.log(result);

      toast.success("User created successfully!");

      setName("");
      setAddress("");
      setEmail("");
      setPassword("");
      setPhone("");

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name} // Value is set to the state variable 'name'
              type="text"
              onChange={(e) => {
                // console.log(e.target.value);
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              value={address} // Value is set to the state variable 'address'
              type="text"
              onChange={(e) => {
                // console.log(e.target.value);
                setAddress(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email} // Value is set to the state variable 'email'
              type="email"
              onChange={(e) => {
                // console.log(e.target.value);
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={password} // Value is set to the state variable 'password'
              type="password"
              onChange={(e) => {
                // console.log(e.target.value);
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              value={phone} // Value is set to the state variable 'phone'
              type="text"
              onChange={(e) => {
                // console.log(e.target.value);
                setPhone(e.target.value);
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

export default CreateUser;
