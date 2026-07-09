import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  let [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default refresh behavior of the form submission
    console.log("Form is submitted successfully!");

    let product = {
      name: name,
      price: price,
      quantity: quantity,
      description: description,
    };
    console.log(product);

    /*
    Send data to backend using axios
        url => localhost:8000/product
        method => POST
        data => product
    */

    /* let result = axios({
      url: "http://localhost:8000/product",
      method: "POST",
      data: product,
    }); */

    // We need to write async function to handle the axios request and response. 
    // We will use async/await to handle the asynchronous nature of the axios request.
    try {
        let result = await axios({
            url: "http://localhost:8000/product",
            method: "POST",
            data: product,
        });
        console.log(result);
    } catch (error) {
        console.log(error);
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
              type="string"
              onChange={(e) => {
                // console.log(e.target.value);
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              id="price"
              value={price} // Value is set to the state variable 'price'
              type="number"
              onChange={(e) => {
                // console.log(e.target.value);
                setPrice(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input
              id="quantity"
              value={quantity} // Value is set to the state variable 'quantity'
              type="number"
              onChange={(e) => {
                // console.log(e.target.value);
                setQuantity(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              type="text"
              onChange={(e) => {
                // console.log(e.target.value);
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
        </div>

        <div>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
