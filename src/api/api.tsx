import axios from 'axios'

export const url =  'https://api.emailjs.com/api/v1.0/email'

const api =axios.create({
  baseURL: url,
});


export default api
