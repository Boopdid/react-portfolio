import Title from './Title';
import React, { useState } from 'react';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/38e8aed0-1c09-11ed-9730-af3c511c5e41';

const Contact = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className='flex justify-center'>
          <Title title='Contact Me' />
        </div>
        <div className='text-white text-center py-6'>
          <div className='text-2xl'>Thank you!</div>
          <div className='text-md'>We'll be in touch soon.</div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className='flex justify-center'>
        <Title title='Contact Me' />
      </div>
      <div className='text-white flex justify-center py-6'>
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method='POST'
          className='w-full max-w-lg'
        >
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide  text-xs font-bold mb-2'
                for='grid-first-name'
              >
                First Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='grid-first-name'
                type='text'
                name='first-name'
                placeholder='Jane'
              />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label
                className='block uppercase tracking-wide  text-xs font-bold mb-2'
                for='grid-last-name'
              >
                Last Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-last-name'
                type='text'
                name='last-name'
                placeholder='Doe'
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                className='block uppercase tracking-wide  text-xs font-bold mb-2'
                for='grid-password'
              >
                E-mail
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='email'
                type='email'
                placeholder='Email'
                name='email'
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                className='block uppercase tracking-wide  text-xs font-bold mb-2'
                for='grid-password'
              >
                Message
              </label>
              <textarea
                placeholder='Your message'
                name='message'
                className=' no-resize appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
                id='message'
              ></textarea>
            </div>
          </div>
          <div className='md:flex md:items-center'>
            <div className='md:w-1/3'>
              <button
                className='shadow bg-blue-green focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                type='submit'
              >
                Send
              </button>
            </div>
            <div className='md:w-2/3'></div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
