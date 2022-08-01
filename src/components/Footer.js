import React from 'react';

let navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/peter-vrutneski/',
    icon: (props) => (
      <i className='text-xl md:text-lg text-white hover:text-selective-yellow fa-brands fa-linkedin'></i>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Boopdid',
    icon: (props) => (
      <i className='text-xl md:text-lg text-white hover:text-selective-yellow fa-brands fa-github'></i>
    ),
  },
];

const Footer = () => {
  return (
    <footer>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:items-center md:jusifiy-between lg:px-8'>
        <div className='mt-8 md:mt-0 flex justify-center space-x-6 md:order-2'>
          {navigation.map((item) => (
            <a key={item.name} href={item.href}>
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hiddem='true' />
            </a>
          ))}
        </div>
        <div className='md:order-1 md:flex-grow  md:text-left'>
          <p className='mt-2 text-center text-sm text-gray-400'>
            &copy; 2022 Boopdid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
