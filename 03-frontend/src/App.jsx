/*
const App = () => {
  return "My first React app."
}
*/

import Address from "./Address";
import Father from "./Father";
import Mother from "./Mother";
import Info from "./Info";
import CosmosApp from "./CosmosApp";

/*
const App = () => {
  let a = <h1>Hello World!</h1> 
  return a;
}
*/

/* =====================================================================
NOTE:
1. React consider Tag as data
2. We can store and return tag
3. Function ca return only one tag so <div></div> is used as a wrapper.
4. Use curly braces inside tags to perform JS operations
=========================================================================*/

/*
const App = () => {
  return (
    <div>
      <h1>Details</h1>
      <p>These are my details</p>
    </div>
  )
}
*/

/*
const App = () => {
  let name = 'Nitan'
  let surname = 'Thapa'
  return (
    <div>
      <h1 style={{ backgroundColor: "green"}}>Details</h1>
      <p style={{ color: "yellow" }}>My name is {name}</p>
      <p style={{ border: "solid red 2px"}}>My surname is {surname}</p>
      <p>The sum of 1 + 1 is {1 + 1}</p>
      <img src="favicon.svg" width="200px" height="200px"></img>
    </div>
  )
}
*/

/*
const App = () => {
  let products = [
    { name: "Laptop", price: 5000, _id: 1, quantity: 10 },
    { name: "Laptop", price: 5500, _id: 3, quantity: 70 },
    { name: "Laptop", price: 5800, _id: 2, quantity: 17 },
  ]

  return (
    <div style={{border: "solid blue 2px"}}>
      {
        products.map((product, index) => {
          return (
            <div style={{border: "solid red 2px"}}>
              <p>Product name is {product.name}</p>
              <p>Product price is {product.price}</p>
              <p>Product quantity is {product.quantity}</p>
            </div>
          )
        })
      }
    </div>
  )
}
*/

/*
// Exercise: Create frontend with the given data
const App = () => {
  let users = [
    {name:"nitan", surname:"thapa", _id:1, age: 20, gender: "male",email:"nitanthapa425@gmail.com", image:"favicon.svg"},
    {name:"sita", surname:"thapa", _id:2, age: 30, gender: "female",email:"sitathapa425@gmail.com", image:"favicon.svg"},
    {name:"rita", surname:"thapa", _id:2, age: 30, gender: "female",email:"ritathapa425@gmail.com", image:"favicon.svg"},
    {name:"anusha", surname:"thapa", _id:2, age: 30, gender: "female",email:"anushathapa425@gmail.com", image:"favicon.svg"},
  ]

  return (
    <div style={{display: "flex", border: "solid red 2px"}}>
      {
        users.map((user, index) => {
          return (
            <div style={{border: "solid blue 2px"}}>
              <div>
                <img src={user.image} />
              </div>

              <div>
                <div>
                  <p>Name: {user.name + " " + user.surname}</p>
                  <p>Email: {user.email}</p>
                </div>
                <div style={{display: "flex"}}>
                  <p>Age: {user.age}</p>
                  <p>Gender: {user.gender}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
*/

/*
const App = () => {
  return (
    <div>
      <Address></Address>
      <Father></Father>
      <Mother></Mother>
      <Info></Info>
    </div>
  );
};
*/

/*
const App = () => {
  return (
    <div>
      <Info name="Nitan" surname="Thapa" ward={1}></Info>
      <Address country="Nepal" province="Bagmati" city="Kathmandu"></Address>

      <Father name="Father" age={45}></Father>
      <Mother name="Mother" age={40}></Mother>

      <p className="success">This is success.</p>
      <p className="warning">This is warning.</p>
      <p className="error">This is error.</p>
    </div>
  );
};
*/

const App = () => {
  return <CosmosApp />
}

export default App;
