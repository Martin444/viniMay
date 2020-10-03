import React from 'react'
import styled from 'styled-components'
import Tem from '../../images/ministry-3.jpg'
import Log from '../../images/logo.png'
import CardTeam from './CardTeam'

export default function TeamVini() {
    return (
        <Team>
            <h1 className='line1'>Equipo</h1>
            <img src={Log} alt='ime' className='ImgM'/>
            <div className='lista'>
                <CardTeam/>
                <CardTeam/>
                <CardTeam/>
                <CardTeam/>
                <CardTeam/>
                <CardTeam/>
                <CardTeam/>
            </div>
        </Team>
    )
}


const Team = styled.div`
    margin:0;
    padding: auto;
    align-content:center;
    display: block;
    align-items: center;
    width: 100%;
    /* heigh]t: 100vh; */
    background-image: linear-gradient(to bottom, rgba(23, 30, 54, 0.75), #171E36), url(${Tem});
    background-size: cover;

    .line1{
        margin-top: 10px;
        padding-top: 10px;
        color:#A8C813;
        font-size: 30px;
    }

    .ImgM{
        height: 3rem;
        margin-top: 0px;
    }

    .lista{
        display: flex;
        flex-wrap: wrap;
        padding: 0rem 10rem;
        justify-content: center;

    }

    @media screen and (max-width: 769px){
        .lista{
            padding: 0;
        }
    }
`