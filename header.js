import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './style.css';
import Logo from '../../assets/logo.jpg';


function Header(){
    return (
        <header>
            <img id= 'logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                       <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='Contato'>
                       <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='Fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to= 'Comentarios'>
                    <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
