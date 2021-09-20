const express = require("express"); // nodeJs
// import express from "express"; // ES6

const app = express();

app.use(() => {
  console.log("hello server...");
});

app.listen(4000);
