import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://img.freepik.com/free-vector/social-networking-concept-illustration_114360-6565.jpg?t=st=1709543963~exp=1709547563~hmac=030dc092dab95c3a501f41df6577ed4dcd105d1a9a9d62d97315d20e59d99587&w=1380"
                    alt="Assignment"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {loggedIn ? (
                      <div className="">
                        <NavLink
                          to={"/"}
                          className={classNames(
                            'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )}
                        >
                          Home
                        </NavLink>
                        <NavLink
                          to={"/posts"}
                          className={classNames(
                            'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )}
                        >
                          Posts
                        </NavLink>
                        <NavLink
                          to={"/newpost"}
                          className={classNames(
                            'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )}
                        >
                          Create New Post
                        </NavLink>
                        <NavLink
                          onClick={handleLogout}
                          className={classNames(
                            'text-end text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )}
                        >
                          Log Out
                        </NavLink>
                      </div>
                    ) : (
                      <div>
                        <NavLink
                          to={"/"}
                          className={classNames(
                            'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )}
                        >
                          Home
                        </NavLink>
                        <NavLink
                          to={"/login"}
                          className={classNames(
                            'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )}
                        >
                          Log In
                        </NavLink>
                        <NavLink
                          to={"/signup"}
                          className={classNames(
                            'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )}
                        >
                          Sign Up
                        </NavLink>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
  <div className="space-y-2 px-4 pt-2 pb-3">
    {loggedIn ? (
      <div className="">
        <NavLink
          to={"/"}
          className={classNames(
            'block text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md py-2 text-sm font-medium',
          )}
        >
          Home
        </NavLink>
        <NavLink
          to={"/posts"}
          className={classNames(
            'block text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md py-2 text-sm font-medium',
          )}
        >
          Posts
        </NavLink>
        <NavLink
          to={"/newpost"}
          className={classNames(
            'block text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md py-2 text-sm font-medium',
          )}
        >
          Create New Post
        </NavLink>
        <NavLink
          onClick={handleLogout}
          className={classNames(
            'block text-end text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md py-2 text-sm font-medium',
          )}
        >
          Log Out
        </NavLink>
      </div>
    ) : (
      <div>
        <NavLink
          to={"/"}
          className={classNames(
            'block text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md py-2 text-sm font-medium',
          )}
        >
          Home
        </NavLink>
        <NavLink
          to={"/login"}
          className={classNames(
            'block text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md py-2 text-sm font-medium',
          )}
        >
          Log In
        </NavLink>
        <NavLink
          to={"/signup"}
          className={classNames(
            'block text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md py-2 text-sm font-medium',
          )}
        >
          Sign Up
        </NavLink>
      </div>
    )}
  </div>
</Disclosure.Panel>

        </>
      )}
    </Disclosure>
  );
}
