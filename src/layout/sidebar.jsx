import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu4Line } from 'react-icons/ri';
import { FaRegWindowClose } from 'react-icons/fa';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/img/Myresume.pdf', download: true }
  ];

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-2 text-black bg-white z-50 rounded-md shadow-md hover:bg-gray-200 transition"
      >
        {sidebarOpen ? <FaRegWindowClose className="text-2xl" /> : <RiMenu4Line className="text-2xl" />}
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm bg-white text-gray-800 transform 
          ${ sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-xl`}
      >
        {/* Sidebar Header */}
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">Adeyemi<span className="text-blue-600">CODE</span></h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-700 p-1 rounded-md hover:bg-gray-100 transition"
          >
            <FaRegWindowClose className="text-2xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 space-y-4 font-semibold flex flex-col px-4">
          {navigation.map((item) =>
            item.download ? (
              <a key={item.name} href={item.path} download className="text-black bg-slate-200 px-3 py-2 rounded hover:underline">
                {item.name}
              </a>
            ) : (
              <Link key={item.name} to={item.path} className="text-black hover:underline bg-slate-200 px-3 py-2 rounded">
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Backdrop */}
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity duration-300"/>
      )}
    </div>
  );
};

export default Sidebar;
