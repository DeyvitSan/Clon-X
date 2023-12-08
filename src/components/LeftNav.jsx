// LeftNav.js
import React from 'react';
import Img from "next/image";
import './styles.css'
import logo from "@/public/assets/logoX.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


function LeftNav() {
    return (
        <aside className="contain_left_nav">
            <Img className="logo" src={logo} alt=""></Img>
            <div className="icon_container">
                <FontAwesomeIcon icon={faHome} className="home-icon" />
                <h1 className="text_inicio">Inicio</h1>
            </div>
        </aside>
    );
}

export default LeftNav;
