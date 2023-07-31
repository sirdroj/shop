import React from "react";
import { PRODUCTS } from "../../products";
import "./Home.scss";
import Card from "../card/Card";
const Home = ({ add, remove, cart }) => {
  return (
    <div className="Home">
      {PRODUCTS.map((product) => (
        // <div className="card">
        //   <img src={product.productImage} />
        //   <div className="btns">
        //     <button
        //       onClick={() => {
        //         add(product.id);
        //       }}
        //     >
        //       add
        //     </button>
        //     <p>{cart[product.id]}</p>
        //     <button
        //       onClick={() => {
        //         remove(product.id);
        //       }}
        //     >
        //       remove
        //     </button>
        //   </div>
        // </div>
        <Card add={add} remove={remove} cart={cart} product={product}/>
        
      ))}
    </div>
  );
};

export default Home;
