import React, { Component } from 'react';
class Search extends Component {
    render() {
        return (
            <div className="flex bg-red-500 justify-between
            items-center py-20 px-36 border-box">
                <p className="font-bold text-white text-6xl">Search what you want!</p>
                <input className="w-96 h-10 rounded-md p-2 outline-none" placeholder='Search...'/>
            </div>
        );
    }
}

export default Search;