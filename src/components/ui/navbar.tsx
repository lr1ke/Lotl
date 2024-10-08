

import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <img src="/werkstatt.jpg" alt="icon" className="h-8 w-8" />
        </div>
        <div className="space-x-4 flex items-center">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/lot-y" className="text-gray-300 hover:text-white">Lot-y</a>
          <a href="/lot-i" className="text-gray-300 hover:text-white">Lot-i</a>
          <a href="/echoing" className="text-gray-300 hover:text-white">Echoing</a>
        </div>
      </div>
    </nav>
  );
}