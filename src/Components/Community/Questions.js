import React from 'react'
import styled from 'styled-components'
import AcordionTile from './AcordionTile'

export default function Questions() {
    return (
        <Querys>
            <h1 className='line1'>PREGUNTAS FRECUENTES</h1>
            <div className='list'>
                <AcordionTile/>
                <AcordionTile/>
                <AcordionTile/>
                <AcordionTile/>
                <AcordionTile/>
                <AcordionTile/>
                <AcordionTile/>
                <AcordionTile/>
                <AcordionTile/>
                <AcordionTile/>
                <AcordionTile/>
            </div>
        </Querys>
    )
}

const Querys = styled.div`
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 2rem 25rem;
    
    .list{
        width:40rem;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: auto;
    }
    .line1{
        font-size: 35px;
        color:#A8C813;
    }

    @media screen and (max-width: 769px){
        padding: 0rem 2rem;
        .list{
            width: 17rem;
        }
    }

`