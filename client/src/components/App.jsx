import React, { useState, useEffect } from 'react';
import PreviewsView from './PreviewsView';
import StoryView from './StoryView';
import CreateView from './CreateView';
import TitleView from './TitleView';

export default function App() {
  const [currentStory, setCurrentStory] = useState('');
  const [currentView, setCurrentView] = useState('title');

  function setStoryAndView(id, submitted=false) {
    setCurrentStory(id);
    if (submitted) {
      setCurrentView('story-submitted');
    } else {
      setCurrentView('story');
    }
  }

  let view;
  let back = (<button className="navbutton" onClick={() => setCurrentView('previews')}>
               Back
             </button>);

  if (currentView === 'previews') {
    view = <PreviewsView textLength={15} clickHandler={setStoryAndView} />;
    back = (<button className="navbutton" onClick={() => setCurrentView('create')}>
             New Story
           </button>);
  } else if (currentView === 'story') {
    view = <StoryView id={currentStory} />;
  } else if (currentView === 'story-submitted') {
    view = <StoryView id={currentStory} canSubmit={false} />;
  } else if (currentView === 'create') {
    view = <CreateView submitHandler={setStoryAndView} />;
  } else if (currentView === 'title') {
    view = <TitleView clickHandler={() => setCurrentView('previews')} />
    back = <div></div>;
  }

  return (
    <div className="app-container">
      {back}

      {view}
    </div>
  );
}
