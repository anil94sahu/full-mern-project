import axios from 'axios';

export const API=axios.create({localhost:'5000'});

export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`)