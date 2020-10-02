import React from 'react'
import styled from 'styled-components'

export default function Box() {
    return (
        <Boxe>
            Soy un boc
        </Boxe>
    )
}


const Boxe =  styled.div`

    height: 6rem;
    background: radial-gradient(circle farthest-side,#2A355A,#090C17);
`
