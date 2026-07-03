const  usermodel = require('../models/shipment.model');

exports.createUser = async (req, res) => {
  
    try {
        const { name, email } = req.body;
        if (!name || !email) {  
            return res.status(400).json({ error: 'Name and email are required' });
        }               
        usermodel.create({ name, email })
            .then((user) => {
                res.status(201).json({ message: 'User created successfully', user });
            }) 
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
}