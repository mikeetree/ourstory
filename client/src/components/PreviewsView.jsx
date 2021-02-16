import React, { useState, useEffect } from 'react';
import { getPreviews } from '../requests';

export default function PreviewsView({ textLength, clickHandler }) {
  const [previews, setPreviews] = useState([]);

  useEffect(async () => {
    const previews = await getPreviews();

    if (previews) {
      setPreviews(previews.data);
    }
  }, []);

  const listItems = previews.map(preview => (
    <li key={preview.storyId} onClick={() => clickHandler(preview.storyId)}>

      <p>{preview.firstSnippet.split(' ').slice(0, textLength).join(' ')}...</p>

      <span>Length: {preview.storyLength} ID: {preview.storyId}</span>

    </li>
  ));

  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}
