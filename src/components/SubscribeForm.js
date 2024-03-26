// SubscribeForm.js

import React, { useState } from 'react';

function SubscribeForm({ onSubmit }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your email address:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default SubscribeForm;
