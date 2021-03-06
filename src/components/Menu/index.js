import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import { Link } from 'react-router-dom';

import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix Logo"></img>
            </a>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;