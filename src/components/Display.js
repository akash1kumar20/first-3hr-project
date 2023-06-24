import React, { useEffect, useState } from "react";
import classes from "./Display.module.css";

const Display = (props) => {
  const deleteProduct = (productId) => {
    props.onDeleteProduct(productId);
  };
  return (
    <div>
      <div className={classes.display}>
        <h2>Product Added:</h2>
        <ul className={classes.list}>
          <li>
            Electronics Item:
            <ul className={classes.output}>
              {props.users
                .filter((user) => user.category === "electronics")
                .map((user) => (
                  <li key={user.id}>
                    Product_ID: {user.id}, Product_Name: {user.name},
                    Product_Price: ₹{user.price},& Product_Categor{" "}
                    {user.category}
                    <button
                      className={classes.btn}
                      onClick={() => deleteProduct(user.id)}
                    >
                      Delete Product
                    </button>
                  </li>
                ))}
            </ul>
          </li>
          <li>
            Skin Care Item:
            <ul className={classes.output}>
              {props.users
                .filter((user) => user.category === "skin")
                .map((user) => (
                  <li key={user.id}>
                    Product_ID: {user.id}, Product_Name: {user.name},
                    Product_Price: ₹ {user.price}, & Product_Category{" "}
                    {user.category}
                    <button
                      className={classes.btn}
                      onClick={() => deleteProduct(user.id)}
                    >
                      Delete Product
                    </button>
                  </li>
                ))}
            </ul>
          </li>
          <li>
            Food Item:
            <ul className={classes.output}>
              {props.users
                .filter((user) => user.category === "food")
                .map((user) => (
                  <li key={user.id}>
                    Product_ID: {user.id}, Product_Name: {user.name},
                    Product_Price: ₹ {user.price}, & Product_Category{" "}
                    {user.category}
                    <button
                      className={classes.btn}
                      onClick={() => deleteProduct(user.id)}
                    >
                      Delete Product
                    </button>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Display;
