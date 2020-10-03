import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Footer() {
    return (
        <Foote>
            <div className='legal'>
                <h1>LEGAL</h1>
                <Link to='/condiciones'><p>Condiciones de servicio</p></Link>
                <Link to='/privacidad'><p>Política de privacidad </p></Link>
                
                <p>Denunciar una infracción</p>
            </div>
            <div className='pab'>
                <h1>PUBLICIDAD</h1>
                <p>Comprar anuncios</p>
                <p>Normas de publicidad </p>
                <p>Pautas de la marca</p>
            </div>
            <div className='pab'>
                <h1>COMUNIDAD</h1>
                <p>Preguntas frecuentes</p>
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
    }

    .legal{
        color: #fff;
        flex:1;
        display:block;
        text-align:left;
        padding-left: 30px;
        /* padding-right: 0px; */
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
