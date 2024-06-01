import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileUpload from './components/FileUpload';
import PromptInput from './components/PromptInput';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
    <Navbar/>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <FileUpload />
          <PromptInput />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
