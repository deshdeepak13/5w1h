import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-lg sticky top-0 w-full z-50 backdrop-blur-md bg-opacity-80">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <span className="text-black bg-white p-1">5w1h</span> GRAPH
        </h1>
        <ul className="flex gap-4">
          <li><Link to="/hero" className="hover:underline">All Events</Link></li>
          {/* <li><Link to="/category/world" className="hover:underline">Categories</Link></li>
          <li><Link to="/event/upcoming" className="hover:underline">Events</Link></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
