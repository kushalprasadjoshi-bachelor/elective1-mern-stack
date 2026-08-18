import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Read.css";
import { toast } from "react-toastify";

const ReadAllProduct = () => {
  // Hit API on page load -> useEffect() hook
  // API gives data
  // Show data

  let [data, setData] = useState([]); // Data is an array of objects [{}, {}, {}]

  let navigate = useNavigate();

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
    <div className="read-page">
      <h2 className="read-title">All Products</h2>

      <div className="read-grid">
        {data.map((item, i) => {
          return (
            <div className="read-card" key={i}>
              <p>
                <span>Name:</span> {item.name}
              </p>
              <p>
                <span>Price:</span> {item.price}
              </p>
              <p>
                <span>Quantity:</span> {item.quantity}
              </p>
              <p>
                <span>Description:</span> {item.description}
              </p>

              <button
                onClick={() => {
                  navigate(`/product/${item._id}`);
                }}
              >
                View
              </button>

              <button>Update</button>

              <button
                onClick={async () => {
                  try {
                    let result = await axios({
                      url: `http://localhost:8000/product/${item._id}`,
                      method: "DELETE",
                    });
                    getData(); // Refresh the data after deletion
                    toast.success("Product deleted successfully!");
                  } catch (error) {
                    toast.error("Unable to delete product.");
                  }
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReadAllProduct;
