import axios from 'axios';

// export const baseURL = 'http://localhost:5000/api';
export const baseURL = 'https://backb.genicminds.com/api';

const api = axios.create({
  baseURL,
});

export default api;