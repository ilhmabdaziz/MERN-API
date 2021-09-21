const express = require("express"); // nodeJs
// import express from "express"; // ES6

const app = express();
const productsRoutes = require("./src/routes/products");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Header", "Content-Type, Authorization");
  next();
});

app.use("/v1/customer", productsRoutes);

app.listen(4000);
