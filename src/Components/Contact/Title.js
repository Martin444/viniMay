import React from 'react'
import styled from 'styled-components'

export default function Titles() {
    return (
        <Title>
            <p className='line3'>DEJANOS TU MENSAJE</p>
            <p className='line2'>¡ESTE EQUIPO LO FORMAMOS ENTRE TODOS!</p>
        </Title>
    )
}

const Title = styled.div`
    display: block;
    text-align:center;
    padding: 1rem 0rem 1rem;

    
    .line3{
        font-size: 35px;
        color:#A8C813;
    }
    .line2{
        font-size: 35px;
        color:#171E36;
        margin:0;
    }
`