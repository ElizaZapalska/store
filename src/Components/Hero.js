import React from 'react';
import '../App.css';
import './Hero.css';
import Button from "./Button";

function Hero() {
    return (
        <div className={'hero'}>

            <div className={'title'}>
                <h1>Eliza's Store</h1>
            </div>

            <div className={'image'}>
                <img src={"../images/herophoto.png"} alt="Smiley face"/>
                    <div className={"button-container"}>
                        <Button className={'btn'} buttonStyle={'btn--outline'} buttonSize={'btn--large'}>Buy now</Button>
                    </div>
            </div>
            </div>
    )
}

export default Hero