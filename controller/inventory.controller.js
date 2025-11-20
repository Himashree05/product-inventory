import Inventory from "../models/inventory.model.js";


export const addItem = async(req,res) => {
    try {
        const item = await Inventory.create(req.body)
        res.status(201).json({success: true, item})
    } catch (err) {
        res.status(500).json({ error : err.message})
        
    }
}


export const getAllItems = async(req,res) => {
    try {
        const items = await Inventory.find()
        res.status(201).json({success: true, items})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}


export const getItemByName = async(req,res) => {
    const itemName = req.query.name;
    try {
        const product = await Inventory.find({ name : itemName})
        if(product){
            res.status(201).json({success: true, product})
        }
        res.status(201).json({message : "item not found"
        })
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}


export const updatePrice = async(req,res) => {
    const name = req.query.name
    const price = req.query.price
    const quantity = req.query.quantity
    
    try {
        const product = await Inventory.findOne({name : name})
        console.log(product)
    if(!product)
    {
        res.status(200).json({message: "item not found"})
    }

    if(price !== product.price)
    {
        product.price = price
    }

    if(quantity !== product.quantity)
    {
        product.quantity = quantity
    }

    const updatedProduct = await product.save();

    res.status(201).json({
        success: true,
        message: "item updated successfully",
        updatedProduct
    })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
    

}


