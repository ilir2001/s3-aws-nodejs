import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Fetch image URLs from the backend
    axios.get('http://localhost:3300/objects')
      .then(response => {
        setImageUrls(response.data);
      })
      .catch(error => {
        console.error('Error fetching image URLs:', error);
      });
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-container">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
