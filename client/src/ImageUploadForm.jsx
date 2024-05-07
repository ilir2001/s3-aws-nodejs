// ImageUploadForm.js
import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (files) => {
    setSelectedFile(files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      console.log('Selected file:', selectedFile);  
      console.log('FormData:', formData);
      console.log(formData.get('file'));

      // Change the URL to match your Express server route for file upload
      const response = await axios.post('http://localhost:3333/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('File uploaded:', response.data);
      // Optionally, you can handle the response here, e.g., display a success message
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <Dropzone onDrop={handleFileSelect} accept="image/*" multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ border: '1px solid black', padding: '20px', cursor: 'pointer' }}>
            <input {...getInputProps()} />
            <p>Drag & drop an image here, or click to select one</p>
          </div>
        )}
      </Dropzone>
      {selectedFile && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default ImageUploadForm;
