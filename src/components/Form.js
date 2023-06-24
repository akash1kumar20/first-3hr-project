import React, { useState, useEffect } from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const [idHolder, idChange] = useState("");
  const [priceHolder, priceChange] = useState("");
  const [nameHolder, nameChange] = useState("");
  const [categoryHolder, categoryChange] = useState("");
  const [formValue, setFormValue] = useState([]);

  const idDetails = (event) => {
    idChange(event.target.value);
  };
  const nameDetails = (event) => {
    nameChange(event.target.value);
  };
  const priceDetails = (event) => {
    priceChange(event.target.value);
  };
  const categoryDetails = (event) => {
    categoryChange(event.target.value);
  };
  const adminPageDetails = (event) => {
    event.preventDefault();
    const pID = idHolder;
    const pPrice = priceHolder;
    const pName = nameHolder;
    const pCategory = categoryHolder;
    let objToStore = {
      pID,
      pPrice,
      pName,
      pCategory,
    };
    setFormValue([...formValue, objToStore]);

    props.onSaveData(pPrice, pName, pCategory, pID);

    idChange("");
    nameChange("");
    priceChange("");
    categoryChange("");
  };

  useEffect(() => {
    localStorage.setItem(idHolder, JSON.stringify(formValue));
  }, [idHolder]);
  return (
    <div className={classes.body}>
      <form onSubmit={adminPageDetails} value={formValue}>
        <div className={classes.label}>
          <label htmlFor="pID"> Product ID: </label>
          <input
            type="text"
            id="pID"
            required
            onChange={idDetails}
            value={idHolder}
          ></input>
          <label htmlFor="pPrice"> Selling Price: </label>
          <input
            type="number"
            id="pPrice"
            min="0"
            required
            onChange={priceDetails}
            value={priceHolder}
          ></input>
          <label htmlFor="pName"> Product Name: </label>
          <input
            type="text"
            id="pName"
            required
            onChange={nameDetails}
            value={nameHolder}
          ></input>
          <label htmlFor="category"> Choose a Category: </label>
          <select
            id="category"
            onChange={categoryDetails}
            value={categoryHolder}
          >
            <option value="" defaultValue hidden>
              Choose One
            </option>
            <option value="electronics">Electronics</option>
            <option value="skin">Skin</option>
            <option value="food">Food</option>
          </select>
        </div>
        <button type="submit" className={classes.btn}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Form;
