import React from 'react';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact-me' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navigation = (props) => {
  const location = useLocation();

  return (
    <Disclosure as='nav' className='bg-prussian-blue'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='hidden sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href == location.pathname
                            ? 'text-selective-yellow'
                            : 'text-gray-300 hover:text-selective-yellow',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={
                          item.href == location.pathname ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.href == location.pathname
                      ? 'text-selective-yellow'
                      : 'text-gray-300 hover:text-selective-yellow ',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={
                    item.href == location.pathname ? 'page' : undefined
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;