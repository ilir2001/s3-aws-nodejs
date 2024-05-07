// App.js
import React from 'react';
import ImageUploadForm from './ImageUploadForm';
import ImageGallery from './ImageGallery'; // Import your ImageGallery component


const App = () => {
  return (
    <div>
      <h1>My Image Gallery App</h1>
      <ImageGallery /> {/* Render the ImageGallery component */}
      <h1>Image Upload App</h1>
      <ImageUploadForm />
    </div>
  );
};

export default App;
