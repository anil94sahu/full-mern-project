import axios from 'axios';

export const API=axios.create({localhost:'5000'});

export const getUser = userId =>{
    API.get(`/user/${userId}`)
}

export const updateUser = (id, formData)=>{
    API.put(`/user/${id}`, formData )
}