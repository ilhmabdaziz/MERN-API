const express = require("express"); // nodeJs
// import express from "express"; // ES6

const app = express();
const productsRoutes = require("./src/routes/products");

app.use("/", productsRoutes);

app.listen(4000);
