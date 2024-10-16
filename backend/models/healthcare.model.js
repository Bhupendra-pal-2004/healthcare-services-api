/** @format */

import mongoose from "mongoose";

const servicesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Services = mongoose.model("healthcare-service", servicesSchema);

export default Services;
