import React from 'react';
import apple from "./images/logoapple.png";
import samsung from "./images/logosam.png";
import xiaomi from "./images/logoxiaomi.png";

const Logos = () => {
    return (
        <div className="m-24 text-center">
            <h3 className="font-bold text-5xl">Who Supported Us?</h3>
            <div className="flex justify-around items-center mt-16">
                <img className="w-3/12" src={apple} alt="AppleLogo"/>
                <img className="w-3/12" src={samsung} alt="SamsungLogo"/>
                <img className="w-3/12" src={xiaomi} alt="XiaomiLogo"/>
            </div>
        </div>
    );
};

export default Logos;