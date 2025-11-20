import express from "express"
import { addUser } from "../controller/customer.controller.js"

const router = new express.Router()

router.post("/add",addUser)

export default router