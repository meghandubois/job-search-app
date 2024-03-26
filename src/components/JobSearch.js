import React, { useState } from 'react';
import axios from 'axios';

function JobSearch() {
  const [url, setUrl] = useState('');
  const [keyword, setKeyword] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('/search', { url, keyword });
      setSearchResult(response.data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Job Search</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Enter Keyword:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
      <p>{searchResult}</p>
    </div>
  );
}

export default JobSearch;
