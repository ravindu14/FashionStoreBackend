// server.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");

const mongoose = require("mongoose");

const config = require("./DB.js");

const categoryRoute = require("./Route/category.router");
const loginRoute = require("./Route/login.router");
const productRoute = require("./Route/product.router");
const orderRoute = require("./Route/order.router");

mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database" + err);
    }
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/category", categoryRoute);
app.use("/login", loginRoute);
app.use("/product", productRoute);
app.use("/order", orderRoute);

app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});
