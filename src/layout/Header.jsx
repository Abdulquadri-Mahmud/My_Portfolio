import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react';
import { RiMenu4Line } from 'react-icons/ri';
import { FaRegWindowClose } from 'react-icons/fa';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  { name: 'Resume', path: '/resume' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="shadow-md sticky top-0 z-50 bg-black text-white">
      <nav aria-label="Global" className="flex items-center justify-between p-6 max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          {/* Replace with logo image if needed */}
          <Link
            to="/"
            className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600 text-white transition duration-300 ease-in-out transform hover:scale-110"
          >
            AdeyemiCODE
          </Link>

        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg font-semibold text-white hover:text-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* User Actions */}
        <div className="flex gap-6 items-center">
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="text-white bg-purple-600 px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2.5 text-white rounded-md focus:outline-none transition transform hover:scale-105"
            >
              <RiMenu4Line className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform transform duration-300 ease-in-out translate-x-full sm:translate-x-0">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between">
            <Link to="/" className="font-extrabold text-2xl text-white">
              AdeyemiCODE
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <FaRegWindowClose className="text-3xl" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 text-base font-semibold text-white hover:bg-indigo-50 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Actions */}
            <div className="mt-6 space-y-4">
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-semibold text-white hover:bg-gray-50 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
              >
                Contact Me
              </Link>
              <Link
                to="/resume"
                className="block px-3 py-2 text-base font-semibold text-white hover:bg-gray-50 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
              >
                Resume
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
