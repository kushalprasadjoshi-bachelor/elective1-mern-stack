import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificProduct = () => {
  let params = useParams();
  let [data, setData] = useState({}); // {} because single data

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/product/${params.id}`,
        method: "GET", // method: "get" is also valid
      });
      console.log(result.data.result);
      setData(result.data.result);
    } catch (error) {}
  }; 

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>Name is {data.name}</p>
      <p>Price is {data.price}</p>
      <p>Quantity is {data.quantity}</p>
      <p>Description is {data.description}</p>
    </div>
  );
};

export default ReadSpecificProduct;
