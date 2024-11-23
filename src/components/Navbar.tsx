'use client'; // Add this line at the top

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import Link from 'next/link';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [isSearchSidebarOpen, setIsSearchSidebarOpen] = useState(false);
  // Dummy cart data
const cartItems = [
    { id: 1, name: 'Book 1', price: 10.99, quantity: 2 },
    { id: 2, name: 'Book 2', price: 15.49, quantity: 1 },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-around lg:justify-around items-center w-100 h-20  shadow-xl bg-white">
        <div>
          {/* Toggle Sidebar */}
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            className="lg:hidden w-8 ml-2 mr-2 cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
        <div>
          <Link href={"/"}>
          <img className="h-14 ml-2" src="/img/logo/Ababeel (4).png" alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:flex justify-between lg:gap-4 xl:gap-8 text-red-950 font-bold text-lg">
          <Link className="navlinks" href="/">Home</Link>
          <Link className="navlinks" href="/books">Books</Link>
          <Link className="navlinks" href="">Bookmarks</Link>
          <Link className="navlinks" href="/request-book" >Request a Book </Link>
          <Link className="navlinks" href="">Contact us</Link>
        </div>
        <div>
          <div className="flex md:justify-between items-center gap-10 ml-10">
          <FontAwesomeIcon
              icon={faSearch}
              size='xl'
              className=" text-red-800 hover:text-red-600 cursor-pointer"
              onClick={() => setIsSearchSidebarOpen(!isSearchSidebarOpen)}
            />
            <FontAwesomeIcon
            size='xl'
              icon={faShoppingCart}
              className="text-red-800 hover:text-red-600 cursor-pointer"
              onClick={() => setIsCartSidebarOpen(!isCartSidebarOpen)}
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-lg p-4 z-50">
          <button
            className="absolute top-4 right-4 mt-4 text-red-800 text-2xl font-bold mb-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            X
          </button>
          <Link href={"/"}>
          <img src="/img/logo/Ababeel (4).png" alt="logo" className='w-32 py-1 mb-10 ml-2' />
          </Link>
          <ul className="space-y-8 text-red-950 font-bold">
            <li><Link className='navlinks' href="/">Home</Link></li>
            <li><Link className='navlinks' href="/books">Books</Link></li>
            <li><Link className='navlinks' href="#">Bookmarks</Link></li>
            <li><Link className='navlinks' href="/request-book">Request a Book</Link></li>
            <li><Link className='navlinks' href="#">Contact us</Link></li>
          </ul>
        </div>
      )}

      {/* Overlay to close sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
        
        
        )}

      {/* Sidebar for Cart */}
      {isCartSidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-80 bg-gray-100 shadow-lg p-4 z-50">
          <button
            className="absolute top-4 right-4 text-gray-800 text-2xl font-bold"
            onClick={() => setIsCartSidebarOpen(false)}
          >
            &times;
          </button>
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                </div>
                <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <button className="bg-red-800 text-white px-4 py-2 rounded mt-4 hover:bg-red-600">
              Checkout
            </button>
            <br />
            <button className="bg-red-800 text-white px-4 py-2 rounded mt-4 hover:bg-red-600" 
            onClick={() => setIsCartSidebarOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* Overlay to close sidebars */}
      {(isSidebarOpen || isCartSidebarOpen) && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => {
            setIsSidebarOpen(false);
            setIsCartSidebarOpen(false);
          }}
        />
      )}
    
      {/* Search Sidebar */}
      {isSearchSidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 z-50">
          <button
            className="absolute top-4 right-4 text-gray-800 text-2xl font-bold"
            onClick={() => setIsSearchSidebarOpen(false)}
          >
            &times;
          </button>
          <h2 className="text-xl font-bold mb-6">Search</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Search for books..."
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            <button className="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Search
            </button>
          </div>
        </div>
      )}

      {/* Overlay to close sidebars */}
      {(isSidebarOpen || isCartSidebarOpen || isSearchSidebarOpen) && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => {
            setIsSidebarOpen(false);
            setIsCartSidebarOpen(false);
            setIsSearchSidebarOpen(false);
          }}
        />
      )}
    </>
  );
}

