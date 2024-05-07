# File Upload to AWS S3 with Node.js and React.js

This project demonstrates a simple web application built with Node.js for the backend and React.js for the frontend. It allows users to upload files, which are then stored in AWS S3.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- AWS account with access to S3
- React.js (if you want to work on the frontend)

## Getting Started

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/s3-aws-nodejs.git
    ```

2. Navigate into the project directory:

    ```bash
    cd s3-aws-nodejs
    ```

3. Install dependencies for both backend (Node.js) and frontend (React.js):

    ```bash
    cd server
    npm install

    cd ../client
    npm install
    ```

## Configuring AWS S3

1. Log in to your AWS account and navigate to the S3 console.

2. Create a new S3 bucket to store your files.

3. Configure access permissions for the bucket. Ensure your IAM user or role has the necessary permissions to upload files to the bucket.

4. Copy the access key ID, secret access key, and bucket name. You'll need these for configuring your Node.js application.

## Configuring the Backend

1. In the `backend` directory, create a `.env` file and add the following variables:

    ```plaintext
    AWS_ACCESS_KEY=your-access-key-id
    AWS_SECRET_ACCESS_KEY=your-secret-access-key
    AWS_BUCKET_NAME=your-bucket-name
    ```

2. Replace `your-access-key-id`, `your-secret-access-key`, and `your-bucket-name` with your AWS credentials and bucket name.

## Running the Application

1. Start the backend server (Node.js):

    ```bash
    cd server
    npm run dev
    ```

   This will start the backend server on `http://localhost:5000`.

2. Start the frontend development server (React.js):

    ```bash
    cd client
    npm start
    ```

   This will start the frontend server on `http://localhost:3000`. Open this URL in your browser to view the application.

## Usage

1. In the web application, you'll see an option to upload files.

2. Click on the "Choose File" button and select the file you want to upload.

3. Click on the "Upload" button to upload the selected file to AWS S3.

4. Once the upload is complete, you should see a success message.

## Contributing

Contributions are welcome! If you find any issues or would like to contribute enhancements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
