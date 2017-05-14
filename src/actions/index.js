import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'derekliuliu';


export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);
  // const request = axios.get(`${ROOT_URL}/posts`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}
