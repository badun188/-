import React, { useState } from 'react';
import axios from 'axios';

const Import = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post('http://localhost:5000/upload', formData, { withCredentials: true });
      setMessage(response.data.message);
    } catch (err) {
      setMessage('File upload failed');
    }
  };

  return (
    <div className="import-container">
      <h2>Import Project List</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept=".xlsx,.xls" required />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Import;