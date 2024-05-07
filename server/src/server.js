// server.js
const express = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT; // Use the PORT environment variable if available, otherwise use port 3000
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder for uploaded files
const fs = require('fs');

app.use(cors());

// Configure AWS SDK
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

// Create S3 instance
const s3 = new AWS.S3();

// Define route to fetch objects from S3
app.get('/objects', (req, res) => {
    const bucketParams = {
        Bucket: process.env.AWS_BUCKET_NAME
    };

    // List objects in the bucket
    s3.listObjects(bucketParams, (err, data) => {
        if (err) {
            console.error('Error fetching objects from S3:', err);
            return res.status(500).send('Error fetching objects from S3');
        }

        // Extract object keys from the response
        const objectKeys = data.Contents.map(object => object.Key);

        // Construct URLs for the images
        const imageUrls = objectKeys.map(key => {
            // Assuming your S3 bucket is publicly accessible
            return `https://s3.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${key}`;
        });

        res.json(imageUrls);
    });
});


app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        console.log('Received file:', req.file);

        const readStream = fs.createReadStream(req.file.path);
        
        const uploadParams = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: req.file.originalname, // Use original filename
            Body: readStream // Use file stream for uploading
        };

        const data = await s3.upload(uploadParams).promise();
        console.log('File uploaded successfully:', data.Location);

        // Delete the temporary file created by Multer
        fs.unlinkSync(req.file.path);

        res.status(200).send(data.Location);
    } catch (err) {
        console.error('Error uploading file to S3:', err);
        res.status(500).send('Error uploading file to S3');
    }
});




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
