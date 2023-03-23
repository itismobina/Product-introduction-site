import React from "react";
import Background from "./images/Back.jpg";

const Banner = () => {
    return (
        <div className="w-full relative">
            <img src={Background} alt="background" className="w-full h-4/5"/>
            <div className="absolute top-60 left-40">
                <h1 className="text-8xl text-gray-700 font-bold">GitHub</h1>
                <p className="text-7xl text-gray-600">
                    We're learning <span className="font-bold text-red-500">React.js</span>
                </p>
            </div>
        </div>
    );
};

export default Banner;