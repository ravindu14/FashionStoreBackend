const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Order = new Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    orderDate: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  {
    collection: "order",
  }
);

module.exports = mongoose.model("Order", Order);
