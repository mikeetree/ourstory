import React, { useState, useEffect } from 'react';
import { getStory, appendStory } from '../requests';

// TODO: send a request to 'lock' story on server when user begins writing so
//       multiple people can't write to a story at the same time

export default function StoryView({ id }) {
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
    <div>
      {loading
        ? <span>Loading...</span>
        : <ul>
            {currentStory.snippets.map((snippet, index) => (
              <li key={index}>
                <p>{snippet}</p>
              </li>
            ))}

            {submitted === false
              && <li>
                  <textarea
                    placeholder="Continue our story..."
                    cols="50"
                    rows="6"
                    value={newSnippet}
                    onChange={e => setNewSnippet(e.target.value)}
                  ></textarea>

                  <button onClick={post}>
                    Submit
                  </button>
                </li>
            }

          </ul>
      }
    </div>
  );
}
