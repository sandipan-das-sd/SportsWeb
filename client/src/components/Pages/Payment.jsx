import  { useState, useEffect } from 'react';
import axios from 'axios';
import './Payment.css'
import uploadFiles from '../../helpers/uploadFiles'; 



export default function PaymentPages() {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [paymentProof, setPaymentProof] = useState(null);
    const [message, setMessage] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    return;
                }

                const response = await axios.get('http://localhost:5800/api/user-details', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const userData = response.data.data;
                setUserName(userData.name); // Set user name from token

            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, []);

    const handlePaymentProofChange = (e) => {
        setPaymentProof(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            setMessage('Please login to make a payment.');
            return;
        }

        try {
            // Upload payment proof file
            let paymentProofUrl = '';
            if (paymentProof) {
                paymentProofUrl = await uploadFiles(paymentProof);
            }

            // Create payment object
            const paymentData = {
                amount,
                description,
                transactionId,
                paymentProof: paymentProofUrl,
                userName, // Add user name to payment data
            };

            // Make API request to backend
            const response = await axios.post('http://localhost:5800/api/add-payment', paymentData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data.success) {
                setMessage('Paid! Wait for Approval!!');
            } else {
                setMessage('Payment failed. Please try again.');
            }
        } catch (error) {
            console.error('Error processing payment:', error);
            setMessage('An error occurred while processing the payment.');
        }
    };

    return (
        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
            <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: '600px' }}>
                <div className="w-full pt-1 pb-5">
                    <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                        <i className="mdi mdi-credit-card-outline text-3xl"></i>
                    </div>
                </div>
                <div className="mb-10">
                    <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">Amount</label>
                        <input
                            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            type="text"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">Description</label>
                        <input
                            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">Transaction Number</label>
                        <input
                            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            type="text"
                            placeholder="Transaction Number"
                            value={transactionId}
                            onChange={(e) => setTransactionId(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">Upload Payment Proof</label>
                        <input
                            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            type="file"
                            onChange={handlePaymentProofChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">Additional Description</label>
                        <input
                            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            type="text"
                            placeholder="Additional Description"
                        />
                    </div>
                    <div>
                        <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                            <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
                        </button>
                    </div>
                </form>
                {message && <div className="text-center mt-4 text-red-500">{message}</div>}
            </div>
        </div>
    );
}
