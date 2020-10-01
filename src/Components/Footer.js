import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <Foote>
            <div className='legal'>
                <h1>LEGAL</h1>
                <p>Condiciones de servicio</p>
                <p>Política de privacidad </p>
                <p>Denunciar una infracción</p>
            </div>
            <div className='pab'>
                <h1>PUBLICIDAD</h1>
                <p>Comprar anuncios</p>
                <p>Normas de publicidad </p>
                <p>Pautas de la marca</p>
            </div>
                
            
        </Foote>
    )
}


const Foote = styled.div`
    background-color: #A8C813;
    display: flex;
    width: 100%;
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
    }
`
