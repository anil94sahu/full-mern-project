import axios from 'axios';

export const API=axios.create({localhost:'5000'});

export const logIn = (formData)=> API.post('auth/login',formData);
export const signUp=(formData)=> API.post('auth/register',formData);