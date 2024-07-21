import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await fetch('https://welcomeworld-cbfjdkd6gegyhwdf.eastus-01.azurewebsites.net/');
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error('Error fetching the message:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchMessage}
        >
          Open
        </button>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </div>
  );
}

export default App;
