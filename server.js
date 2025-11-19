import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import InventoryRoutes from "./routes/inventory.routes.js"

dotenv.config()
const app = express()
app.use(express.json())


// database connection

connectDb();


app.use("/inventory",InventoryRoutes)


app.get('/',(req,res)=>{
    res.send("Inventory running api ")
});


const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`server is listening in port ${port}`)
    console.log("http://localhost:8000")
})