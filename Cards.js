import React, { Component } from "react";
import Card from "./Card";

import Iphone10 from "./images/iphone10.jpg";
import Iphone11 from "./images/iphone11.png";
import Iphone12 from "./images/iphone12.jpg";
import Iphone13 from "./images/iphone13.jpg";

class Cards extends Component {
    render () {
        return (
            <div className="flex justify-around">
                <Card image={Iphone12} title="Iphone 10" price="360$"/>
                <Card image={Iphone12} title="Iphone 11" price="470$"/>
                <Card image={Iphone12} title="Iphone 10" price="500$"/>
                <Card image={Iphone12} title="Iphone 10" price="490$"/>
            </div>
        );
    };
};

export default Cards;