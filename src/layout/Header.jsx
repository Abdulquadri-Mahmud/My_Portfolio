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
  { name: 'Resume', path: '/img/Myresume.pdf', download: true }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="shadow-sm sticky top-0 z-50 bg-white text-gray-900 overflow-hidden">
      <nav aria-label="Global" className="flex items-center justify-between px-3 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-2xl font-bold text-black hover:text-black transition">
            Adeyemi<span className="text-gray-800">CODE</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) =>
            item.download ? (
              <a
                key={item.name}
                href={item.path}
                download
                className="text-black hover:underline"
              >
                {item.name}
              </a>
            ) : (
              <Link key={item.name} to={item.path} className="text-black hover:underline">
                {item.name}
              </Link>
            )
          )}

        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/contact" className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-black transition"> 
              Hire Me
            </Link>
          </div>
        </div>
      {/* Mobile Sidebar */}
      <div className="md:hidden block">
        <Sidebar />
      </div>
      </nav>

    </header>

  );
}
