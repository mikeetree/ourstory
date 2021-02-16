import axios from 'axios';

const storyapi = '/story'
const promptapi = '/prompt'

function getPreviews() {
  return axios.get(`${storyapi}/previews`);
}

function getStory(id) {
  return axios.get(`${storyapi}/id/${id}`);
}

function postStory(snippet) {
  return axios.post(`${storyapi}/create`, {
    snippet,
  });
}

function appendStory(id, snippet) {
  return axios.post(`${storyapi}/id/${id}`, {
    id,
    snippet,
  });
}

export { getPreviews, getStory, postStory, appendStory };
