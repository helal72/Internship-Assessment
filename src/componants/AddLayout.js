import React, { useContext, useState } from "react";
import LayoutContext from "../context/layout/LayoutContext";
//import { useNavigate } from 'react-router-dom'

const AddLayout = () => {
  const context = useContext(LayoutContext);
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [sDiscription, setSdiscription] = useState("");
  const [lDescription, setLdescription] = useState("");
  const [phone, setPhone] = useState("");
  const [files, setFiles] = useState("");
  const { addLayouts } = context;
  //let navigate = useNavigate()

  const handleClic = (e) => {
    e.preventDefault();
    addLayouts(
      productName,
      sku,
      category,
      size,
      color,
      sDiscription,
      lDescription,
      phone,
      files
    );
    
    // navigate("/Layout2");
  };
  return (
    <div className="container my-3">
      <form
        className="formBody"
        action="/uploads"
        encType="multipart/form-data"
        method="post"
      >
        <div className="row">
          <div className="col-25">
            <label htmlFor="productName">Product Name:</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              id="productName"
              name="productName"
              aria-describedby="emailHelp"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="sku">SKU:</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              onChange={(e) => setSku(e.target.value)}
              value={sku}
              id="sku"
              name="sku"
              aria-describedby="emailHelp"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="category"> Category:</label>
          </div>
          <div className="col-75">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              name="category"
              aria-describedby="emailHelp"
            >
              <option value="Pipe">Pipe & Fitting</option>
              <option value="door">Door</option>
              <option value="furniture">Furniture</option>
              <option value="household">Household</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="size"> Size:</label>
          </div>
          <div className="col-75">
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              id="size"
              name="size"
              aria-describedby="emailHelp"
            >
              <option value="large">Large</option>
              <option value="medium">Medium</option>
              <option value="small">Small</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="color"> Color:</label>
          </div>
          <div className="col-75">
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              id="color"
              name="color"
              aria-describedby="emailHelp"
            >
              <option value="red">Red</option>
              <option value="white">White</option>
              <option value="Gray">Gray</option>
              <option value="blue">Blue</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="sDiscription">Sort Descrption:</label>
          </div>
          <div className="col-75">
            <textarea
              value={sDiscription}
              onChange={(e) => setSdiscription(e.target.value)}
              id="sDiscription"
              name="sDiscription"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="lDescription">Long Descrption:</label>
          </div>
          <div className="col-75">
            <textarea
              value={lDescription}
              onChange={(e) => setLdescription(e.target.value)}
              id="lDescription"
              name="lDescription"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="phone">Phone:</label>
          </div>
          <div className="col-75">
            <input
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              id="phone"
              name="phone"
              aria-describedby="emailHelp"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="file">Images:</label>
          </div>
          <div className="col-75">
            <input
              type="file"
              multiple
              onChange={(e) => setFiles(e.target.files)}
              required
            />
          </div>
        </div>

        <div className="row">
          <button
            type="submit"
            //disabled={layout.fname.length < 3 || layout.email.length < 5}
            className="btn btn-primary"
            onClick={handleClic}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLayout;
