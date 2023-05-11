import { useState } from 'react';

export default function Home() {
  // Define a state variable to store the image file
  const [image, setImage] = useState(null);

  // Define a function to handle the file input change event
  function handleFileChange(event) {
    // Get the selected file from the event target
    const file = event.target.files[0];
    // Set the image state variable to the file
    setImage(file);
  }

  // Define a function to handle the form submit event
  async function handleFileUpload(event) {
    // Prevent the default browser behavior of reloading the page
    event.preventDefault();
    // Create a new FormData object to store the image file and metadata
    const formData = new FormData();
    // Append the image file to the FormData object with the key 'file'
    formData.append('file', image);
    // Append the upload preset to the FormData object with the key 'upload_preset'
    // The upload preset is a predefined set of options for uploading images to Cloudinary
    // You can create one in the Cloudinary dashboard under Settings > Upload > Upload presets
    formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    // Use the fetch API to send a POST request to the Cloudinary upload endpoint
    // Replace <cloudname> with your own Cloudinary cloud name
    // https://api.cloudinary.com/v1_1/<cloudname>/upload
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
    // Parse the response as JSON and log it to the console
    const json = await response.json();
    console.log(json);
  }

  return (
    <main>
      <h1>Image Upload</h1>
      <form onSubmit={handleFileUpload}>
        <p>
          <label htmlFor="avatar">Please choose an image</label>
        </p>
        <input type="file" id="avatar" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </main>
  );
}
