const mongoose = require('mongoose');

// Define Payment Schema
const paymentSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    payer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true,
        unique: true
    },
    paymentDate: {
        type: Date,
        default: Date.now
    },
    paymentProof: {
        type: String,
        default: "",
        required:true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Create Payment model
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
