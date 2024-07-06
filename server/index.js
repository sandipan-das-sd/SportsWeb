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
    origin: "https://sports-client-nine.vercel.app", // explicitly allow your client origin
    methods: "PUT,PATCH,DELETE,GET,POST",
    credentials: true // allow credentials to be sent
}));

app.use(express.json());
app.use(cookieParser());

// Test endpoint
app.get('/', (req, res) => {
    res.json({ message: "Congratulations, the server is running" });
});

// API Endpoints
connectDB().then(() => {
    app.use('/api', router);
    app.get('/db-status', (req, res) => {
        res.json({ message: "Database connected successfully" });
    });
}).catch(err => {
    app.use('/api', (req, res) => {
        res.status(500).json({ message: "Database connection failed", error: err.message });
    });
    app.get('/db-status', (req, res) => {
        res.status(500).json({ message: "Database connection failed", error: err.message });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

module.exports = app;
