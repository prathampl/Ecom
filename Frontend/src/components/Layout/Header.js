// src/components/Layout/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const user = useSelector(state => state.auth.user);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">ShopHub</Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <Link to="/cart" className="relative">
              Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            {user ? (
              <Link to="/profile" className="hover:text-blue-600">Profile</Link>
            ) : (
              <Link to="/login" className="hover:text-blue-600">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
