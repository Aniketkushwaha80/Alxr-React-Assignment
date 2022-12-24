import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Product.css";
import { Link, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsCartPlusFill, BsSuitHeart } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";

import { MdFilterList } from "react-icons/md";

import Form from "react-bootstrap/Form";

import ListGroup from "react-bootstrap/ListGroup";
import Submenu from "../Submenu/Submenu";
import Fevorite from "../Fovorite/Fevorite";

const Product = () => {
  const [data, setdata] = useState([]);

  const [filterdata, setfilterdata] = useState();

  async function getdata() {
    const d = await fetch("https://api.earthsfresh.in/api/products");
    const dd = await d.json();

    setdata(dd);
  }
  useEffect(() => {
    getdata();
  }, []);

  const Filter = (key) => {
    console.log(key);
    const UpdatedData = data.filter((k) =>
      k.product_cat[0].cat_name.toLocaleLowerCase().includes(`${key}`)
    );
    setfilterdata(UpdatedData);
  };
  var UPdatefilterDate;
  if (filterdata) {
    UPdatefilterDate = filterdata;
  } else {
    UPdatefilterDate = data;
  }
  console.log(UPdatefilterDate);

  // const Sortdata=(sortvalue)=>{
  //   const sort=[...data]

  // if(sortvalue=="HTL"){
  //   sort.sort(function (a, b) {

  //         if (a.uoms[0].selling_price > b.uoms[0].selling_price) {
  //           return 1;
  //         } else if (a.uoms[0].selling_price < b.uoms[0].selling_price) {
  //           return -1;
  //         } else {
  //           return 0;
  //         }

  //       })
  //       setdata(sort)

  // }else if(sortvalue=="LTH")
  // comsole.log("LTH")
  // }

  return (
    <>
      <div className="container">
        <div className="left-container">
          <MdFilterList
            style={{ fontSize: "25px", color: "#059588", margin: "2%" }}
          />{" "}
          <span style={{ fontSize: "18px", color: "black", fontWeight: "600" }}>
            Filters By:
          </span>
          <p
            style={{
              fontSize: "16px",
              color: "black",
              fontWeight: "600",
              margin: "1%",
            }}
          >
            Categories
          </p>
          <Card
            style={{ width: "100%", marginBottom: "15px", marginTop: "15px" }}
          >
            <Card.Body>
              <div className="cardHeader">
                <p style={{ color: "black" }} className="card-list">
                  Filter By Category
                </p>
                <HiMinus style={{ fontSize: "20px", color: "#059588" }} />
              </div>

              <p
                onClick={() => {
                  Filter("salt");
                }}
                className="card-list"
              >
                Salt
              </p>

              <p
                onClick={() => {
                  Filter("oils");
                }}
                className="card-list"
              >
                oils
              </p>

              <p
                onClick={() => {
                  Filter("spices");
                }}
                className="card-list"
              >
                spices
              </p>

              <p
                onClick={() => {
                  Filter("masalas");
                }}
                className="card-list"
              >
                masalas
              </p>

              <p
                onClick={() => {
                  Filter("rice");
                }}
                className="card-list"
              >
                Rice
              </p>
            </Card.Body>
          </Card>
          <Card style={{ width: "100%", background: "rgb(239,239,239)" }}>
            <div className="cardHeader card-header-sub ">
              <p style={{ color: "black" }} className="card-list">
                Edible & Utility Oils{" "}
              </p>
              <FiPlus style={{ fontSize: "20px", color: "#059588" }} />
            </div>

            <div className="cardHeader card-header-sub ">
              <p style={{ color: "black" }} className="card-list">
                Instant & Ready To Eat{" "}
              </p>
              <FiPlus style={{ fontSize: "20px", color: "#059588" }} />
            </div>
            <div className="cardHeader card-header-sub ">
              <p style={{ color: "black" }} className="card-list">
                Whole Spices & Masalas{" "}
              </p>
              <FiPlus style={{ fontSize: "20px", color: "#059588" }} />
            </div>
          </Card>
          <Card
            style={{ width: "100%", marginBottom: "15px", marginTop: "15px" }}
          >
            <Card.Body>
              <div className="cardHeader">
                <p style={{ color: "black" }} className="card-list">
                  Brand
                </p>
                <HiMinus style={{ fontSize: "20px", color: "#059588" }} />
              </div>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <div style={{ marginBottom: "5%" }}>
                  <input
                    type="checkbox"
                    style={{ transform: "scale(1.5)", background: "red" }}
                  />{" "}
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      paddingLeft: "10%",
                      fontWeight: "600",
                    }}
                  >
                    Earth’s Fresh
                  </span>
                </div>
                <div style={{ marginBottom: "5%" }}>
                  <input
                    type="checkbox"
                    style={{ transform: "scale(1.5)", background: "red" }}
                  />{" "}
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      paddingLeft: "10%",
                      fontWeight: "600",
                    }}
                  >
                    Farmeasy
                  </span>
                </div>
                <div style={{ marginBottom: "5%" }}>
                  <input
                    type="checkbox"
                    style={{ transform: "scale(1.5)", background: "red" }}
                  />{" "}
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      paddingLeft: "10%",
                      fontWeight: "600",
                    }}
                  >
                    Mazers Mason Farms
                  </span>
                </div>
                <div style={{ marginBottom: "5%" }}>
                  <input
                    type="checkbox"
                    style={{ transform: "scale(1.5)", background: "red" }}
                  />{" "}
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      paddingLeft: "10%",
                      fontWeight: "600",
                    }}
                  >
                    Hybrid Farms
                  </span>
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "100%", marginBottom: "15px", marginTop: "15px" }}
          >
            <Card.Body>
              <div className="cardHeader">
                <p style={{ color: "black" }} className="card-list">
                  Affiliates
                </p>
                <HiMinus style={{ fontSize: "20px", color: "#059588" }} />
              </div>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <div style={{ marginBottom: "5%" }}>
                  <input
                    type="checkbox"
                    style={{ transform: "scale(1.5)", background: "red" }}
                  />{" "}
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      paddingLeft: "10%",
                      fontWeight: "600",
                    }}
                  >
                    Earth’s Fresh
                  </span>
                </div>
                <div style={{ marginBottom: "5%" }}>
                  <input
                    type="checkbox"
                    style={{ transform: "scale(1.5)", background: "red" }}
                  />{" "}
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      paddingLeft: "10%",
                      fontWeight: "600",
                    }}
                  >
                    Farmeasy
                  </span>
                </div>
                <div style={{ marginBottom: "5%" }}>
                  <input
                    type="checkbox"
                    style={{ transform: "scale(1.5)", background: "red" }}
                  />{" "}
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      paddingLeft: "10%",
                      fontWeight: "600",
                    }}
                  >
                    Mazers Mason Farms
                  </span>
                </div>
                <div style={{ marginBottom: "5%" }}>
                  <input
                    type="checkbox"
                    style={{ transform: "scale(1.5)", background: "red" }}
                  />{" "}
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      paddingLeft: "10%",
                      fontWeight: "600",
                    }}
                  >
                    Hybrid Farms
                  </span>
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
        </div>
        <div className="right-container">
          <Submenu />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p
                style={{
                  fontSize: "12px",
                  color: "#8B90A0",
                  lineHeight: "16px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  margin: "0%",
                }}
              >
                Home Whole spices & masala Garam masala
              </p>
              <span
                style={{
                  fontSize: "14px",
                  color: "black",
                  lineHeight: "16px",
                  fontWeight: "600",
                  fontStyle: "normal",
                }}
              >
                Garam Masala
              </span>{" "}
              <span
                style={{
                  fontSize: "14px",
                  color: "#059588",
                  lineHeight: "16px",
                  fontWeight: "600",
                  fontStyle: "normal",
                }}
              >
                15 Item
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1%",
                width: "50%",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "black",
                  lineHeight: "16px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  margin: "0%",
                }}
              >
                Sort by:
              </p>
              <p
                onClick={() => {
                  Sortdata("HTL");
                }}
                style={{
                  fontSize: "12px",
                  color: "#505565",
                  lineHeight: "16px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  margin: "0%",
                }}
              >
                Price - High to Low
              </p>
              <p
                onClick={() => {
                  Sortdata("LTH");
                }}
                style={{
                  fontSize: "12px",
                  color: "#505565",
                  lineHeight: "16px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  margin: "0%",
                }}
              >
                Price - Low to High
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#505565",
                  lineHeight: "16px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  margin: "0%",
                }}
              >
                Relvance
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#505565",
                  lineHeight: "16px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  margin: "0%",
                }}
              >
                Discount
              </p>
            </div>
          </div>
          <div className="right-container-product">
            {UPdatefilterDate.map((e) => (
              <Card key={e.id} style={{ height: "310px" }}>
                <Fevorite />

                <Card.Img
                  style={{ width: "80%", margin: "auto", height: "100px" }}
                  variant="top"
                  src={
                    "https://media.istockphoto.com/id/1198863709/photo/skin-and-hair-care-beauty-product-mock-up-lotion-bottle-oil-cream-isolated-on-white-3d-render.jpg?s=612x612&w=0&k=20&c=_0-9dLUohaQrThH0669Ygx3Ar17rX0cRkXy0cEexfQw="
                  }
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "12px",
                      color: "#059588",
                      textTransform: "uppercase",
                      lineHeight: "14px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      height: "14px",
                      overflow: "hidden",
                    }}
                  >
                    {e.product_name}
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      color: "black",
                      lineHeight: "16px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      overflow: "hidden",
                      height: "32px",
                    }}
                  >
                    {e.product_description.short_description}
                  </Card.Text>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <Submenu />
                    </div>
                    <div
                      style={{
                        background: "#059588",
                        display: "flex",
                        justifyContent: "space-evenly",
                        color: "white",
                        fontSize: "18px",
                        alignItems: "center",
                        fontWeight: "600",
                        borderRadius: "4px 0px",
                        width: "90px",
                        height: "40px",
                        border: "none",
                      }}
                      variant="primary"
                    >
                      <BsCartPlusFill />
                      <p style={{ paddingTop: "18%" }}>Add</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="el-left-product"></div>
      <div className="el-right-product"></div>
    </>
  );
};

export default Product;
