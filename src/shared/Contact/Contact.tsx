import React, { useState } from 'react'
import { ContactContainer } from './Contact.style'
import InputWithLabel from '../InputWithLabel/InputWithLabel'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Nav from '../Nav/Nav';
import Line from '../Line/Line';
import UnderLineSpan from '../UnderLineSpan/UnderLineSpan';
import Button from '../Button/Button';
import { useMutation } from '@tanstack/react-query';
import { sendMail } from '../../api/mail.api';
import { toast } from 'react-hot-toast';
import Preloader from '../Preloader/Preloader';


const schema = yup.object({
  email:yup.string().email().required(),
  name:yup.string().required(),
  message:yup.string().required(),
})
type ContactFormType = yup.InferType<typeof schema>


const Contact = ()=>{
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '83080b80-5dbd-4d75-9ab2-8d9609d77377');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    }).then((res) => res.json());
    setIsLoading(true)

    if (res.success) {
      console.log('Success', res);
      toast.success('Markothedev will get back to you soon')
      setIsLoading(false)
    }else{
      toast.error('Something seem to be wrong with your network, please try again my oga!.')
      setIsLoading(false)
    }
    reset()
  };
  
  const { 
    register,setValue, 
    handleSubmit,control,
    formState: { errors },reset
  } = useForm<ContactFormType>({ resolver: yupResolver(schema) });

  return (
    <ContactContainer>
      <div className='contact-form-main'>
        <div className='contact_content_pane'>
          <h1>Contact</h1>
          <p>
        I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <Preloader loading={isLoading} />
        <form 
          onSubmit={onSubmit}
        >
          <InputWithLabel 
            label='NAME'
            register={register('name')}
            errorMessage={errors.name?.message}
          />
          <br />
          <br />

          <InputWithLabel 
            label='EMAIL'
            register={register('email')}
            errorMessage={errors.email?.message}
          />
          <br />
          <br />
          <InputWithLabel 
            label='MESSAGE'
            register={register('message')}
            errorMessage={errors.message?.message}
            is_textarea={true}
          />
          <br /><br />
          <Button onClick={() => reset()} style={{'marginLeft':'auto','display':'block'}} >SEND MESSAGE</Button>
          <br /><br /><br />
        </form>
      </div>
      <Line />
      <Nav />

    </ContactContainer>
  )
}

export default Contact