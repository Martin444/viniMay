import React from 'react'
import styled from 'styled-components'

import Ios from '../../images/archivos-07.png'
import Android from '../../images/archivos-08.png'

export default function Downin() {
    return (
        <Dw>
            <p className='line2'>¡BAJATE LA APP!</p>
            <div>
                <img src={Ios} alt='com' className='ImgD'/>
                <img src={Android} alt='com' className='ImgD'/>
            </div>
        </Dw>
    )
}


const Dw = styled.div`
padding: 1rem 0rem;

.line3{
        font-size: 35px;
        color:#A8C813;
    }
    .line2{
        font-size: 35px;
        color:#171E36;
        padding: 0;
        margin:0;
    }

    .ImgD{
        height: 6rem;
    }

    @media screen and (max-width: 769px){
        .line3{
            font-size: 25px;
            color:#A8C813;
        }
        .line2{
            font-size: 25px;
            color:#171E36;
            padding: 0;
            margin:0;
        }

        .ImgD{
            height: 4rem;
        }
    }
`