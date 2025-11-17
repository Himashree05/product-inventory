import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"

dotenv.config()
const app = express()
app.use(express.json())


// database connection

connectDb();

app.get('/',(req,res)=>{
    res.send("Inventory running api ")
});


const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`server is listening in port ${port}`)
})