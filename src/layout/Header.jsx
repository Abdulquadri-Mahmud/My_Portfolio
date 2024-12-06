import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react';
import { RiMenu4Line } from 'react-icons/ri';
import { FaRegWindowClose } from 'react-icons/fa';
import Sidebar from './sidebar';

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
              className="text-white bg-gradient-to-r from-purple-600 to-red-600 px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
        </div>
      </nav>
      <div className="md:hidden block">
        <Sidebar/>
      </div>
      {/* Mobile Menu Dialog */}
    </header>
  );
}
