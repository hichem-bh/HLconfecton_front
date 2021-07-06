import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'})

export const signIn = (formData) => API.post('/connexion', formData);
export const signUp = (formData) => API.post('/signup', formData);

export const updateUser = (id, formData) => axios.patch(`http://localhost:5000/user/${id}`, formData)
export const fetchUser = () => axios.get('http://localhost:5000/user')
export const deleteUser=(id)=>axios.delete(`http://localhost:5000/user/${id}`)

export const getArticles = () => axios.get('http://localhost:5000/articles')
export const addArticle = (newArticle) => axios.post('http://localhost:5000/articles',newArticle)

export const getCategories = () => axios.get('http://localhost:5000/categories')
export const addCategorie = (newCategorie) => axios.post('http://localhost:5000/categories',newCategorie)