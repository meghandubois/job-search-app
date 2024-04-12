import React, { useState } from "react";
import SubscribeForm from "./components/SubscribeForm";

function App() {
  const [url, setUrl] = useState("");
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [searchCount, setSearchCount] = useState(null); // New state for count

  const handleSubmit = async (event) => {
    console.log("its working");
    event.preventDefault();

    console.log("URL:", url);
    console.log("Keyword:", keyword);

    try {
      const response = await fetch("http://localhost/jobSearchApp/search.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, keyword }),
      });

      const data = await response.json();

      setSearchResult(data.message);
      setSearchCount(data.count); // Set the count received from the backend
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubscribe = async (email) => {
    try {
      // Send the email address to the backend
      const response = await fetch(
        "http://localhost/jobSearchApp/subscribe.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      // Handle response from the backend
      const data = await response.json();
      console.log(data); // Log response for debugging
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

      <h2>Subscribe to Notifications</h2>
      <SubscribeForm onSubmit={handleSubscribe} />
    </div>
  );
}

export default App;
