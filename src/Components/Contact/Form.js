import React from 'react'
import styled from 'styled-components'
import Mock2 from '../../images/archivos-16.png'

export default function Form() {

    const handleSubmit = (event) =>{
        event.preventDefault();
        // const form = new FormData(event.target);
        // const newDate = new Date().toISOString();

        // const data = {
        //     'date' : newDate,
        //     'name': form.get('name'),
        //     'last': form.get('last'),
        //     'description': form.get('mesaje'),
        // }
    }

    return (
        <Formula>
            <div className='for'>
                <form onSubmit={handleSubmit}>

                    <div className='inputCar'>
                        <p className='hold'>Nombre</p>
                        <input name='name'  type='text' placeholder='Escribí aca tu nombre' className='Ip'/>
                    </div>
                    <div className='inputCar'>
                        <p className='hold'>Nombre</p>
                        <input name='last' type='text' placeholder='Escribí aca tu apellido' className='Ip'/>
                    </div>
                    <div className='inputCar'>
                        <p className='hold'>Nombre</p>
                        <input name='email' type='text' placeholder='Escribí aca tu mail' className='Ip'/>
                    </div>
                    <div className='inputCar'>
                        <p className='hold'>Nombre</p>
                        <input name='mesaje' type='text' placeholder='Escribí aca tu mensaje' className='IpM'/>
                    </div>

                    <div>
                        <button className='btn'>ENVIAR</button>
                    </div>
                </form>
            </div>
            <div className='imageP'>
            <img src={Mock2} alt='com' className='Img2'/>
            </div>
        </Formula>
    )
}

const Formula = styled.div`
    display: flex;
    justify-content: space-between;
    background: radial-gradient(circle farthest-side,#2A355A,#090C17);

    .for{
        display: block;
        padding: 2rem 3rem;
        text-align: right;
    }

    .btn{
        font-family: 'Montserrat', sans-serif!important;
        font-size: 20px;
        border: none;
        height: 40px;
        width: 140px;
        color: #fff;
        background: #A8C813;
        margin-right: 1.2rem;
        border-radius: 6px;
    }

    .inputCar{
        display:flex;
        align-items: center;
        text-align: left;
    }

    .hold{
        color: #A8C813;
        font-size: 25px;
    }

    .Ip{
        height: 2rem;
        width: 30rem;
        margin: 20px;
        border-radius: 6px;
    }
    .IpM{
        height: 7rem;
        width: 30rem;
        margin: 20px;
        border-radius: 6px;
    }

    .imageP{
        /* flex:1; */
    }

    .Img2{
        height: 40rem;
    }

    @media screen and (max-width: 769px){
        .for{
            display: block;
            padding: 2rem 1rem;
            text-align: right;
        }
        .Img2{
            display: none;
        }

        .inputCar{
            display:block;
            align-items: center;
        }

        .Ip{
            height: 2rem;
            width: 16rem;
            margin: 0px;
            border-radius: 6px;
        }
        .IpM{
            height: 5rem;
            width: 16rem;
            margin: 0px;
            border-radius: 6px;
        }
        .btn{
            font-family: 'Montserrat', sans-serif!important;
            font-size: 20px;
            border: none;
            height: 40px;
            width: 140px;
            color: #fff;
            background: #A8C813;
            margin-top: .7rem;
            border-radius: 6px;
        }
    }
`