import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  let [description, setDescription] = useState("");

  let navigate = useNavigate();

  let params = useParams();
  console.log(params);

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/product/${params.id}`,
        method: "GET",
      });

      console.log(result);

      let data = result.data.result; // {name: "....", price: ..., quantity: ..., description: "...."}
      setName(data.name);
      setPrice(data.price);
      setQuantity(data.quantity);
      setDescription(data.description);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

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

    // We need to write async function to handle the axios request and response.
    // We will use async/await to handle the asynchronous nature of the axios request.
    try {
      let result = await axios({
        url: `http://localhost:8000/product/${params.id}`,
        method: "PATCH",
        data: product,
      });
      console.log(result);

      toast.success("Product updated successfully!");

      navigate(`/product/${params.id}`); // Navigate to the specific product page after update
    } catch (error) {
      console.log(error.response);
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
          <button>Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
