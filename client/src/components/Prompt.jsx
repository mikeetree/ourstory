import React, { useState, useEffect } from 'react';
import { getRandomPrompt } from '../requests';

export default function Prompt() {
  const [prompt, setPrompt] = useState('Would you like a prompt?');

  async function updatePrompt() {
    const prompt = await getRandomPrompt();
    setPrompt(`${prompt.data}`);
  }

  return (
    <div>
      <span>{prompt}</span>
      <button onClick={updatePrompt}>Prompt</button>
    </div>
  );
}
