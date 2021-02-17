import React, { useState, useEffect } from 'react';
import PreviewsView from './PreviewsView';
import StoryView from './StoryView';
import CreateView from './CreateView';

export default function App() {
  const [currentStory, setCurrentStory] = useState('');
  const [currentView, setCurrentView] = useState('previews');

  function setStoryAndView(id) {
    setCurrentStory(id);
    setCurrentView('story');
  }

  let view;

  if (currentView === 'previews') {
    view = (
      <>
        <button onClick={() => setCurrentView('create')}>Begin a story</button>

        <PreviewsView textLength={10} clickHandler={setStoryAndView} />
      </>
    );
  } else if (currentView === 'story') {
    view = <StoryView id={currentStory} />;
  } else if (currentView === 'create') {
    view = <CreateView submitHandler={setStoryAndView} />;
  }

  return (
    <div>
      {currentView !== 'previews' &&
        <div>
          <button onClick={() => setCurrentView('previews')}>
            &lt; Back
          </button>
        </div>
      }

      {view}

    </div>
  );
}
