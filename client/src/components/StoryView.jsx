import React, { useState, useEffect } from 'react';
import { getStory, appendStory } from '../requests';
import Prompt from './Prompt';

// TODO: send a request to 'lock' story on server when user begins writing so
//       multiple people can't write to a story at the same time

export default function StoryView({ id, canSubmit = true }) {
  const [currentStory, setCurrentStory] = useState({});
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [newSnippet, setNewSnippet] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(async () => {
    const story = await getStory(id);

    if (story) {
      setCurrentStory(story.data);
      setLoading(false);
    }
  }, []);

  async function post() {
    const updatedStory = await appendStory(currentStory.id, newSnippet);
    if (updatedStory) {
      setCurrentStory(updatedStory.data);
    }
    setSubmitted(true);
  }

  return (
    <div className="story-container">
      {!loading &&
        <ul>
          {currentStory.snippets.map((snippet, index) => (
            <li
              className="story-listitem"
              key={index}
            >
              <p>{snippet}</p>
            </li>
          ))}
        </ul>
      }
      {submitted === false && canSubmit
        && <>
             <textarea
               className="story-textarea"
               placeholder="Continue our story..."
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
           </>
      }
    </div>
  );
}
