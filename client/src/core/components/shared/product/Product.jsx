import React from "react";
import { Button } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";

const Product = () => {
  return (
    <article className="products__card">
      <img src="assets/img/product1.png" alt="" className="products__img" />

      <h3 className="products__title">Spirit rose</h3>
      <span className="products__price">$1500</span>

      <Button className="products__button">
        <BiShoppingBag />
      </Button>
    </article>
  );
};

export default Product;
