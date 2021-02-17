const express = require('express');
const Story = require('../../database/story');

const api = express.Router();

api.get('/previews', async (req, res) => {
  const stories = await Story.getAll();
  const previews = [];

  for (story of stories) {
    previews.push({
      storyId: story._id,
      firstSnippet: story.snippets[0],
      storyLength: story.snippets.length,
    });
  }

  res.send(previews);
});

api.get('/id/:storyId', async (req, res) => {
  try {
    const story = await Story.getById(req.params.storyId);
    if (story) {
      res.status(200).send({
        id: story._id,
        snippets: story.snippets,
      });
    } else {
      res.status(404).send('No story with that id.');
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

api.post('/create', async (req, res) => {
  try {
    const story = await Story.create(req.body.snippet);
    res.status(201).send(story._id);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

api.post('/id/:storyId', async (req, res) => {
  try {
    await Story.appendSnippet(
      req.body.id,
      req.body.snippet
    );

    const story = await Story.getById(req.params.storyId);

    if (story) {
      res.status(200).send({
        id: story._id,
        snippets: story.snippets,
      });
    } else {
      res.status(404).send('No story with that id.');
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

module.exports = api;
