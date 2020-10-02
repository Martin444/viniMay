import React from 'react'
import styled from 'styled-components'
import Mock1 from '../images/archivos-15.png'
import Mock2 from '../images/archivos-16.png'
import Mock3 from '../images/archivos-09.png'
import red1 from '../images/archivos-11.png'
import red2 from '../images/archivos-12.png'
import red3 from '../images/archivos-13.png'
import red4 from '../images/archivos-14.png'

export default function Follow() {
    return (
        <Following>
            <div className='moc1'>
                <img src={Mock1} alt='com' className='Img1'/>
            </div>
            <div className='Foll'>
                <img src={Mock3} alt='com' className='Img3'/>
                <h1>¡SEGUINOS EN NUESTRAS REDES!</h1>
                <div>
                <img src={red1} alt='com' className='redImg'/>
                <img src={red2} alt='com' className='redImg'/>
                <img src={red3} alt='com' className='redImg'/>
                <img src={red4} alt='com' className='redImg'/>

                </div>
            </div>
            <div className='moc2'>
                <img src={Mock2} alt='com' className='Img2'/>
            </div>
        </Following>
    )
}


const Following = styled.div`
        display:flex;
        background: radial-gradient(circle farthest-side,#2A355A,#090C17);
        justify-content: space-between;
        color: #A8C813; 

    .Img1{
        height: 20rem;
    }

    .Foll{
        display: block;
    }
    .Img2{
        height: 20rem;
    }
    .Img3{
        margin-top: 20px;
        height: 10rem;
    }

    .redImg{
    
        height: 3rem;
        margin: 10px;
        cursor:pointer; 
    }
`
