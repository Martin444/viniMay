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

    .list{
        padding: 0rem 10rem;
    }
`