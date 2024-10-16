/** @format */

import Services from "../models/healthcare.model.js";
import mongoose from "mongoose";

export const getServices = async (req ,res) => {
  const data = await Services.find({});
  try {
    return res.status(200).json({ success: true, massage: data });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, massage: "Internal server error" });
  }
};

export const postServices = async (req, res) => {
  const service = req.body; //request data from customer
  if (!service.name || !service.price || !service.description) {
    return res
      .status(400)
      .json({ success: false, massage: "please provide all credentials " });
  }

  const newService = new Services(service);

  try {
    await newService.save();
    res.status(201).json({ success: true, massage: newService });
  } catch (error) {
    console.error("error in creting services ", error.massage);
    res.status(500).json({ success: false, massage: "server error" });
  }
};

export const deleteServices = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, massage: "you have entered a wrong key" });
  }
  try {
    await Services.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, massage: "item deleted successfully" });
  } catch (error) {
    console.error("server is not responding", error);
    res.status(400).json({ success: false, massage: "product not found" });
  }
};

export const updateServices = async (req, res) => {
  const { id } = req.params;
  const service = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, massage: "service not found" });
  }

  try {
    const updatedData = await Services.findByIdAndUpdate(id, service, {
      new: true,
    });
    if(!updatedData){
          return res.status(400).json({success:false, massage:"service not found"})
    }
    res
      .status(200)
      .json({ success: true, massage: "Service updated successfully" });
  } catch (error) {
    console.error("server side error", error);
    res.status(500).json({ success: false, massage: "server side error" });
  }
};
