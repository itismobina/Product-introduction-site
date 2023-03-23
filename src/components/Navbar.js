import React, { Component } from 'react';
import logo from "../components/images/logo.png"

const Navbar = () => {
    return (
        <header className="w-full flex h-16 start
        justify-start items-center bg-gray-700 p-0 m-0">
            <div>
                <img src={logo} className="w-16 rounded-2xl p-3" alt='background'/>
            </div>
            <div>
                <ul className="flex list-none">
                    <li className="text-lg p-2 cursor-pointer font-bold text-gray-300 hover:text-white">Home</li>
                    <li className="text-lg p-2 cursor-pointer font-bold text-gray-300 hover:text-white">Products</li>
                    <li className="text-lg p-2 cursor-pointer font-bold text-gray-300 hover:text-white">About Us</li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;