// const express = require('express');
// const dotenv = require('dotenv');
// const app = express();
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const connectDB = require('./ConnectDB/db');
// const router = require('./routes/routes');
// const PORT = process.env.PORT || 5800;
// dotenv.config();


// app.use(cors({
//     origin: "https://sports-client-nine.vercel.app", // explicitly allow your client origin
//     methods: "PUT,PATCH,DELETE,GET,POST",
//     credentials: true // allow credentials to be sent
// }));


// // app.use(cors({
// //     origin: "http://localhost:5173", // explicitly allow your client origin
// //     methods: "PUT,PATCH,DELETE,GET,POST",
// //     credentials: true // allow credentials to be sent
// // }));

// app.use(express.json());
// app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.json({
//         message: "Congratulations, the server is running"
//     });
// });

// // API Endpoints
// app.use('/api', router);

// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log(`Server is listening on ${PORT}`);
//     });
// }).catch(err => {
//     console.log("Error connecting with the Database", err.message);
// });


const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./ConnectDB/db');
const router = require('./routes/routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5800;

// Middleware
app.use(cors({
    origin: "https://sports-client-nine.vercel.app", // Specify the exact origin of your client app
    methods: "PUT,PATCH,DELETE,GET,POST",
    credentials: true // Allow credentials
}));

 // Enable pre-flight across all routes

app.use(express.json());
app.use(cookieParser());

// Test endpoint
app.get('/', (req, res) => {
    res.json({ message: "Congratulations, the server is running" });
});

// Database Status Endpoint
app.get('/api/db-status', async (req, res) => {
    try {
        await connectDB(); // Check if DB connection is successful
        res.json({ message: "Database connected successfully" });
    } catch (err) {
        res.status(500).json({ message: "Database connection failed", error: err.message });
    }
});

// API Endpoints
app.use('/api', router);

// Start the server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on ${PORT}`);
        });
    })
    .catch(err => {
        console.error("Error connecting with the Database", err.message);
        // If DB connection fails, we will not start the server, but we can still handle errors
    });

module.exports = app;
