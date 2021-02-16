import React, { useState, useEffect } from 'react';
import { postStory } from '../requests';

export default function CreateView({ submitHandler }) {
  const [newSnippet, setNewSnippet] = useState('');

  async function post() {
    const story = await postStory(newSnippet);
    submitHandler(story.data);
  }

  return (
    <div>
      <textarea
        placeholder="Begin our story..."
        cols="50"
        rows="6"
        value={newSnippet}
        onChange={e => setNewSnippet(e.target.value)}
      ></textarea>

      <button onClick={post}>
        Submit
      </button>
    </div>
  );
}
