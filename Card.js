import React, { Component } from 'react';

class Card extends Component {
    render() {
        const {image ,title, price} = this.props;
        return (
            <div className="flex flex-col items-center m-4 bg-gray-100 rounded-md p-3 border-box">
                <img src={image} alt="phones"/>
                <h3 className="text-gray-800 font-bold text-xl">{title}</h3>
                <p className="w-fit bg-green-600 font-bold text-white rounded-md p-1 border-box">{price}</p>
            </div>
        );
    };
};

export default Card;