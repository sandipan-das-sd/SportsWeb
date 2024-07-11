
// const path = require('path');
// const fs = require('fs');
// const csv = require('fast-csv');
// const MatchDetails = require('./../ConnectDB/Model/MatchDetails'); // Adjust path as needed

// // Function to clean and align the data
// const cleanData = (row) => {
//     // Implement your logic to clean and align the row data
//     // This example assumes that rows may have misaligned fields or extra spaces
//     const cleanedRow = {};
//     const headers = ["Serial No","Player", "Base Value", "T-Cups", "Matches", "Innings", "Runs", "Avg", "St Rt", "HS", "Wkts", "Eco", "Best", "Top 5 Run Getter", "Top 5 Wicket Taker", "Top 5 Economical", "NO", "Balls Faced", "OVERS", "runs con", "Catch/stumping/runout", "4s/6s", "30/50/100", "bowling S/R", "bowling avg", "player id", "MoM awards"];

//     headers.forEach((header, index) => {
//         cleanedRow[header] = row[index] ? row[index].trim() : null;
//     });

//     return cleanedRow;
// };

// exports.create = async (req, res) => {
//     console.log(req.file); // Ensure req.file contains the uploaded file information

//     const totalRecords = [];

//     try {
//         // Adjust the path to match your directory structure and file storage
//         const filePath = path.join(__dirname, '../', 'public', 'csv', req.file.filename);

//         // Read the CSV file and parse its content
//         fs.createReadStream(filePath)
//             .pipe(csv.parse({ headers: false })) // Disable headers to process rows directly
//             .on('error', error => {
//                 console.error('Error parsing CSV:', error);
//                 res.status(500).json({ error: 'Error parsing CSV file' });
//             })
//             .on('data', row => {
//                 // Clean and align the row data
//                 const cleanedRow = cleanData(row);
//                 totalRecords.push(cleanedRow); // Collect cleaned rows for batch insertion
//             })
//             .on('end', async rowCount => {
//                 console.log(`${rowCount} rows parsed successfully`);

//                 try {
//                     // Insert all records into MongoDB using Mongoose
//                     const insertedRecords = await MatchDetails.insertMany(totalRecords);

//                     // Respond with the inserted records or any other success message
//                     res.json({ insertedCount: insertedRecords.length, records: insertedRecords });
//                 } catch (err) {
//                     console.error('Error inserting records:', err);
//                     res.status(500).json({ error: 'Error inserting records into database' });
//                 }
//             });
//     } catch (error) {
//         console.error('Error processing file upload:', error);
//         res.status(500).json({ error: 'Error processing file upload' });
//     }
// };




// const path = require('path');
// const fs = require('fs');
// const csv = require('fast-csv');
// const mongoose = require('mongoose');

// // Define the Mongoose schema
// const MatchDetailsSchema = new mongoose.Schema({}, { strict: false });
// const MatchDetails = mongoose.model('MatchDetails', MatchDetailsSchema);

// // Function to dynamically clean and align the data
// const cleanData = (row, headers) => {
//     const cleanedRow = {};
//     headers.forEach((header, index) => {
//         cleanedRow[header] = row[index] ? row[index].trim() : null;
//     });
//     return cleanedRow;
// };

// exports.create = async (req, res) => {
//     console.log(req.file); // Ensure req.file contains the uploaded file information

//     const totalRecords = [];

//     try {
//         // Adjust the path to match your directory structure and file storage
//         const filePath = path.join(__dirname, '../', 'public', 'csv', req.file.filename);

//         // Read the CSV file and parse its content
//         fs.createReadStream(filePath)
//             .pipe(csv.parse({ headers: true })) // Enable headers to dynamically extract headers
//             .on('error', error => {
//                 console.error('Error parsing CSV:', error);
//                 res.status(500).json({ error: 'Error parsing CSV file' });
//             })
//             .on('data', row => {
//                 const headers = Object.keys(row); // Extract headers from the first row
//                 const cleanedRow = cleanData(Object.values(row), headers); // Clean and align the row data
//                 totalRecords.push(cleanedRow); // Collect cleaned rows for batch insertion
//             })
//             .on('end', async rowCount => {
//                 console.log(`${rowCount} rows parsed successfully`);

//                 try {
//                     // Insert all records into MongoDB using Mongoose
//                     const insertedRecords = await MatchDetails.insertMany(totalRecords);

//                     // Respond with the inserted records or any other success message
//                     res.json({ insertedCount: insertedRecords.length, records: insertedRecords });
//                 } catch (err) {
//                     console.error('Error inserting records:', err);
//                     res.status(500).json({ error: 'Error inserting records into database' });
//                 }
//             });
//     } catch (error) {
//         console.error('Error processing file upload:', error);
//         res.status(500).json({ error: 'Error processing file upload' });
//     }
// };


const path = require('path');
const fs = require('fs');
const csv = require('fast-csv');
const mongoose = require('mongoose');

// Function to generate a dynamic collection name
const generateCollectionName = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const dayName = daysOfWeek[date.getDay()];

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Convert to 12-hour format

    const timeString = `${hours}:${minutes} ${period}`;

    return `${dayName} MatchDetails ${timeString}`;
};

console.log(generateCollectionName());

exports.create = async (req, res) => {
    console.log(req.file); // Ensure req.file contains the uploaded file information

    const totalRecords = [];
    const collectionName = generateCollectionName(); // Generate a dynamic collection name

    try {
        // Define a new Mongoose model with the dynamic collection name
        const DynamicMatchDetailsSchema = new mongoose.Schema({}, { strict: false });
        const DynamicMatchDetails = mongoose.model(collectionName, DynamicMatchDetailsSchema);

        // Adjust the path to match your directory structure and file storage
        const filePath = path.join(__dirname, '../', 'public', 'csv', req.file.filename);

        // Read the CSV file and parse its content
        fs.createReadStream(filePath)
            .pipe(csv.parse({ headers: true })) // Enable headers to dynamically extract headers
            .on('error', error => {
                console.error('Error parsing CSV:', error);
                res.status(500).json({ error: 'Error parsing CSV file' });
            })
            .on('data', row => {
                const headers = Object.keys(row); // Extract headers from the first row
                const cleanedRow = {};
                headers.forEach(header => {
                    cleanedRow[header] = row[header] ? row[header].trim() : null;
                });
                totalRecords.push(cleanedRow); // Collect cleaned rows for batch insertion
            })
            .on('end', async rowCount => {
                console.log(`${rowCount} rows parsed successfully`);

                try {
                    // Insert all records into the dynamically named collection using Mongoose
                    const insertedRecords = await DynamicMatchDetails.insertMany(totalRecords);

                    // Respond with the inserted records or any other success message
                    console.log(`Inserted ${insertedRecords.length} records into collection: ${collectionName}`);
                    res.json({ insertedCount: insertedRecords.length, records: insertedRecords });
                } catch (err) {
                    console.error('Error inserting records:', err);
                    res.status(500).json({ error: 'Error inserting records into database' });
                }
            });
    } catch (error) {
        console.error('Error processing file upload:', error);
        res.status(500).json({ error: 'Error processing file upload' });
    }
};
