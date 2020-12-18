import React from 'react';
import '../App.css';
import './Hero.css';
import Button from "./Button";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className={'hero'}>

            <div className={'title'}>
                <h1>Eliza's Store</h1>
            </div>

            <div className={'image'}>
                <img src={"../images/herophoto.png"} alt="Smiley face"/>
                    <Link to={'/products-page'} className={"button-container"}>
                        <Button className={'btn'} buttonStyle={'btn--outline'} buttonSize={'btn--large'}>Buy now</Button>
                    </Link>
            </div>
            </div>
    )
}

export default Hero