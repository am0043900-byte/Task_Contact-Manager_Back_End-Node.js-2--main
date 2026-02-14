const express = require('express');
const router = express.Router();
const Contact = require('../models.js/Contact');



// POST Create Contact
router.post('/', async (req,res) => {
    try {
        const contact = await Contact.create(req.body);

        res.status(200).json({
            success: true,
            data: contact,
        });

    }catch (error) {
    // Handle duplicate email
     if(error.code === 11000 ) {
        return res.status(400).json({
            success:false,
            message: "Email already exists",
        });
     }
     res.status(500).json({
        success: false,
        message: "Server Error: " + error.message,
     });
    }
});

// GET  All Contacts
router.get('/', async (req,res) => {
    try {
        const contacts = await Contact.find().populate("user", "fullName email");
        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts,
        })

    }catch (error){
        res.status(500).json({
            success: false,
            message: "Server Error: " + error.message,
        })
    }
}) 

// DELETE  Delete Contact
router.delete('/:id', async (req,res) => {
    try {
     const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    
     res.status(200).json({
        success: true,
        message: "Contact Deleted Successfully",
     })
    }catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error: " + error.message,
        })
    }
}
)




module.exports = router;



