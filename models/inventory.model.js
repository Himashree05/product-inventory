import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    quantity :{
        type: Number,
        required : true
    },
    price : {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: false
    }
})

export default mongoose.model("Inventory",inventorySchema)