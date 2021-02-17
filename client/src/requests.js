import axios from 'axios';

const storyapi = '/story'
const promptapi = '/prompt'

export function getPreviews() {
  return axios.get(`${storyapi}/previews`);
}

export function getStory(id) {
  return axios.get(`${storyapi}/id/${id}`);
}

export function postStory(snippet) {
  return axios.post(`${storyapi}/create`, {
    snippet,
  });
}

export function appendStory(id, snippet) {
  return axios.post(`${storyapi}/id/${id}`, {
    id,
    snippet,
  });
}

export function getRandomPrompt() {
  return axios.get(`${promptapi}/random`);
}
