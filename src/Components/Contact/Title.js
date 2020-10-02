import React from 'react'
import styled from 'styled-components'

export default function Title() {
    return (
        <Titles>
            <h1 className='line3'>DEJANOS TU MENSAJE</h1>
            <p className='line2'>¡ESTE EQUIPO LO FORMAMOS ENTRE TODOS!</p>
        </Titles>
    )
}

const Titles = styled.div`
    display: block;
    padding: 1rem 0rem 1rem;

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
`