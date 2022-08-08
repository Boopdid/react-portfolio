import Title from './Title';
import React, { useState } from 'react';

const Contact = (props) => {
  const [status, setStatus]
  return (
    <>
      <div className='flex justify-center'>
        <Title title='Contact Me' />
      </div>
      <div className='text-white flex justify-center py-6'>
        <form className='w-full max-w-lg'>
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
                className=' no-resize appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
                id='message'
              ></textarea>
            </div>
          </div>
          <div className='md:flex md:items-center'>
            <div className='md:w-1/3'>
              <button
                className='shadow bg-blue-green focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                type='button'
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
