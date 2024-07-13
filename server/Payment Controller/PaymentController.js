const PaymentModel = require("../ConnectDB/Model/Payment");

const paymentController = async (req, res) => {
    try {
        // Destructure the required fields from req.body
        const { amount, description, transactionId, paymentProof } = req.body;

        // Create a new payment instance with the destructured fields and the payer as the logged-in user
        const paymentDetails = new PaymentModel({
            amount,
            payer: req.user._id,
            description,
            transactionId,
            paymentProof :"",
        });

        // Save the payment details to the database
        await paymentDetails.save();

        // Populate the payer field
        const populatedPayment = await PaymentModel.findById(paymentDetails._id).populate('payer');

        res.status(200).json({
            message: "Paid! Wait for Approval!!",
            data: populatedPayment,
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while processing the payment.",
            error: error.message
        });
    }
};

module.exports = paymentController;
