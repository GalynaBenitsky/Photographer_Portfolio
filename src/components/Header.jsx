import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div className='header'>
       
        <Link className="navbar-brand" to="/" id='logo'>KOLTUNOVSKA PHOTOGRAPHY</Link>
                
        <nav className="navbar navbar-expand">
           
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Головна</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Портфоліо</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/advices">Поради</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/promo">Новини/Акції</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">Контакти</Link>
                    </li>
                </ul>
    

        </nav>
    </div>    

    )
}

export default Header
