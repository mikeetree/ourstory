import React, { useState, useEffect } from 'react';
import { getRandomPrompt } from '../requests';

export default function Prompt() {
  const [prompt, setPrompt] = useState('Would you like a prompt?');

  async function updatePrompt() {
    const prompt = await getRandomPrompt();
    setPrompt(`${prompt.data}`);
  }

  return (
    <div className="prompt-container">
      <span>{prompt}</span>
      <button
        className="navbutton"
        onClick={updatePrompt}
      >
        Prompt
      </button>
    </div>
  );
}
