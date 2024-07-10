// // const express = require('express');
// const mongoose = require('mongoose');
// const csvjson = require('csvjson');
// const { Schema } = mongoose;
// const app = express();
// const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');

// // Define your MongoDB schema
// const MatchDetailsSchema = new Schema({}, { strict: false });
// const MatchDetails = mongoose.model('MatchDetails', MatchDetailsSchema);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(fileUpload());

// app.post('/upload', async (req, res) => {
//     try {
//         if (!req.files || Object.keys(req.files).length === 0) {
//             return res.status(400).send('No files were uploaded.');
//         }

//         // Access the file
//         let uploadedFile = req.files.file;

//         // Upload the file to Cloudinary
//         const result = await cloudinary.uploader.upload(uploadedFile.tempFilePath, { resource_type: 'raw' });

//         // Read the CSV file from Cloudinary URL
//         const response = await fetch(result.secure_url);
//         const csvData = await response.text();
//         const jsonArray = csvjson.toObject(csvData);

//         // Update MongoDB with new data
//         const bulkOps = jsonArray.map(data => {
//             return {
//                 updateOne: {
//                     filter: { _id: data._id }, // Assuming _id is the unique identifier
//                     update: { $set: data },
//                     upsert: true
//                 }
//             };
//         });

//         await MatchDetails.bulkWrite(bulkOps);

//         res.status(200).json({
//             message: 'File uploaded and data updated successfully',
//             cloudinary_url: result.secure_url
//         });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred' });
//     }
// });

// // Connect to MongoDB and start the server
// mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         app.listen(3000, () => {
//             console.log('Server is running on port 3000');
//         });
//     })
//     .catch(err => {
//         console.error('Database connection error', err);
//     });
