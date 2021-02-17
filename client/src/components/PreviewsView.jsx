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

  const listItems = previews.reverse().map(preview => (
    <li
      key={preview.storyId}
      className="preview-listitem"
      onClick={() => clickHandler(preview.storyId)}
    >

      <span>{preview.firstSnippet.split(' ').slice(0, textLength).join(' ')}...</span>

      <span className="preview-length">{preview.storyLength}</span>

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
