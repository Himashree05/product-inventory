import express from "express"
import { addItem, getAllItems, getItemByName, updatePrice } from "../controller/inventory.controller.js"

const router = express.Router();

router.post("/add",addItem)
router.get("/getall", getAllItems)
router.get("/get",getItemByName)
router.get("/update",updatePrice)

export default router;