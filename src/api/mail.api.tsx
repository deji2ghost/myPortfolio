import emailjs from '@emailjs/browser';
import api from './api';



export const sendMail = async ({name,email,message}:{name:string,email:string,message:string})=>{

  const form:any={
    service_id: process.env.REACT_APP_SERVICE_ID,
    template_id: process.env.REACT_APP_TEMPLATE_ID,
    user_id: process.env.REACT_APP_PUBLIC_KEY, 
    template_params:{
      name,email,message
    }
  }
  const resp = await api.post('/send',form)
  return resp.data
}