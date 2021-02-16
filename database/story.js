const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  snippets: [String],
});

const Story = mongoose.model('Story', storySchema);

function getAll() {
  return Story.find({}).exec();
}

function getById(id) {
  return Story.findById(id).exec();
}

function appendSnippet(id, snippet) {
  return Story.findByIdAndUpdate(id, { $push: { snippets: snippet } }).exec();
}

function create(snippet) {
  const story = new Story({ snippets: [snippet] });

  return story.save();
}

module.exports = {
  getAll,
  getById,
  appendSnippet,
  create,
}
