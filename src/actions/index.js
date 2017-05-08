import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'derekliuliu';


export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);
  // const request = axios.get(`${ROOT_URL}/posts`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
