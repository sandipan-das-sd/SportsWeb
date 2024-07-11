const path = require('path');
const fs = require('fs');
const csvjson = require('csvjson');
const MatchDetails = require('./../ConnectDB/Model/MatchDetails'); // Adjust path as needed

const uploadAndProcessCsv = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded.' });
        }

        // Access the uploaded file
        const uploadedFile = req.file;
        console.log('Uploaded File:', JSON.stringify(uploadedFile, null, 2));

        // Form the correct file path
        const csvFilePath = path.resolve(__dirname, '..', 'uploads', uploadedFile.filename);
        console.log('CSV File Path:', csvFilePath);

        // Verify if the file exists at the path
        if (!fs.existsSync(csvFilePath)) {
            throw new Error(`File not found at path: ${csvFilePath}`);
        }

        // Read the CSV file
        const csvData = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
        console.log('CSV Data:', csvData);

        // Convert CSV to JSON
        const jsonArray = csvjson.toObject(csvData);
        console.log('Parsed JSON Array:', jsonArray);

        // Update MongoDB with new data
        const bulkOps = jsonArray.map(data => ({
            updateOne: {
                filter: { _id: data._id }, // Assuming _id is the unique identifier
                update: { $set: data }, // Update all fields from the JSON object
                upsert: true
            }
        }));

        const bulkWriteResult = await MatchDetails.bulkWrite(bulkOps);

        // Delete uploaded file after processing
        fs.unlinkSync(csvFilePath);

        // Respond with JSON
        res.status(200).json({
            message: 'File uploaded and data updated successfully',
            filename: uploadedFile.originalname,
            result: bulkWriteResult,
            parsedData: jsonArray // Include parsed data in response
        });
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({
            error: 'An error occurred',
            errorDetails: error.message
        });
    }
};

// Export the function
module.exports = { uploadAndProcessCsv };
