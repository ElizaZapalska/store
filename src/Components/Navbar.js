import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import "./Navbar.css"
import '../App.css';


function Navbar() {


    const changeMenuView = () => {
        const menuList = document.getElementById('navbar-list');
        const container = document.getElementById('navbar-container');
        const navbar = document.getElementById('navbar');
        if(window.innerWidth <= 960) {
            menuList.className = "navbar-mobile-list";
            container.className = "navbar-container-mobile";
            navbar.className = "navbar-mobile";
        } else {
            menuList.className = "navbar-list";
            container.className = "navbar-container";
            navbar.className = "navbar";
        }
    };

    window.addEventListener('resize', changeMenuView)

    return(
        <nav id={"navbar"} className={'navbar'}>
        <div id={"navbar-container"} className={'navbar-container'}>
            <ul id={"navbar-list"} className={"navbar-list"}>
                <li className={"nav-item"}><Link className={"nav-link"} to={"/products-page"}>Products</Link></li>
                <li className={"nav-item"}><Link className={"nav-link"} to={"/aboutus-page"}>About Us</Link></li>
                <li className={"nav-item"}><Link className={"nav-link"} to={"/login-page"}>Log In</Link></li>
                <li className={"nav-item"} ><Link className={"nav-link"}to={"/basket-page"}><i className="fas fa-shopping-cart"></i></Link></li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar