/*
const Address = () => {
  return <div>Kathmandu, Gaglphedi</div>;
};
*/

const Address = ({country, province, city}) => {
  return <div>
    <h1>Address</h1>
    <p>My country is {country}</p>
    <p>My province is {province}</p>
    <p>My city is {city}</p>
  </div>
};

export default Address;
