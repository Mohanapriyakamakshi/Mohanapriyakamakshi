import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/hello');
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {message || 'Click the button to get a message from the backend!'}
        </p>
        <button onClick={handleClick}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
