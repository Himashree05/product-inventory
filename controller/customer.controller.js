import customer from "../models/customer.model.js"

export const addUser = async(req,res) => {
    const user = req.body
    try {
        const newUser = await customer.create(user)
        res.status(201).json({
            success : true,
            newUser
        })
    } catch (error) {
        res.status(500).json({
            message : "unable to create user"
        })
    }
}