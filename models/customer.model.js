import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    address : {
        house_no : {
            type : Number,
            required : true
        },
        street : {
            type : String,
            required : true
        },
        city : {
            type : String,
            required : true
        },
        state :{
            type : String,
            required : true
        }
    },
    phone_no : {
        type : String,
        length : 10,
        required : true
    }
})


export default mongoose.model("customer",userSchema)