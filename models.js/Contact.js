const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please enter full name"],
    },
    phones: {
        type: [String],
        default: [],
    },
    socialMedia: {   
        facebook: { type: String, default: "" },
        linkedin: { type: String, default: "" },
    },
    email: {
        type: String,
        unique: true,
        sparse: true,
        lowercase: true,
        trim: true,
    },
    user: {  
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
