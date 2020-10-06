import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Footer() {
    return (
        <Foote>
            <div className='legal'>
                <h1>LEGAL</h1>
                <ul className='navLink'>
                    <li>
                        <Link to='/condiciones'>Condiciones de servicio</Link>
                    </li>
                    <li>
                        <Link to='/privacidad'>Política de privacidad</Link>
                    </li>
                    <li>
                        <Link to='/'>Denunciar una infracción</Link>
                    </li>
                </ul>
                
                
                <p></p>
            </div>
            <div className='pab'>
                <h1>PUBLICIDAD</h1>
                <ul className='navLink'>
                    <li>
                        <Link to='/'>Comprar anuncios</Link>
                    </li>
                    <li>
                        <Link to='/'>Normas de publicidad</Link>
                    </li>
                    <li>
                        <Link to='/'>Pautas de la marca</Link>
                    </li>
                </ul>
            </div>
            <div className='pab'>
                <h1>COMUNIDAD</h1>
                <ul className='navLink'>
                    <li>
                        <Link to='/'>Preguntas frecuentes</Link>
                    </li>
                </ul>
                <p></p>
            </div>
                
            
        </Foote>
    )
}


const Foote = styled.div`
    background-color: #A8C813;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    h1{
        color: #fff;
        margin-left: 40px;
    }

    .legal {
        color: #fff;
        flex:1;
        display:block;
        text-align:left;
        padding-left: 30px;
        text-decoration: none;
        /* padding-right: 0px; */
        outline: none;
    }
    
    
    .navLink {
        text-decoration: none;
        list-style-type: none;
        background: transparent;
        margin: 0;
        color: #fff;

    }

    li{
        margin-bottom: 20px;

    }

    .navLink a{
        text-decoration: none;
        color: #fff;
        list-style-type: none;
        background: transparent;

        &:hover{
        list-style-type: none;
            display:block;
            color: #000;
                border: none;
                cursor: pointer;
                outline: none;
                background: transparent;
        }
      
    }
    .pab{
        flex:1;
        display:block;
        text-align:left;
        color:#fff;
        padding-left: 30px;
    }

    @media screen and (max-width: 760px){
        display:block;
        margin: 0;
        padding: 1rem 2rem;
    }
`
