// client/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import WordFrequencyTable from './components/WordFrequencyTable';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [wordData, setWordData] = useState([]);
  const [error, setError] = useState(null);
  const [topN, setTopN] = useState(10);  // State for user-defined N
  const [loading, setLoading] = useState(false);  // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setWordData([]);
    setLoading(true);  // Set loading state to true when submitting

    if (topN < 1) {
      setError('Please enter a positive number for top N words.');
      setLoading(false);
      return;
    }

    try {
      // Pass the user-defined top N value to the backend
      const response = await axios.post('http://localhost:5001/api/fetch-content', { url, topN });
      setWordData(response.data);
      setUrl(''); // Clear the URL input field
      setTopN(10); // Reset top N to default after submission
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);  // Set loading state to false once the request is complete
    }
  };

  return (
    <div className="App">
      <h1>Word Frequency Counter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <input
          type="number"
          min="1"
          placeholder="Top N Words"
          value={topN}
          onChange={(e) => setTopN(Number(e.target.value))}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get Word Frequency'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <WordFrequencyTable wordData={wordData} />
    </div>
  );
}

export default App;
