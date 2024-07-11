
const path = require('path');
const fs = require('fs');
const csv = require('fast-csv');
const MatchDetails = require('./../ConnectDB/Model/MatchDetails'); // Adjust path as needed

// Function to clean and align the data
const cleanData = (row) => {
    // Implement your logic to clean and align the row data
    // This example assumes that rows may have misaligned fields or extra spaces
    const cleanedRow = {};
    const headers = ["Serial No","Player", "Base Value", "T-Cups", "Matches", "Innings", "Runs", "Avg", "St Rt", "HS", "Wkts", "Eco", "Best", "Top 5 Run Getter", "Top 5 Wicket Taker", "Top 5 Economical", "NO", "Balls Faced", "OVERS", "runs con", "Catch/stumping/runout", "4s/6s", "30/50/100", "bowling S/R", "bowling avg", "player id", "MoM awards"];

    headers.forEach((header, index) => {
        cleanedRow[header] = row[index] ? row[index].trim() : null;
    });

    return cleanedRow;
};

exports.create = async (req, res) => {
    console.log(req.file); // Ensure req.file contains the uploaded file information

    const totalRecords = [];

    try {
        // Adjust the path to match your directory structure and file storage
        const filePath = path.join(__dirname, '../', 'public', 'csv', req.file.filename);

        // Read the CSV file and parse its content
        fs.createReadStream(filePath)
            .pipe(csv.parse({ headers: false })) // Disable headers to process rows directly
            .on('error', error => {
                console.error('Error parsing CSV:', error);
                res.status(500).json({ error: 'Error parsing CSV file' });
            })
            .on('data', row => {
                // Clean and align the row data
                const cleanedRow = cleanData(row);
                totalRecords.push(cleanedRow); // Collect cleaned rows for batch insertion
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
