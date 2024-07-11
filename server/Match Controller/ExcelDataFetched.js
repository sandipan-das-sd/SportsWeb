const path = require('path');
const fs = require('fs');
const csv = require('fast-csv');
const MatchDetails = require('./../ConnectDB/Model/MatchDetails'); // Adjust path as needed

exports.create = async (req, res) => {
    console.log(req.file); // Ensure req.file contains the uploaded file information

    const totalRecords = [];

    try {
        // Adjust the path to match your directory structure and file storage
        const filePath = path.join(__dirname, '../', 'public', 'csv', req.file.filename);

        // Read the CSV file and parse its content
        fs.createReadStream(filePath)
            .pipe(csv.parse({ headers: true }))
            .on('error', error => {
                console.error('Error parsing CSV:', error);
                res.status(500).json({ error: 'Error parsing CSV file' });
            })
            .on('data', row => {
                // Log each row to see the parsed data (for debugging purposes)
                console.log('Parsed row:', row);
                totalRecords.push(row); // Collect rows for batch insertion
            })
            .on('end', async rowCount => {
                console.log(`${rowCount} rows parsed successfully`);

                try {
                    // Insert all records into MongoDB using Mongoose
                    const insertedRecords = await MatchDetails.insertMany(totalRecords);

                    // Respond with the inserted records or any other success message
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
