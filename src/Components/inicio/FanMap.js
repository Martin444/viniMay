import React from 'react'
import styled from 'styled-components'
import Mocku1 from '../../images/mockups_03.png'
import Mocku2 from '../../images/mockups_04.png'
import Map from '../../images/mockups_20.png'

export default function FanMap() {
    return (
        <Fanat>
            <h1 className='line3'>INTERACTUÁ CON FANÁTICOS DE OTROS PAISES</h1>
            <p className='line2'>BUSCÁ LAS MEJORES CAMISETAS DE TODO EL MUNDO</p>
            <p className='line4'>Vinimay App muy pronto disponible en otros paises</p>
            <div className='maped'>
                <img src={Mocku1} alt='Co' className='ImgR'/>
                <img src={Map} alt='Co' className='ImgM'/>
                <img src={Mocku2} alt='Co' className='ImgR'/>
            </div>
        </Fanat>
    )
}


const Fanat = styled.div`
    display: block;
    width: 100%;
    .line4{
            font-size: 20px;
            color:#A8C813;
        }
    .line3{
            font-size: 35px;
            color:#A8C813;
        }
        .line2{
            font-size: 25px;
            color:#171E36;
            padding: 0;
            margin:0;
        }

    .maped{
        justify-content: space-between;
    }

    .ImgR{
        height: 35em;
    }
    .ImgM{
        height: 30em;
    }

    @media screen and (max-width: 769px){

        .line4{
            font-size: 14px;
            color:#A8C813;
        }
        .line3{
                font-size: 25px;
                color:#A8C813;
            }
            .line2{
                font-size: 20px;
                color:#171E36;
                padding: 0;
                margin:0;
            }
        .ImgR{
            display:none;
        }
        .ImgM{
            height: 9em;
        }
    }

`