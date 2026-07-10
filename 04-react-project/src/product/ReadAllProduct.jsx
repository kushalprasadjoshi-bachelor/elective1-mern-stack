import axios from "axios";
import React, { useEffect, useState } from "react";

const ReadAllProduct = () => {
  // Hit API on page load -> useEffect() hook
  // API gives data
  // Show data

  let [data, setData] = useState([]); // Data is an array of objects [{}, {}, {}]

  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8000/product",
        method: "GET",
      });
      // console.log(result.data.result);
      setData(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data); // data has all the products from the API
  /*
  data = [
    {name:"laptop", price:1000, quantity:10, description:"A high-performance laptop", __id:"1"},
    {name:"phone", price:500, quantity:20, description:"A smartphone with great features", __id:"2"},
    {name:"tablet", price:300, quantity:15, description:"A lightweight tablet for everyday use", __id:"3"},
    {name:"headphones", price:150, quantity:30, description:"Noise-cancelling headphones for immersive sound", __id:"4"},
    {name:"smartwatch", price:200, quantity:25, description:"A smartwatch with fitness tracking capabilities", __id:"5"}
  ]
  */

  return (
    <div>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <p>Name is {item.name}</p>
            <p>Price is {item.price}</p>
            <p>Quantity is {item.quantity}</p>
            <p>Description is {item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllProduct;
