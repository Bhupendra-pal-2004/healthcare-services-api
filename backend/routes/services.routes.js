/** @format */

import express from "express";
import {
  deleteServices,
  getServices,
  postServices,
  updateServices,
} from "../controllers/services.controller.js";

const router = express.Router();

router.get("/", getServices);

router.delete("/:id", deleteServices);

router.put("/:id", updateServices);

router.post("/", postServices);

export { router as servicesRoutes };
