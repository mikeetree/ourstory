import React, { useState, useEffect } from 'react';
import { postStory } from '../requests';
import Prompt from './Prompt';

export default function CreateView({ submitHandler }) {
  const [newSnippet, setNewSnippet] = useState('');

  async function post() {
    const story = await postStory(newSnippet);
    submitHandler(story.data, true);
  }

  return (
    <div className="create-container">
      <textarea
        className="create-textarea"
        placeholder="Begin our story..."
        cols="50"
        rows="6"
        value={newSnippet}
        onChange={e => setNewSnippet(e.target.value)}
      ></textarea>

      <button
        className="navbutton"
        onClick={post}
      >
        Submit
      </button>

      <Prompt />
    </div>
  );
}
