import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FileUpload.css'; // Custom CSS for additional styling if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    validateFile(selectedFile);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files[0];
    validateFile(selectedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const validateFile = (selectedFile) => {
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please upload a valid PDF file.');
    }
  };

  const handleDelete = () => {
    setFile(null);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">File Upload</h5>
        <p className="card-text text-muted">Supported file types: pdf</p>
        {!file ? (
          <div
            className="upload-area border p-4 text-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            aria-label="File upload area"
          >
            <p>Drag and drop your files here to upload</p>
            <p>OR</p>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="fileInput"
            />
            <label htmlFor="fileInput" className="btn btn-outline-secondary">
              Browse Files
            </label>
          </div>
        ) : (
          <div className="uploaded-file border p-4 d-flex justify-content-between align-items-center">
            <div>
              <strong>{file.name}</strong>
              <p className="text-success mb-0">File uploaded successfully</p>
            </div>
            <FontAwesomeIcon icon={faTrashAlt} className="delete-icon" onClick={handleDelete} />
          </div>
        )}
        {error && <div className="text-danger mt-3">{error}</div>}
      </div>
    </div>
  );
}

export default FileUpload;
