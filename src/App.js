import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("URL:", url);
    console.log("Keyword:", keyword);

    try {
      const response = await fetch("http://localhost/search.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, keyword }),
      });

      const data = await response.json();

      setSearchResult(data.message);
    } catch (error) {
      console.error("Error:", error);
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

export default App;
